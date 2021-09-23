import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

export const ImageButton = (props) => {
  const [imgsrc, setImgsrc] = useState("");
  const [imageName, setName] = useState("convert-image");
  useEffect(() => {
    if (props.click === "clicked") setName("convert-image-" + props.click);
  }, [props.click]);

  return (
    <div className="image-button-wrapper">
      <div className="image-button" id="image-button" onClick={props.event}>
        <img src="img/convert.svg" className={imageName} style={{}} />
      </div>
    </div>
  );
};
