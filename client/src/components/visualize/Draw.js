import React, { memo, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { dataPost, getPicture } from "../../api/data";
import { toast } from "react-toastify";

const Draw = () => {
  const [data2, setData] = useState();
  console.log(data2);
  const data = useSelector((state) => {
    console.log(state);
    return {
      data: state.data,
      words: state.words.words.map((el) => el.word),
    };
  });

  const postData = async () => {
    try {
      const res = await dataPost(data);
      if (res.data) {
        const res2 = await getPicture();
        {
          setData(res2.data);
        }
      }
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response);
    }
  };

  return (
    <div className="draw-parent rounded-3 overflow-hidden shadow">
      <div className="d-grid gap-2">
        <Button
          onClick={postData}
          variant="success"
          className="rounded-top btn-primary"
        >
          Visualize
        </Button>
      </div>
      <div className="draw-parent position-relative">
        <div className="abscenter" dangerouslySetInnerHTML={{ __html: data2 }}></div>
      </div>
    </div>
  );
};

export default memo(Draw);
