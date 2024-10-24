import React, { useState } from "react";
import arrow_back from "../../assets/arrow_back.svg";
import arrow_next from "../../assets/arrow_next.svg";
import background_image from "../../assets/backgrounds/background.jpg";

function FormBox(props) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  function validateInput(value) {
    // use regEx to validate the input
    // set the error value accordingly
    switch (props.type) {
      case "name":
        break;
      case "email":
        break;
      case "phone":
        break;
      case "discord":
        break;
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  }

  return (
    <div
      className="flex flex-col gap-10 justify-around shrink rounded-[30px] basis-3/5 p-14 border-white border 
                     bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      {error && <p className="">{error}</p>}
      <p className="grow-0 text-3xl">
        {props.title} <span className="text-red-600">*</span>
      </p>
      <div className="grow flex flex-col  justify-start">
        <input
          className=" bg-transparent h-12 border-b-2
                      focus:outline-none
                      text-xl font-fira-code"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row-reverse justify-between ">
        <button
          className="flex flex-r justify-around items-center h-14 w-44 rounded-[20px]  bg-mainLighter pl-3 gap- "
          onClick={() => {
            props.nextButton(props.index);
          }}
        >
          <p className="font-fira-code text-2xl">
            {props.last ? "Submit " : "Next"}
          </p>
          <img src={arrow_back} alt="next" />
        </button>
        {props.back && (
          <button
            className="flex justify-start items-center h-14 w-44 rounded-[20px]  bg-mainLighter pl-3 gap-10"
            onClick={() => {
              props.backButton(props.index);
            }}
          >
            <img src={arrow_next} alt="next" />
            <p className="font-fira-code text-2xl">Back</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default FormBox;
