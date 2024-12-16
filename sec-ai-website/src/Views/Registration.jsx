import React from 'react'
// import MainReg from '../Components/Registration/MainReg'
import RegNavBar from "../Components/Registration/RegNavBar";
import background_image from "../assets/backgrounds/background.jpg";




function Registration() {
  return (
    // <div>
    //   <MainReg/>
    // </div>
    <div
      className="flex flex-col
                bg-cover bg-center bg-no-repeat
                  h-screen
                 "
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <RegNavBar />
      <div className="text-2xl font-fira-code font-bold flex justify-center items-center h-full ">
        {" "}
        Registrations are closed !
      </div>
    </div>
  )
}

export default Registration
