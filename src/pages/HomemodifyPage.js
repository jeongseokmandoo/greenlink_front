import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import UpdateBox from "../components/UpdateBox";
import PlantImage from "../components/PlantImage";
import { Link } from "react-router-dom";
import BigBtn from "../components/BigBtn";
import styles from "./HomemodifyPage.module.css";
import MainNav from "../components/MainNav";

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

// const plantName = userInfo.user.flower_pot.plant_name;
// const plantSort = userInfo.user.flower_pot.plant_type;
// const plantDate = userInfo.user.flower_pot.start_date;

function HomemodifyPage() {
  const [plantName, setPlantName] = useState("");
  const [plantSort, setPlantSort] = useState("");
  const [plantDate, setPlantDate] = useState("");

  useEffect(() => {
    // 로컬 스토리지에서 정보를 가져와 상태를 초기화합니다.
    const userInfo = JSON.parse(localStorage.getItem("data"));
    console.log(userInfo);
    setPlantName(userInfo.user.flower_pot.plant_name);
    setPlantSort(userInfo.user.flower_pot.plant_type);
    setPlantDate(userInfo.user.flower_pot.start_date);
  }, []);

  const updatePlantInfo = () => {
    // 로컬 스토리지를 업데이트합니다.
    const userInfo = JSON.parse(localStorage.getItem("data"));
    userInfo.user.flower_pot.plant_name = plantName;
    userInfo.user.flower_pot.plant_type = plantSort;
    userInfo.user.flower_pot.start_date = plantDate;
    localStorage.setItem("user", JSON.stringify(userInfo));

    // 서버에 PATCH 요청을 보냅니다.
    fetch(
      "https://port-0-cloudtype-32updzt2alpmcc05e.sel4.cloudtype.app/api/flower/update/",
      {
        // 실제 서버 주소와 경로를 사용해야 합니다.
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plant_name: plantName,
          plant_type: plantSort,
          start_date: plantDate,
        }),
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // 필요한 경우 여기에서 추가적인 작업을 수행합니다.
      });
  };

  // const button = () => {};

  return (
    <div className={styles.main}>
      <TopNav
        text={undefined}
        link1="/api/notifications"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
      <div className={styles.container}>
        <Link className={styles.back} to="/api/home">
          &lt; 돌아가기
        </Link>
        <PlantImage className={styles.plantimage} level={3} />
        <div className={styles.updatebox}>
          <UpdateBox
            className={styles.update1}
            title="식물 이름"
            type="text"
            value={plantName}
            placeholder={plantName}
          />
          <div className={styles.warn}>이름은 5글자를 넘을 수 없습니다.</div>
          <UpdateBox
            className={styles.update2}
            title="가족이 된 날"
            type="Date"
            value={plantDate}
            // onChange={(e) => setPlantDate(e.target.value)}
            placeholder="가족이 된 날"
          />
          <UpdateBox
            className={styles.update3}
            title="식물 종류 (선택)"
            type="text"
            value={plantSort}
            // onChange={(e) => setPlantSort(e.target.value)}
            placeholder="식물 종류"
          />
        </div>
        <BigBtn text="완료" onClick={updatePlantInfo} />
      </div>
      <MainNav />
    </div>
  );
}

export default HomemodifyPage;
