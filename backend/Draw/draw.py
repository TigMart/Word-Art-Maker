import json
import redis
from redis.commands.json.path import Path
import requests
import numpy as np
from PIL import Image
from flask import Flask, request
from flask_cors import CORS
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

app = Flask(__name__)
CORS(app)

redis_client = redis.Redis(host='redis-19055.c9.us-east-1-4.ec2.cloud.redislabs.com', port=19055, db=0, password='D5VhTzVQQ6ReaXgjemow4onqF1tqbt5M')

@app.route('/data', methods=['POST'])

def postData():
    data = request.data
    dataJson = json.loads(data)
    redis_client.json().set("style", "$", dataJson)
    return 'Success'



def wordcloud_svg():
    DrawData = redis_client.json().get("style")
    shape =  DrawData.get("data").get("shape")
    words = DrawData.get("words")
    palette = DrawData.get("data").get("palette")
    font = DrawData.get("data").get("font")

    stopword = STOPWORDS
    custom_mask = np.array(Image.open(requests.get(shape, stream = True).raw))
    paletteImg = np.array(Image.open(requests.get(palette, stream = True).raw))

    wc = WordCloud(
        background_color="transparent",
        mask=custom_mask,
        repeat=True,
        max_words=2000,
        stopwords=stopword,
        font_path=font,
    )

    wc.generate(" ".join(words))
    image_colors = ImageColorGenerator(paletteImg)

    wc.recolor(color_func=image_colors)
    return wc.to_svg()


redis_client.close()

@app.route("/svg")
def svg():
    return wordcloud_svg()


if __name__ == "__main__":
    app.run(port=5003)
