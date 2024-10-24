import React from "react";
import RegNavBar from "./RegNavBar";
import FormBox from "./FormBox";
import FirstStep from "./FirstStep";
import OtherSteps from "./OtherSteps";

function MainReg() {
  return (
    <div className="flex flex-col h-screen">
      <RegNavBar />
      <div className="flex  h-full  gap-[50px]">
        <OtherSteps />
        <div className="flex justify-center grow shrink-0 bg-slate-800">
          <FormBox title="Enter Your Email" type="email" />
        </div>
      </div>
    </div>
  );
}

export default MainReg;
