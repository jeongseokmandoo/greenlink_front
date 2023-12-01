import React, { useState } from "react";
import MainNav from "../components/MainNav";
import UpdateBox from "../components/UpdateBox";
import { Link, useNavigate } from "react-router-dom";
import BigBtn from "../components/BigBtn";
import styles from "./Signupstep2Page.module.css";
import AvatarList from "../components/AvatarList";

const Avatar1 =
  "https://raw.githubusercontent.com/kimtaekyuni/superguni/afd0b138847b5d67948cb3bff9354ba66d2c151b/avatar1.png";

function Accountmodify(props) {
  const [fileListstyle, setFileListstyle] = useState(false); // 선택할 이미지 리스트 처음에 display: none으로

  const navigate = useNavigate("");
  const [humanName, setHumanName] = useState(
    localStorage.getItem("korean_name") || ""
  );
  const [mynickname, setMynickname] = useState(
    localStorage.getItem("nickname") || ""
  );
  const [previewImage, setPreviewImage] = useState(
    localStorage.getItem("profile_picture") || Avatar1
  );

  const ptag = {
    display: "flex",
    justifyContent: "center",
    fontSize: "calc(1.25vw + 1.25vh)",
    marginBottom: "0",
  };

  const updateProfile = () => {
    // 유효성 검사: 이름이 5글자를 넘을 경우
    if (humanName.length > 5) {
      alert("이름은 5글자를 넘을 수 없습니다.");
    } else if (!humanName) {
      alert("이름을 입력해주세요.");
    } else if (previewImage == null) {
      alert("프로필을 선택해주세요.");
    } else {
      localStorage.setItem("korean_name", humanName);
      localStorage.setItem("nickname", mynickname);
      localStorage.setItem("profile_picture", previewImage);

      const korean_name = localStorage.getItem("korean_name");
      const nickname = localStorage.getItem("nickname");
      const profile_picture = localStorage.getItem("profile_picture");

      const patchdata = {
        korean_name,
        nickname,
        profile_picture,
      };
      console.log(patchdata);

      fetch(
        "https://port-0-cloudtype-32updzt2alpmcc05e.sel4.cloudtype.app/api/account/update/",
        {
          // 실제 서버 주소와 경로를 사용해야 합니다.
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(patchdata),
          mode: "cors",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("프로필 수정에 실패했습니다.");
          }
        })
        .then((data) => {
          let existingData = JSON.parse(localStorage.getItem("data"));

          for (let key in data) {
            existingData[key] = data[key];
          }
          // 받아온 데이터를 문자열로 변환하여 localStorage에 저장
          localStorage.setItem("data", JSON.stringify(existingData));
          alert("프로필 수정이 완료되었습니다.");
          navigate("/api/accounthome");
        })
        .catch((error) => {
          console.error(error);
          alert("프로필 수정 과정에서 오류가 발생했습니다.");
        });
    }
  };

  const handleAvatarList = () => {
    setFileListstyle(!fileListstyle);
  };

  //이미지 선택 리스트의 이미지 선택하면 해당 이미지로 설정하는 함수
  const handleImageItemClick = (item) => {
    setPreviewImage(item.target.src);
  };

  const linkstyle = {
    fontSize: "calc(1vh + 1.5vw)",
    textDecoration: "none",
    marginLeft: "5vw",
    color: "#898a8d",
    position: "absolute",
    top: "0.5vh",
    marginTop: "2vh",
    marginLeft: "6vw",
    width: "30vw",
    fontSize: "2em",
  };

  return (
    <div>
      <br />
      <br />
      <Link to="/api/accounthome" style={linkstyle}>
        &lt; 돌아가기
      </Link>
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
      <p style={ptag}>이미지를 클릭해서 선택해주세요!</p>
      {/* 아바타 선택 리스트 */}
      {fileListstyle && <AvatarList onClick={handleImageItemClick} />}
      <UpdateBox
        title="이름"
        type="text"
        value={humanName}
        onChange={(e) => setHumanName(e.target.value)}
        placeholder="이름"
      />
      <UpdateBox
        title="우리집에서 나는? (선택)"
        type="text"
        value={mynickname}
        onChange={(e) => setMynickname(e.target.value)}
        placeholder="우리집에서 나는?"
      />
      <BigBtn text="완료" onClick={updateProfile} />
      <MainNav />
    </div>
  );
}

export default Accountmodify;
