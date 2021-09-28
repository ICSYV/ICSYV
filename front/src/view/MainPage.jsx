import React, { useEffect, useState } from "react";
import Header from "../componet/header";
import Footer from "../componet/footer";
import Logo from "../componet/logo";
import Main from "../componet/Main";
import { ImageButton } from "../componet/ImageButton";
import axios from 'axios';

import { Modal } from "../componet/modal";
export default function MainPage() {
  const [visible, setVisible] = useState(false);
  const [isAudio, setAudio] = useState(false);
  const [clickFlag, setClick] = useState("");
  

  const handlerClickEvent = (event) => {
    setVisible(false);
  };

  const handlerImageButton = () => {
    setVisible(true);
    
    setClick("clicked");
  };
  
  const postData = async () => {
    const form = new FormData()
    var audio = document.getElementById("audio");
    var text = document.getElementById("text");
    form.append('audio', audio.files[0]);
    form.append('text', text.value);


    axios.post("https://localhost:8080/test", form,{
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    }).then(function (response){
       var result = JSON.parse(response.data);
       console.log(result);
    });
  }

  useEffect(() => {
  });
  return (
    <div className="main-page">
      <Header className="header">
        <span className="left-header">부산대학교 졸업과제</span>
        <span className="right-header">너의목소리 보옥사</span>
      </Header>

      <Main className="main-container">
        <Logo className="logo-container">
          <p className="logo-text"> ㄴㅇㄱ </p>
        </Logo>
        <div className="textbox-background">
          <div className="input-container">
            <form>
              <input className="input-tts" id='text' name='text' placeholder="여기에 텍스트 입력" />
            </form>
          </div>

          <div className="event-container">
            <form>
              <input type="file" className="input-voice" id="audio" name="audio" />
            </form>
            <div className="button-container">
              <ImageButton
                src=""
                click={clickFlag}
                event={handlerImageButton}
              />
            </div>
          </div>
        </div>
      </Main>
      <Footer className="footer">
        <div className="occean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </Footer>
      <Modal visible={visible}>
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
    </div>
  );
}
