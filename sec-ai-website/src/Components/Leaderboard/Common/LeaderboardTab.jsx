import {useEffect, useState} from "react";
import LeaderboardChallengeSelectionButton from "./LeaderboardChallengeSelectionButton";
import  displayedMessages from '../../../assets/displayed_messages.json';
import leaderBoardMockData from '/src/assets/Leaderboard/teams_leaderboard.json'
import LeaderboardTable from "./LeaderboardTable";
import PublicLeaderboard from "../Public/PublicLeaderboard";
import PrivateLeaderboard from "../Private/PrivateLeaderboard";
import supabase from '../../../supabaseClient.js';

const dummy = [
  {
    "last submission": 'no submission',
    "score": 0,
    "teamName": "ETC",
  },
  {
    "last submission": 'no submission',
    "score": 0,
    "teamName": "شعاع قاسم التنين",
  },
  {
    "last submission": 'no submission',
    "score": 0,
    "teamName": "Falcons",
  },
]

// const challenges = [
//   { name: "Total" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
//   { name: "Challenge" },
// ]; //TODO : remove after testing
const leaderboards = [
  {
    name: "Public",
  },
  {
    name: "Private",
  },
];
function LeaderBoardTab(props) {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeLeaderboard, setActiveLeaderboard] = useState(0); // 0 for public 1 for private
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const {data, error} = await supabase.from('competitions').select('*');
        if (error) {
          console.error('Error fetching competitions:', error);
          return;
        }
        setChallenges(() => {
          return data.map((challenge) => {
            return {
              name: challenge.competition_name,
            };
          });
        });
        setSelectedChallenge(() => {return {name : data[0].competition_name}});
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchCompetitions();
  }, []);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        // let kaggle_api_url = `hachtrainbackend-production.up.railway.app/api/leaderboard?competition_name=${selectedChallenge.name}`;
        // let kaggle_api_url = 'https://jsonplaceholder.typicode.com/todos/1'
        let kaggle_api_url = `https://hachtrainbackend.onrender.com/api/leaderboard?competition_name=${selectedChallenge.name}`;
        console.log(`url: ${kaggle_api_url}`)
        const response = await fetch(kaggle_api_url); // Replace with the actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        let data_to_pass = [];
        for (let i = 0; i < data.length; i++) {
          data_to_pass.push({
            "teamName" : data[i].teamName,
            "score" : data[i].score,
            "last submission" : data[i].last === -1 ? "no submission" : data[i].last,
          })
        }
        setLeaderboardData(() => data_to_pass);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (selectedChallenge) {
      fetchDataFromAPI();
    }
  }, [selectedChallenge]);
  
  
  return (
    
    <div className={"flex h-lvh flex-col w-full items-center mt-10 transition-all ease-in-out opacity-0 " + (props.intransition ? "opacity-0" : "opacity-100")}>
        {/* This shows total, challenge1, .... buttons */ }
      {/*<div className={'w-[100px] h-[100px] bg-amber-300'} onClick={() => {console.log(selectedChallenge)}}></div>*/}
      {/*TODO: remove the above container */}
      <div className="flex no-scrollbar flex-row items-start gap-8 font-fira-code overflow-x-scroll whitespace-nowrap md:w-full py-2 px-2 scroll-m-20 scrollbar-hidden">
        {challenges.map((button, index) => (
          <LeaderboardChallengeSelectionButton
            key={index}
            id={index}
            buttonInfo={button}
            active={activeChallenge === index}
            setActive={setActiveChallenge}
            onClick = {() => {
              setSelectedChallenge(challenges[index]);
            }}
          />
        ))}
      </div>
        {/* This shows Public , Private selection  */}
      <div className="flex flex-row md:justify-start justify-center  gap-14 w-5/6 md:w-11/12 mt-10">
        {leaderboards.map((leaderboard, index) => (
          <span id={index} className={` cursor-pointer  font-fira-code text-center text-2xl md:text-[2rem] ${(activeLeaderboard == index )&& "text-mainLighter font-semibold"}`} onClick={()=>setActiveLeaderboard(index)}>{leaderboard.name}</span>
        ))}
        
      </div>
      {/* This shows Public leaderboard content or private leaderboard content  */}
      {!activeLeaderboard?  <PublicLeaderboard data={leaderboardData}/> : <PrivateLeaderboard/>}
    </div>
  );
}

export default LeaderBoardTab;
