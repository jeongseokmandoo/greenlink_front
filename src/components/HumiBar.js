import React from "react";
import styles from "./HumiBar.module.css";
import polygon from "../assets/polygon.png";
import drop from "../assets/drop.png";

function HumidiBar({ humidity = 60 }) {
  const gaugeHeight = ((100 - humidity) * 35.5) / 100; // 습도에 비례하여 게이지 바의 높이를 결정합니다.

  return (
    <>
      <img className={styles.drop} src={drop} alt="drop" />
      <div className={styles.gaugeContainer}>
        <div
          className={styles.polygonbox}
          style={{ height: `${gaugeHeight}vh` }}
        >
          <img src={polygon} alt="polygon" />
        </div>
        <div className={styles.gauge} style={{ height: `${gaugeHeight}vh` }} />
      </div>
    </>
  );
}

export default HumidiBar;
