import React from 'react'
import event_logo from '../../assets/event.svg'
import club_logo from '../../assets/logo.svg'

function RegNavBar() {
  return (
    <div className='flex justify-between p-3'>
      <img className='' src= {club_logo} alt="secai logo" />
      <img src={event_logo} alt="event logo" />
    </div>
  )
}

export default RegNavBar
