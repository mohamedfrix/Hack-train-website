import React from 'react'
import RegNavBar from './RegNavBar'
import FormBox from './FormBox'
import FirstStep from './FirstStep'
import OtherSteps from './OtherSteps'


function MainReg() {
  return (
    <div className='flex flex-col h-screen'>
      <RegNavBar/>
      <div className='flex h-full'>
        <FormBox/>
        <OtherSteps/>
      </div>
    </div>
  )
}

export default MainReg
