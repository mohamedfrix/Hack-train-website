import React from "react";
import RegNavBar from "./RegNavBar";
import FormBox from "./FormBox";
import FirstStep from "./FirstStep";
import OtherSteps from "./OtherSteps";
import background_image from "../../assets/backgrounds/background.jpg";

function MainReg() {
  const input_fields = [
    {
      first: true,
      title: "Your Name",
      type: "name",
      back: false,
    },
    {
      first: false,
      title: "Your Email",
      type: "email",
      back: true,
    },
    {
      first: false,
      title: "Your Phone Number",
      type: "phone",
      back: true,
    },
    {
      first: false,
      title: "Your Discrod ID",
      type: "discord",
      back: true,
    },
  ];

  const list_of_input = () => {
    input_fields.map((item) => {
      return (
        <>
          <div className="flex h-full px-5">
            {item.first ? <FirstStep /> : <OtherSteps />}
            <div className="flex justify-start grow shrink min-w-[400px] pl-20 py-10">
              <FormBox title={item.title} type={item.type} back={item.back} />
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <div
      className="flex flex-col h-screen w-screen
                    bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <RegNavBar />
      <div className="flex flex-col">
        {input_fields.map((item) => {
          return (
            <div className="flex px-5  ">
              {item.first ? <FirstStep /> : <OtherSteps />}
              <div className="flex justify-start grow shrink min-w-[400px] pl-20 py-10">
                <FormBox title={item.title} type={item.type} back={item.back} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainReg;
