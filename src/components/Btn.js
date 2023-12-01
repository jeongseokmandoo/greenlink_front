import React from "react";
import styles from "./Btn.module.css";
import { Link } from "react-router-dom";

function Btn({ text, link, onClick }) {
  return (
    <div>
      <Link to={link} className={styles.Btn} onClick={onClick}>
        {text}
      </Link>
    </div>
  );
}

export default Btn;
