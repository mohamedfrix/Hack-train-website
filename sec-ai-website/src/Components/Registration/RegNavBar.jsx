import React from "react";
import event_logo from "../../assets/event.svg";
import club_logo from "../../assets/logo.svg";

function RegNavBar() {
  return (
    <div className="flex justify-between p-8 ">
      <img className=" h-20" src={club_logo} alt="secai logo" />
      <img className="w-16" src={event_logo} alt="event logo" />
    </div>
  );
}

export default RegNavBar;
