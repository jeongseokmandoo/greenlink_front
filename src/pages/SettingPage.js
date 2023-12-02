import React, { useState } from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import x_icon from "../assets/X_Icon.png";
import styles from "./Setting.module.css";
import { useNavigate } from "react-router-dom";
import PersonalsetBtn from "../components/PersonalsetBtn.js";

const NotifiBar = () => {
  const [notification, setNotification] = useState(true);
  const [buttonStyle, setButtonStyle] = useState({});

  const handleNotification = () => {
    setNotification(!notification);
    if (notification) {
      setButtonStyle({
        border: "4px double red",
        color: "red",
      });
    } else {
      setButtonStyle({});
    }
  };

  return (
    <div className={styles.clickbox}>
      🔔 &nbsp;&nbsp;&nbsp;알림
      <button
        className={styles.notifibtn}
        style={buttonStyle}
        onClick={handleNotification}
      >
        {notification ? "ON" : "OFF"}
      </button>
    </div>
  );
};

function SettingPage() {
  const navigate = useNavigate("/api/accounthome");
  const personallock = () => {
    navigate("/security");
  };

  return (
    <div className={styles.main}>
      <TopNav
        className={styles.topNav}
        text="설정"
        link1={undefined}
        link2="/api/home"
        icon1={no_icon}
        icon2={x_icon}
      />
      <div className={styles.contents}>
        <PersonalsetBtn
          text="🔒 &nbsp;&nbsp;   개인/보안"
          onClick={personallock}
        />
        <br />
        <NotifiBar />
      </div>
      <MainNav />
    </div>
  );
}

export default SettingPage;
