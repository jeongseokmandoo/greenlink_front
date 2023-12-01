import React from "react";
import { Link } from "react-router-dom";

const h1style = {
  marginTop: "10vh",
  jusifyContent: "center",
  fontSize: "calc(2vh + 2vw)",
  alignItems: "center",
};

const linkstyle = {
  fontSize: "calc(1vh + 1.5vw)",
  textDecoration: "none",
};

function Loginplease(prop) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={h1style}>로그인 후 이용해주세요.</h1>
      <Link to={"/api/login"} style={linkstyle}>
        {" "}
        로그인 페이지로 이동
      </Link>
    </div>
  );
}

export default Loginplease;
