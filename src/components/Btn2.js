import React from "react";
import styles from "./Btn2.module.css";
import { Link } from "react-router-dom";

function Btn2({ text, link }) {
  return (
    <div className={styles.btn2}>
      <Link to={link} className={styles.btn2link}>
        {text}
      </Link>
    </div>
  );
}

export default Btn2;
