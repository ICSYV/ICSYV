import React, { useEffect, useState } from "react";
import Header from "../componet/header";
import Footer from "../componet/footer";
import Logo from "../componet/logo";
import Main from "../componet/Main";
import { ImageButton } from "../componet/ImageButton";
import { ModalController } from "../componet/ModalController";
export default function MainPage() {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState("none");
  const [isAudio, setAudio] = useState(false);
  const [clickFlag, setClick] = useState("");

  const handlerImageButton = () => {
    setVisible(true);
    setClick("clicked");
  };
  useEffect(() => {
    console.log(visible);
    console.log(category);
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
            <input className="input-tts" placeholder="여기에 텍스트 입력" />
          </div>

          <div className="event-container">
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
      <SelectModal
        visible={visible}
        setData={setVisible}
        Category={setCategory}
      />
    </div>
  );
}
