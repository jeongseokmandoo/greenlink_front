import { ProfileImg2 } from "./ProfileImg";
import React from "react";

const style = {
  // display: "inline-flex",
  width: "100vw",
};

const contentstyle = {
  diplay: "flex",
  flexDirection: "column",
};

const namestyle = {
  fontSize: "2.4em",
  fontWeight: "730",
  marginTop: "3vh",
  marginLeft: "7vw",
};

const nicknamestyle = {
  fontSize: "2em",
  fontWeight: "350",
  marginTop: "0.5vh",
  opacity: "40%",
  marginLeft: "7vw",
};

function AccountBox({ className, src, peoplename, nickname, key }) {
  return (
    <div className={className} style={style} key={key}>
      <ProfileImg2 src={src} alt="프로필 이미지" />
      <div style={contentstyle}>
        <div style={namestyle}>{peoplename}</div>
        <div style={nicknamestyle}>{nickname}</div>
      </div>
    </div>
  );
}

export default AccountBox;
