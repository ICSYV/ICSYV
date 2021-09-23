import React, { useState, useContext, useEffect } from "react";
import { Modal } from "./modal";

export const SelectModal = (props) => {
  const handlerClickEvent = (event) => {
    console.log(props);
    props.setData("play");
    props.Category(event.target.value);
  };
  return (
    <Modal visible={props.visible}>
      <div class="middle">
        <label>
          <input
            type="radio"
            name="radio"
            value="standard"
            onClick={handlerClickEvent}
          />
          <div className="standard box">
            <span> 표준어 </span>
          </div>
        </label>

        <label>
          <input
            type="radio"
            name="radio"
            value="chungcheong"
            onClick={handlerClickEvent}
          />
          <div className="chungcheong box">
            <span> 충청도 </span>
          </div>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="gyeongnam"
            onClick={handlerClickEvent}
          />
          <div className="gyeongnam box">
            <span> 경상 </span>
          </div>
        </label>
      </div>
    </Modal>
  );
};
