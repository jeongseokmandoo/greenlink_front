import React from "react";
import styles from "./PersonalBtn.module.css";

function PersonalsetBtn({ text, onClick }) {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default PersonalsetBtn;
