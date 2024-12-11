import React, { useState, useRef } from "react";
import arrow_back from "../../assets/arrow_back.svg";
import arrow_next from "../../assets/arrow_next.svg";
import background_image from "../../assets/backgrounds/background.jpg";

function FormBox(props) {
  const [error, setError] = useState("");
  const input_ref = useRef(null);


  const [ hasTeam , sethasTeam] = useState(false);


  function validateInput() {

    if (props.type === "team") {
      if (hasTeam) {
        return (
          props.state_var.team_name.trim() !== "" &&
          props.state_var.team_members.every((member) => member.trim() !== "")
        );
      }
      return true; 
    }
    // if (input_ref.current.value.trim().toLowerCase() === "") {
    //   return false;
    // }

    switch (input_ref.current.name) {
      case "name":
        const fullNameRegex = /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)*\s*$/;
        return fullNameRegex.test(input_ref.current.value);
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(input_ref.current.value);
      case "phone":
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(input_ref.current.value);

      case "discord":
        return true; 

      case "linkedin":
        return true; 

      case "github":
        return true; 

      case "school":
      case "year":
      case "experience":        
      case "skills":        
      case "projects":
      case "motivation":        
         return input_ref.current.value.trim() !== "";
      default:
        return true;
    }
  }

  function handleClick() {
    setError("");
    if (validateInput()) {
      props.nextButton(props.index, input_ref);
    } else {
      setError("please fill in the field with correct values");
    }
  }
  return (
    <div
      className="flex flex-col gap-10 justify-center md:h-[80%] flex-1 md:flex-none shrink rounded-[30px]  md:basis-3/5 p-9 md:p-14 border-white border 
                     bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <p className="grow-0 text-3xl">
        {props.title} <span className="text-red-600">*</span>
      </p>
      {error && <p className="text-red-500 text-lg font-fira-code">{error}</p>}
      <div className="grow flex flex-col justify-start">
        {props.type === "team" ? (
          <>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="hasTeam"
                checked={hasTeam}
                onChange={(e) => sethasTeam(e.target.checked)}
              />
              <label htmlFor="hasTeam" className="text-xl font-fira-code">
                I have a team
              </label>
            </div>
            {hasTeam && (
              <div className="flex flex-col gap-4 mt-4">
                <label className=" text-base opacity-80 underline font-fira-code">
                write members' names 'firstName lastname'
              </label>
                <input
                  className="bg-transparent h-12 border-b-2 focus:outline-none text-xl font-fira-code"
                  type="text"
                  name="team_name"
                  placeholder="Team Name"
                  value={props.state_var.team_name}
                  onChange={(e) =>
                    props.update_state({
                      ...props.state_var,
                      team_name: e.target.value,
                    })
                  }
                />
                {props.state_var.team_members.map((member, index) => (
                  <input
                    key={index}
                    className="bg-transparent h-12 border-b-2 focus:outline-none text-xl font-fira-code"
                    type="text"
                    name={`team_member_${index + 1}`}
                    placeholder={`Team Member ${index + 1}`}
                    value={member}
                    onChange={(e) => {
                      const newTeamMembers = [...props.state_var.team_members];
                      newTeamMembers[index] = e.target.value;
                      props.update_state({
                        ...props.state_var,
                        team_members: newTeamMembers,
                      });
                    }}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <input
            className="bg-transparent h-12 border-b-2 focus:outline-none text-xl font-fira-code"
            type="text"
            name={props.type}
            ref={input_ref}
            value={props.state_var[props.type] ?? ""}
            onChange={(e) =>
              props.update_state({
                ...props.state_var,
                [input_ref.current.name]: e.target.value,
              })
            }
          />
        )}
      </div>
      <div className="flex flex-row-reverse justify-between ">
        <button
          className="flex flex-r justify-around items-center h-14 w-28 md:w-44 rounded-[20px]  bg-mainLighter pl-3 custome-shadow "
          onClick={handleClick}
        >
          <p className="font-fira-code text-2xl">
            {props.last ? "Submit " : "Next"}
          </p>
          <img src={arrow_back} alt="next" />
        </button>
        {props.back && (
          <button
            className="flex justify-around items-center h-14  w-28 md:w-44 rounded-[20px]  bg-transparent border-mainLighter border-2 pl-3  custome-shadow"
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


