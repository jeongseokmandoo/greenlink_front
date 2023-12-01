import React from "react";
import { NotifiText } from "../pages/PlantPage1";

function NotifiBox({ min = "3분전", context = "알림 내용" }) {
  return (
    <div className="NotifiBox">
      <div></div>
      <div>
        <div>{min}</div>
        <NotifiText context={context} />
      </div>
    </div>
  );
}

export default NotifiBox;
