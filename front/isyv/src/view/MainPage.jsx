import React from "react";
import Header from "../componet/header";
import Footer from "../componet/footer";
import Logo from "../componet/logo";
import Main from "../componet/Main";
export default function MainPage() {
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
            <div className="radio-container">
              <div className="convert-button">
                <button className="button" id="convert">
                  변환
                </button>
              </div>
              <div className="radio">
                <input type="radio" name="test" value="test" />
                test
              </div>
              <div className="radio">
                <input type="radio" name="test" value="test" />
                test
              </div>
              <div className="radio">
                <input type="radio" name="test" value="test" />
                test
              </div>
            </div>
            <div className="button-container">
              <button className="button" id="listen">
                오디오 입력
              </button>
              <button className="button" id="listen">
                듣기
              </button>
              <button className="button" id="download">
                다운로드
              </button>
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
    </div>
  );
}
