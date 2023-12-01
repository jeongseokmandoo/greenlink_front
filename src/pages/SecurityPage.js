import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import styles from "./Setting.module.css";
import PersonalsetBtn from "../components/PersonalsetBtn";
import { useNavigate } from "react-router-dom";

function SecurityPage(props) {
  const navigate = useNavigate();

  const logout = () => {
    // 로컬스트리지에서 토큰 삭제
    const data = JSON.parse(localStorage.getItem("data"));
    localStorage.removeItem("data");
    alert("성공적으로 로그아웃 되었습니다.");
    navigate("/");
  };

  const deleteaccount = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const datatoken = data.token.access;

    fetch(
      "https://port-0-cloudtype-32updzt2alpmcc05e.sel4.cloudtype.app/api/account/delete/",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${datatoken} `,
        },

        mode: "cors",
      }
    )
      .then((response) => {
        console.log(response);
        //요청이 성공적으로 이루어졌다면,
        if (response.ok) {
          localStorage.removeItem("data");
          alert("계정이 성공적으로 삭제되었습니다.");
          navigate("/");
        } else {
          throw new Error("계정을 삭제하는데 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("계정을 삭제하는데 실패");
      });
  };

  return (
    <div className={styles.main}>
      <br />
      <br />
      <br />
      <TopNav
        className={styles.topNav}
        text="개인/보안"
        link1={undefined}
        link2="/setting"
        icon1={no_icon}
        icon2={no_icon}
      />
      <br />
      <br />
      <div className={styles.contents}></div>
      <PersonalsetBtn text="로그아웃" onClick={logout} />
      <PersonalsetBtn text="탈퇴하기" onClick={deleteaccount} />
      <MainNav />
    </div>
  );
}

export default SecurityPage;
