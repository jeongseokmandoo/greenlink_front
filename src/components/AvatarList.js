import React from "react";
import AvatarIcon from "./AvatarIcon";
import styles from "./AvatarList.module.css";

const avatar1 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar1.png";
const avatar2 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar2.png";
const avatar3 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar3.png";
const avatar4 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar4.png";
const avatar5 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar5.png";
const avatar6 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar6.png";
const avatar7 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar7.png";
const avatar8 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar8.png";
const avatar9 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar9.png";
const avatar10 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar10.png";
const avatar11 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar11.png";
const avatar12 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar12.png";
const avatar13 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar13.png";
const avatar14 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar14.png";
const avatar15 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar15.png";

function AvatarList({ onClick }) {
  return (
    <div className={styles.bigbox}>
      <div className={styles.box}>
        <AvatarIcon src={avatar1} alt="1" onClick={onClick} />
        <AvatarIcon src={avatar2} alt="2" onClick={onClick} />
        <AvatarIcon src={avatar3} alt="3" onClick={onClick} />
        <AvatarIcon src={avatar4} alt="4" onClick={onClick} />
        <AvatarIcon src={avatar5} alt="5" onClick={onClick} />
      </div>
      <div className={styles.box}>
        <AvatarIcon src={avatar6} alt="6" onClick={onClick} />
        <AvatarIcon src={avatar7} alt="7" onClick={onClick} />
        <AvatarIcon src={avatar8} alt="8" onClick={onClick} />
        <AvatarIcon src={avatar9} alt="9" onClick={onClick} />
        <AvatarIcon src={avatar10} alt="10" onClick={onClick} />
      </div>
      <div className={styles.box}>
        <AvatarIcon src={avatar11} alt="11" onClick={onClick} />
        <AvatarIcon src={avatar12} alt="12" onClick={onClick} />
        <AvatarIcon src={avatar13} alt="13" onClick={onClick} />
        <AvatarIcon src={avatar14} alt="14" onClick={onClick} />
        <AvatarIcon src={avatar15} alt="15" onClick={onClick} />
      </div>
    </div>
  );
}

export default AvatarList;
