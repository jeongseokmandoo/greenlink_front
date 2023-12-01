import React from "react";
import styles from "./BlueBtn.module.css";

function BlueBtn({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.Btn}>
      {text}
    </button>
  );
}

export default BlueBtn;
