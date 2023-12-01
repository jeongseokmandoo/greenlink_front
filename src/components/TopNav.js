//TopNav.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";

const icontest_style = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover", //이미지를 div에 맞게 조절
};

function TopNav({ text, link1, link2, icon1, icon2 }) {
  return (
    <div className={styles.topNav}>
      <div className={styles.title}>{text}</div>
      <div className={styles.btnbox}>
        <Link className={styles.btn} to={link1}>
          <div
            style={{ ...icontest_style, backgroundImage: `url(${icon1})` }} //icon1을 배경 이미지로 사용
          />
        </Link>
        <Link className={styles.btn} to={link2}>
          <div
            style={{ ...icontest_style, backgroundImage: `url(${icon2})` }} //icon2를 배경 이미지로 사용
          />
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
