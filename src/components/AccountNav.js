import { Link } from "react-router-dom";
import styles from "./AccountNav.module.css";

function AccountNav({ text1, text2, link1 }) {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>
        {" "}
        <div
          style={{ fontSize: "45px", textDecoration: "none", color: "black" }}
        >
          {" "}
          ╳{" "}
        </div>{" "}
      </Link>
      <div style={{ display: "flex", textAlign: "center" }}>
        <h2 style={{ fontSize: "55px", fontWeight: "600" }}>{text1}</h2>
      </div>
      <Link to={link1} className={styles.link}>
        <div style={{ fontSize: "35px", color: "#000000" }}>{text2}</div>
      </Link>
    </div>
  );
}

export default AccountNav;
