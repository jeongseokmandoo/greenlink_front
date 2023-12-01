import React, { useEffect } from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../components/MainNav";
import AccountBox from "../components/AccountBox";
import { useState } from "react";
import styles from "./AccounthomePage.module.css";
import Btn3 from "../components/Btn3";

function Accounthome() {
  const [isInvited, setisInvited] = useState(false);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const userInfo = {
  //   user: {
  //     id: 8,
  //     username: "01024242424",
  //     korean_name: "이보름보름",
  //     profile_picture:
  //       "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2F63%2Fd1%2F4763d159c22b4256cfbb9c284613008f.jpg&type=sc960_832",
  //     flower_pot: {
  //       pot_number: 1234,
  //       plant_name: "둘째매화",
  //       start_date: "2023-11-29",
  //       plant_type: "매화",
  //       moisture_level: 90,
  //     },
  //     nickname: "해피캣",
  //   },
  //   message: "login success",
  //   token: {
  //     access:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyODEwOTY0LCJpYXQiOjE3MDEyNzQ5NjQsImp0aSI6ImVmOWU4NDJkZDdkMzQ2Njk5ODkzOWVlYzZjYmQ1ZDUyIiwidXNlcl9pZCI6OH0.zsSMFFhBioXLPuSmFlpZIyxRSfY1aji7VgcpHoDq-TE",
  //   },
  // };
  // const accessToken = userInfo.token.access;

  const userInfo = JSON.parse(localStorage.getItem("data"));
  // const accessToken = userInfo.token.access;
  const userID = userInfo.user.id;
  const userName = userInfo.user.korean_name;
  const nickName = userInfo.user.nickname;
  const profilePicture = userInfo.user.profile_picture;
  const familyInvite = userInfo.user.flower_pot.pot_number;

  // const familyMembersInfo = {
  //   familyMembers: [
  //     {
  //       id: "5",
  //       nickname: "youngest",
  //       profile_picture:
  //         "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2F63%2Fd1%2F4763d159c22b4256cfbb9c284613008f.jpg&type=sc960_832",
  //       korean_name: "Park Kyeong-bin",
  //       is_current_user: true,
  //     },
  //     {
  //       id: "2",
  //       nickname: "youngest",
  //       profile_picture:
  //         "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2F63%2Fd1%2F4763d159c22b4256cfbb9c284613008f.jpg&type=sc960_832",
  //       korean_name: "Lee Bo-reum",
  //       is_current_user: true,
  //     },
  //     {
  //       id: "3",
  //       nickname: "youngest",
  //       profile_picture:
  //         "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2F63%2Fd1%2F4763d159c22b4256cfbb9c284613008f.jpg&type=sc960_832",
  //       korean_name: "Iboreumboreum",
  //       is_current_user: true,
  //     },
  //     {
  //       id: "4",
  //       nickname: "Happy Cat",
  //       profile_picture:
  //         "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2F63%2Fd1%2F4763d159c22b4256cfbb9c284613008f.jpg&type=sc960_832",
  //       korean_name: "Iboreumboreum",
  //       is_current_user: true,
  //     },
  //   ],
  // };

  // const familyMembers = familyMembersInfo.familyMembers;

  const handleInviteFamily = () => {
    setisInvited(!isInvited);
  };

  useEffect(() => {
    fetch(
      "https://port-0-cloudtype-32updzt2alpmcc05e.sel4.cloudtype.app/api/account/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userInfo.token.access}`,
        },
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setFamilyMembers(data.family_members);
        setIsLoading(true);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <TopNav
        text="우리 가족"
        link1="undefined"
        link2="/setting"
        icon1={no_icon}
        icon2={setting_icon}
      />
      <div>
        <br />
        <br />
        <AccountBox
          className={styles.accountbox}
          src={profilePicture}
          peoplename={userName}
          nickname={nickName}
          key={userID}
        />
        <br />
        <br />
        <Btn3 text="내 프로필 수정" link="/api/accountmodify" />
        <div className={styles.graybox}></div>
        <h4 style={{ fontSize: "2.7em", marginLeft: "6vw", color: "#4D5053" }}>
          👨‍👩‍👧‍👦 연결된 가족
        </h4>
        {!isLoading ? (
          <p>Loading...</p>
        ) : (
          familyMembers
            .filter((member) => {
              if (member.id !== userID) return true;
            })
            .map((member) => (
              <AccountBox
                className={styles.accountbox}
                src={member.profile_picture}
                peoplename={member.korean_name}
                nickname={member.nickname}
                key={member.id} // 키로 한국 이름을 사용합니다. 이 값이 고유한지 확인하세요.
              />
            ))
        )}
      </div>
      <div className={styles.graybox}></div>
      <button
        onClick={handleInviteFamily}
        style={{
          padding: "15px 30px",
          fontSize: "2.6em",
          fontWeight: "bold",
          fontSize: "2.7em",
          marginLeft: "3vw",
          marginTop: "3vw",
          backgroundColor: "transparent", // 또는 backgroundColor: '',
          color: "#4D5053", // 원하는 글자색을 지정하세요
          cursor: "pointer",
          border: "none", // 테두리 없음
        }}
      >
        {" "}
        👨‍👩‍👧‍👦 가족 초대하기
      </button>
      {isInvited && (
        <p
          style={{
            fontSize: "calc(1.25vh + 1.25vw)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          {familyInvite}을 가족에게 보내주세요🌼 ˃ᴗ˂ 🌼
        </p>
      )}
      <MainNav />
    </div>
  );
}

export default Accounthome;
