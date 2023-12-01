import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
import home_icon from "../assets/Home_Icon.png";
import gallery_icon from "../assets/Gallery_Icon.png";
import user_icon from "../assets/User_Icon.png";

const icontest_style = {
  width: "calc(4vw + 1.5vh)",
  height: "calc(4vw + 1.5vh)",
};

function MainNav(props) {
  return (
    <div className={styles.mainnav}>
      <Link to="/galleryhome">
        <div>
          <img src={gallery_icon} alt="icon1" style={icontest_style} />
        </div>
      </Link>
      <Link to="/api/home">
        <div>
          <img src={home_icon} alt="icon2" style={icontest_style} />
        </div>
      </Link>
      <Link to="/api/accounthome">
        <div>
          <img src={user_icon} alt="icon3" style={icontest_style} />
        </div>
      </Link>
    </div>
  );
}

export default MainNav;
