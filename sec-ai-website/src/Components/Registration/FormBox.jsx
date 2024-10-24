import React, { useState } from "react";

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
    <div className="flex flex-col justify-around bg-slate-600 grow basis-1/2 max-w-xl ">
      {error && <p className="">{error}</p>}
      <p className="grow-0">{props.title}</p>
      <div className="grow flex flex-col  justify-start">
        <input className = "" type="text" onChange={handleChange} />
      </div>
    </div>
  );
}

export default FormBox;
