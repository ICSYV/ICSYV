import React, { useState, useContext, useEffect } from "react";
import { Modal } from "./modal";

export const PlayerModal = (props) => {
  const handlerClickEvent = (event) => {
    props.setData("play");
    props.Category(event.target.value);
  };
  return (
    <Modal visible={props.visible}>
      <div class="player">
        <label>
          <input
            type="radio"
            name="radio"
            value="standard"
            onClick={handlerClickEvent}
          />
          <div className="play box">
            <span> 재생 </span>
          </div>
        </label>
        <label>
          <input
            type="radio"
            name="radio"
            value="chungcheong"
            onClick={handlerClickEvent}
          />
          <div className="download box">
            <span> 다운로드 </span>
          </div>
        </label>
      </div>
    </Modal>
  );
};
