import React, { useState } from "react";
import AccountNav from "../components/AccountNav";
import styles from "./Signupstep2Page.module.css";
import AvatarList from "../components/AvatarList";
import SignupBtn from "../components/SignupBtn";
import { useNavigate } from "react-router-dom";

const Avatar1 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar1.png";

function Signupstep2Page() {
  const [previewImage, setPreviewImage] = useState(null);
  const [fileListstyle, setFileListstyle] = useState(false); // 선택할 이미지 리스트 처음에 display: none으로
  const navigate = useNavigate();

  const ptag = {
    display: "flex",
    justifyContent: "center",
    fontSize: "calc(1.25vw + 1.25vh)",
    marginBottom: "0",
  };

  const storelocalP3 = () => {
    // 프로필 선택 안했다면
    if (previewImage == null) {
      alert("프로필을 선택해주세요.");
    } //프로필 선택했다면 로컬 스토리지에 데이터 저장 후 url 이동
    else {
      localStorage.setItem("profile_picture", previewImage);
      console.log(previewImage);
      /* imgurl 숫자로 바꾸는 부분 (신경 안써도 되는 부분)*/

      // const imgurl = localStorage.getItem("profile_picture");
      // const getAvatarNumber = (imgurl) => {
      //   const match = imgurl.match(/avatar(\d)/);
      //   if (match && match[1]) {
      //     return Number(match[1]);
      //   } else {
      //     return null;
      //   }
      // };
      // const avatarNumber = getAvatarNumber(imgurl);
      // localStorage.setItem("profile_picture", avatarNumber);

      navigate("/api/signup/");
    }
  };

  //이미지 클릭하면 이미지 선택 리스트 열고, 닫는 함수
  const handleAvatarList = () => {
    setFileListstyle(!fileListstyle);
  };

  //이미지 선택 리스트의 이미지 선택하면 해당 이미지로 설정하는 함수
  const handleImageItemClick = (item) => {
    setPreviewImage(item.target.src);
  };

  return (
    <div>
      <AccountNav text1="계정만들기" text2="로그인" link1="/api/login/" />
      <label htmlFor="file-input">
        {previewImage ? (
          <div>
            {/* 이미지 선택 안한 상태에서 기본 avatar1 이미지 보여주기 */}
            <img
              src={previewImage}
              alt="uploaded file"
              className={styles.img}
              onClick={handleAvatarList}
            />
          </div>
        ) : (
          <div>
            {/* 선택한 아바타 이미지 보여주기*/}
            <img
              src={Avatar1}
              className={styles.img}
              onClick={handleAvatarList}
              alt="basic file"
            />
          </div>
        )}
      </label>
      <p style={ptag}>이미지를 클릭해서 선택해주세요 !</p>
      {/* 아바타 선택 리스트 */}
      {fileListstyle && <AvatarList onClick={handleImageItemClick} />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SignupBtn text="가입하기" onClick={storelocalP3} />
    </div>
  );
}

export default Signupstep2Page;
