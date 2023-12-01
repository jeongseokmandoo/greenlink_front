import React from "react";
import styles from "./SignupBtn.module.css";

function SignupBtn({ text, onClick }) {
  return (
    <div>
      <button
        style={{ borderRadius: "50px", marginTop: "10vh" }}
        className={styles.SignupBtn}
        onClick={onClick}
      >
        {" "}
        {text}
      </button>
    </div>
  );
}

export default SignupBtn;
