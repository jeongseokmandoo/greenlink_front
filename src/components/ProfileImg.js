import React from "react";
import styles from "./ProfileImg.module.css";

function ProfileImg({ src, alt }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "8.5vh",
        left: "22vw",
        display: "flex",
        backgroundColor: "#f5f5f583",
        justifyContent: "center",
        AlignItems: "center",
        BorderRadius: "50%",
        boxShadow: "-1px 7px 40px 5px rgb(174, 174, 174)",
        width: "40vw",
        height: "40vw",
        borderRadius: "50%",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          bottom: "2vh",
          width: "40vw",
          height: "auto",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

function ProfileImg2({ src, alt }) {
  return (
    <div className={styles.profileImage2}>
      <img src={src} alt={alt} />
    </div>
  );
}

export { ProfileImg, ProfileImg2 };
