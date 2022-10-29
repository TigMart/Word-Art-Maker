import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const SingleFont = ({ fontSrc, fontName, id }) => {
  const dispatch = useDispatch();
  let fontFamily = fontName.split("$")[1];
  fontFamily = fontFamily.replaceAll("_", " ");
  const onFileInput = (_fontSrc) => {
    toDataURL(_fontSrc, function (dataUrl) {
      const fontFace = new FontFace(fontFamily, `url(${dataUrl})`);
      document.fonts.add(fontFace);
      fontFace.load();
    });
  };

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  useEffect(() => {
    onFileInput(fontSrc);
  }, []);

  const getFontId = (id) => {
    dispatch({
      type: "SET_FONT_ID",
      payload: id,
    });
  };

  return (
    <>
      <button onClick={() => getFontId(id)} style={{ fontFamily: fontFamily }}>
        {fontFamily}
      </button>
    </>
  );
};

export default SingleFont;
