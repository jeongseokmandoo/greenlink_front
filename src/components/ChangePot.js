import React, { useState } from "react";

const ChangePot = ({ className = "" }) => {
  const [potNumber, setPotNumber] = useState("");

  const handleChange = (e) => {
    setPotNumber(e.target.value);
  };

  const handleClick = () => {
    // 화분 번호에 따라 화분 종류 변경 로직 추가
    console.log(`화분 번호 ${potNumber}로 화분 변경`);
  };

  return (
    <>
      <div className={className}>화분 변경하기</div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>입력</button>
      </div>
    </>
  );
};

export default ChangePot;
