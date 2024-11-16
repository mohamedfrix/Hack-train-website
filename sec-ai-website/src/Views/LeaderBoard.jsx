import React, { useEffect, useState } from 'react'
import SwitchTabsButton from '../Components/Leaderboard/Common/SwitchTabsButton'
import LeaderBoardTab from '../Components/Leaderboard/Common/LeaderboardTab';
import CTFsTab from '../Components/CTFs/CTFsTab';
import BlobBackground from '../Components/BlobsBackground';


function LeaderBoard() {
  const [ActiveTab , SetActiveTab] = useState(0); // 0 for CTF , 1 for Leaderboard
  const [inTransition,  setInTransition] = useState(false);
  const HandleChange = (v)=>{
    setInTransition(true)
    
    const timer = setTimeout(() => {
      setInTransition(false);
      SetActiveTab(v)
    }, 200);
    return () => clearTimeout(timer);
  }
  return (
    <><BlobBackground /><div className=" fixed h-lvh md:px-20 pb-20 w-lvw overflow-hidden box-border z-10 pt-5 flex flex-col items-center">
      <SwitchTabsButton ActiveTabState={ActiveTab} ActiveTabControl={HandleChange} />
      {ActiveTab === 0 ? <CTFsTab intransition={inTransition}/> : <LeaderBoardTab intransition={inTransition} />}



    </div></>    
  )
}

export default LeaderBoard
