// ProfileImage.js
import React from "react";
import { useLocation } from "react-router-dom";
// import "./PlantImage.css";
import pot from "../assets/pot.png";

const style_home = {
  width: "69vw",
  height: "69vw",
};

const style_account = {
  width: "40vw",
  height: "40vw",
};

function PlantImage({ className }) {
  const location = useLocation();

  let style;
  if (location.pathname === "/api/home") {
    style = style_home;
  } else if (location.pathname === "/api/homemodify") {
    style = style_account;
  }

  return (
    <div style={style} className={className}>
      <img src={pot} alt="Profile" />
    </div>
  );
}

export default PlantImage;
