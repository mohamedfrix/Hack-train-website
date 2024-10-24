import React, { useRef } from "react";
import RegNavBar from "./RegNavBar";
import FormBox from "./FormBox";
import FirstStep from "./FirstStep";
import OtherSteps from "./OtherSteps";
import background_image from "../../assets/backgrounds/background.jpg";

function MainReg() {
  const input_fields = [
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

  const refList = input_fields.map(() => {
    return useRef(null);
  });
  refList.push(useRef(null)); // for the first form element

  function next(index) {
    const element = refList[index + 1].current;
    element.scrollIntoView({ behavior: "smooth" });
  }

  function back(index) {
    if (index - 1 == -1) {
      var element = refList[refList.length - 1].current;
    } else {
      var element = refList[index - 1].current;
    }
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="h-screen w-screen overflow-hidden
                    bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div
        className="flex flex-col h-screen "
        ref={refList[refList.length - 1]}
      >
        <RegNavBar />
        <div className="flex flex-row grow ">
          <FirstStep num={1} />
          <div className="flex md:justify-start grow shrink min-w-[400px] md:pl-20  py-10
                          justify-center w-full px-11">
            <FormBox
              title="Your Name"
              type="email"
              back={false}
              index={-1}
              nextButton={next}
            />
          </div>
        </div>
      </div>
      <div className="">
        {input_fields.map((item, index) => {
          return (
            <div
              className="flex flex-row grow h-screen bg-black
                          bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${background_image})` }}
              ref={refList[index]}
            >
              <OtherSteps num={index + 2} />
              <div className="flex md:justify-start grow shrink md:min-w-[400px] md:pl-20 py-24
                               justify-center w-full px-11">
                <FormBox
                  title={item.title}
                  type={item.type}
                  back={item.back}
                  index={index}
                  nextButton={next}
                  backButton={back}
                  last={index == refList.length - 2 ? true : false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainReg;
