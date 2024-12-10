import React, { useRef, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import RegNavBar from "./RegNavBar";
import FormBox from "./FormBox";
import FirstStep from "./FirstStep";
import OtherSteps from "./OtherSteps";
import background_image from "../../assets/backgrounds/background.jpg";
import axios from 'axios';


function MainReg() {
  const navigation = useNavigate();
  const input_fields = [
    { title: "Your Email", type: "email", back: true },
    { title: "Your Phone Number", type: "phone", back: true },
    { title: "Your Discord ID", type: "discord", back: true },
    { title: "Your LinkedIn Profile (Optional but preferable)", type: "linkedin", back: true },
    { title: "Your Github Profile (Optional but preferable)", type: "github", back: true },
    { title: "Your School", type: "school", back: true },
    { title: "Which year are you currently studying in? (1 to 5)", type: "year", back: true },
    { title: "Do you have any experience in hackathons?", type: "experience", back: true },
    { title: "Tell us about your skills in cybersecurity and AI?", type: "skills", back: true },
    { title: "Have you worked on any interesting projects? We'd love to hear about them!", type: "projects", back: true },
    { title: "Show us some motivation (we'll take this seriously while evaluating applications)", type: "motivation", back: true },
    { title: "Do you have a team", type: "team", back: true },
    // { title: "Your Team Members names (3 other participants)", type: "team_members", back: true },
  ];
  


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discord: "",
    linkedin: "",
    github: "",
    school: "",
    year: "",
    experience: "",
    skills: "",
    projects: "",
    motivation: "",
    team_name: "",
    team_members: ["" , "" , ""],
  });
  

  function handleInput(e) {
    setFormData((f) => ({
      ...f,
      [e.name]: e.value,
    }));
  }

  const refList = input_fields.map(() => {
    return useRef(null);
  });
  refList.push(useRef(null));

  
  function handleSubmit() {
    console.log("final form", formData);

    const googleScriptURL =
     "https://script.google.com/macros/s/AKfycbxa6KIvy3ttuv_BdzLLV4Bnu0NzIEaAkZ_mbRpkuYq52BYYqPhp1qq8JQreMp18kn8V/exec";

      const jsonData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        discord: formData.discord,
        linkedin: formData.linkedin,
        github: formData.github,
        school: formData.school,
        year: formData.year,
        experience: formData.experience,
        projects: formData.projects,
        motivation: formData.motivation,
        team_name: formData.team_name,
        team_members: JSON.stringify(formData.team_members),
      };
    
      console.log(jsonData);

    fetch(googleScriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((responseData) => {
        console.log("Response from Google Sheets:", responseData);
      })
      .catch((error) => {
        console.log(responseData);
        console.error("Error:", error);
      });

    navigation("/submission_done");
  }


  function handleNext(index) {
    // scroll
    if (index + 1 === refList.length - 1) {
      handleSubmit();
    }

    const element = refList[index + 1].current;
    element.scrollIntoView({ behavior: "smooth" });
  }

  function handleBack(index) {
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
        <div className="flex flex-row grow relative   ">

        <div className="absolute">
            <FirstStep num={1} />
          </div>
          <div

            className="flex  md:justify-center grow shrink min-w-[400px] md:pl-20  py-10
                          justify-center w-full px-11"
          >
            <FormBox
              title="Your Full Name"
              type="name"
              back={false}
              index={-1}
              nextButton={handleNext}
              state_var={formData}
              update_state={setFormData}
              update={handleInput}
              
            />
          </div>
        </div>
      </div>
      <div className="">
        {input_fields.map((item, index) => {
          return (
            <div
              className="flex flex-row grow relative h-screen bg-black
                          bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${background_image})` }}
              ref={refList[index]}
              key={index}
            >
              <div className="absolute">
                <OtherSteps num={index + 2} />
              </div>
             
              <div
                className="flex md:justify-center grow shrink md:min-w-[400px] md:pl-20 py-24
                               justify-center w-full px-11"
                               
              >
                <FormBox
                  title={item.title}
                  type={item.type}
                  back={item.back}
                  index={index}
                  nextButton={handleNext}
                  backButton={handleBack}
                  state_var={formData}
                  update_state={setFormData}
                  update={handleInput}
                  last={index == refList.length - 2 ? true : false}
                  name={item.type} 
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
