import React from "react";
import styles from "./BigBtn.module.css";

function BigBtn({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.BigBtn}>
      {text}
    </button>
  );
}

export default BigBtn;
