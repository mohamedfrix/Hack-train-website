import React, { useState } from 'react'
import SwitchTabsButton from '../components/Leaderboard/Common/SwitchTabsButton'
import LeaderBoardTab from '../components/Leaderboard/Common/LeaderboardTab';
import CTFsTab from '../components/CTFs/CTFsTab';


function LeaderBoard() {
  const [ActiveTab , SetActiveTab] = useState(0); // 0 for CTF , 1 for Leaderboard
  return (
    <div className=" h-lvh md:px-20 pb-20 overflow-hidden box-border bg-[url('/src/assets/shape.png')] bg-cover bg-center  -z-50 pt-5 flex flex-col items-center">
      <SwitchTabsButton ActiveTabState={ActiveTab} ActiveTabControl={SetActiveTab} />
      { ActiveTab === 0 ? <CTFsTab /> : <LeaderBoardTab />}
      
      

    </div>    
  )
}

export default LeaderBoard
