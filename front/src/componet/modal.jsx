import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export const Modal = (props) => {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    console.log(visible);
    console.log(props.visible);
    if (props.visible) {
      setvisible(true);
    }
  }, [props.visible]);
  useEffect(() => {
    if (visible) {
      document.getElementById("modal-overlay").style.display = "block";
      document.getElementById("modal-wrapper").style.display = "block";
    } else {
      console.log("modal : none");
      document.getElementById("modal-overlay").style.display = "none";
      document.getElementById("modal-wrapper").style.display = "none";
    }
  }, [visible]);
  return (
    <div className="modal">
      <div className="ModalOverlay" id="modal-overlay">
        <div className="ModalWrapper" id="modal-wrapper" tabIndex="-1">
          <div className="ModalInner" tabIndex="0" id="modal-inner">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
