import React from "react";
import styles from "./Btn3.module.css";
import { Link } from "react-router-dom";

function Btn3({ text, link }) {
  return (
    <div className={styles.btn2}>
      <Link to={link} className={styles.btn2link}>
        {text}
      </Link>
    </div>
  );
}

export default Btn3;
