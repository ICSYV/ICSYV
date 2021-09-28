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
      </div>
    </Modal>
  );
};
