import {useEffect, useState} from "react";
import LeaderboardChallengeSelectionButton from "./LeaderboardChallengeSelectionButton";
import  displayedMessages from '../../../assets/displayed_messages.json';
import leaderBoardMockData from '/src/assets/Leaderboard/teams_leaderboard.json'
import LeaderboardTable from "./LeaderboardTable";
import PublicLeaderboard from "../Public/PublicLeaderboard";
import PrivateLeaderboard from "../Private/PrivateLeaderboard";
import supabase from '../../../supabaseClient.js';
import SwitchTabsButton from "./SwitchTabsButton.jsx";

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
  const [loading, setLoading] = useState(false);
  const [challengesWithWeights, setChallengesWithWeights] = useState([]);
  const [ActiveClass, setActiveClass] = useState(null);

  function convertToSeconds(timeStr) {
    const regex = /(\d+)([hms])/g;
    let totalSeconds = 0;

    let match;
    while ((match = regex.exec(timeStr)) !== null) {
      let value = parseInt(match[1]);  // Numeric value
      let unit = match[2];             // Unit (h, m, or s)

      if (unit === 'h') {
        totalSeconds += value * 3600;  // Hours to seconds
      } else if (unit === 'm') {
        totalSeconds += value * 60;    // Minutes to seconds
      } else if (unit === 's') {
        totalSeconds += value;         // Seconds
      }
    }

    return totalSeconds;
  }


  function compareTimes(time1, time2) {
    const time1InSeconds = convertToSeconds(time1);
    const time2InSeconds = convertToSeconds(time2);

    return time1InSeconds <= time2InSeconds ? time1 : time2;
  }

  useEffect(() => {
    setActiveClass(0);
  }, []);

  useEffect(() => {
    const fetchCompetitions = async (database_table) => {
      try {
        const {data, error} = await supabase.from(database_table).select('*');
        if (error) {
          console.error('Error fetching competitions:', error);
          return;
        }
        setChallenges(() => {
          let challengesData = data.map((challenge) => {
            return {
              name: challenge.competition_name,
            };
          });

          challengesData.unshift({name : 'Total'});
          return challengesData;

        });
        setChallengesWithWeights(() => {
          return data.map((challenge) => {
            return {
              name: challenge?.competition_name,
              weight: challenge?.weight,
            }
          })
        });
        setSelectedChallenge(() => {return {name : 'Total'}});
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    if (ActiveClass === 0){
      fetchCompetitions('competitions_a');
    }
    else if (ActiveClass === 1) {
      fetchCompetitions('competitions_b');
    }

  }, [ActiveClass]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        if (selectedChallenge?.name === 'Total'){
          setLoading(true);
          let totalBoard = [];
          for (let i = 0; i < challengesWithWeights.length; i++) {
            if (i === 0){
              let kaggle_api_url = `https://hachtrainbackend.onrender.com/api/leaderboard?competition_name=${challengesWithWeights[i]?.name}`;
              const response = await fetch(kaggle_api_url);
              const data = await response.json();

              totalBoard = data.map((d) => {return {
                'teamName' : d.teamName,
                "score" : parseFloat(d.score) * parseFloat(challengesWithWeights[i]?.weight),
                "last submission" : d.last === -1 ? 'no submission' : d.last,
              }});
            }
            else{
              let kaggle_api_url = `https://hachtrainbackend.onrender.com/api/leaderboard?competition_name=${challengesWithWeights[i]?.name}`;
              const response = await fetch(kaggle_api_url);
              const data = await response.json();


              for (let j = 0; j < data.length; j++) {
                for (let k = 0; k < data.length; k++) {
                  if (totalBoard[j].teamName === data[k].teamName) {
                    totalBoard[j].score += parseFloat(data[k].score) * parseFloat(challengesWithWeights[i]?.weight);
                    if (totalBoard[j]['last submission'] === 'no submission'){
                      totalBoard[j]['last submission'] = data[k].last === -1 ? 'no submission' : data[k].last;
                    }
                    else if (data[k].last === -1){
                    }
                    else {
                      totalBoard[j]['last submission'] = compareTimes(totalBoard[j]['last submission'] , data[k].last);
                    }
                  }
                }
                // if (data[j].teamName === challengesWithWeights[i]?.name) {
                //   totalBoard[j].score += data[j].score;
                // }
              }
            }
          }

          let data_to_pass = [];
          for (let i = 0; i < totalBoard.length; i++) {
            data_to_pass.push({
              "teamName" : totalBoard[i].teamName,
              "score" : totalBoard[i].score,
              "last submission" : totalBoard[i]['last submission'] === -1 ? "no submission" : totalBoard[i]['last submission'],
            })
          }
          data_to_pass = data_to_pass.sort((a, b) => b.score - a.score);

          console.log(data_to_pass);
          setLeaderboardData(() => data_to_pass);
          setLoading(false);

        }
        else {
          setLoading(true);
          let kaggle_api_url = `https://hachtrainbackend.onrender.com/api/leaderboard?competition_name=${selectedChallenge.name}`;
          console.log(`url: ${kaggle_api_url}`)
          const response = await fetch(kaggle_api_url); // Replace with the actual API endpoint
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          let data_to_pass = [];
          for (let i = 0; i < data.length; i++) {
            data_to_pass.push({
              "teamName" : data[i].teamName,
              "score" : data[i].score,
              "last submission" : data[i].last === -1 ? "no submission" : data[i].last,
            })
          }
          setLeaderboardData(() => data_to_pass);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (selectedChallenge) {
      fetchDataFromAPI();
    }
  }, [selectedChallenge]);
  
  
  return (

      <div
          className={"flex h-lvh flex-col w-full items-center mt-10 transition-all ease-in-out opacity-0 " + (props.intransition ? "opacity-0" : "opacity-100")}>
        {/* This shows total, challenge1, .... buttons */}
        {/*<div className={'w-[100px] h-[100px] bg-amber-300'} onClick={() => {console.log(selectedChallenge)}}></div>*/}
        {/*TODO: remove the above container */}

        <div className={`flex gap-x-4 items-center mb-8`}>

          <div
              className=" select-none bg-dark md:px-2 px-4 py-0 w-fit flex flex-row  text-lg md:text-xl  md:gap-3 font-fira-code gap-3 rounded-[8rem] shadow-2xl border border-borderMain">
            <div
                className={" cursor-pointer px-4 py-2 md:w-44 flex justify-center  " + ((ActiveClass === 0) && " text-mainLighter")}
                onClick={() => {
                  setActiveClass(0);
                }}>
              Class A
            </div>
          </div>

          <div
              className=" select-none bg-dark md:px-2 px-4 py-0 w-fit flex flex-row  text-lg md:text-xl  md:gap-3 font-fira-code gap-3 rounded-[8rem] shadow-2xl border border-borderMain">
            <div
                className={" cursor-pointer px-4 py-2 md:w-44 flex justify-center  " + ((ActiveClass === 1) && " text-mainLighter")}
                onClick={() => {
                  setActiveClass(1);
                }}>
              Class B
            </div>
          </div>


        </div>

        <div
            className="flex no-scrollbar flex-row items-start gap-8 font-fira-code overflow-x-scroll whitespace-nowrap md:w-full py-2 px-2 scroll-m-20 scrollbar-hidden">
          {challenges.map((button, index) => (
              <LeaderboardChallengeSelectionButton
                  key={index}
                  id={index}
                  buttonInfo={button}
                  active={activeChallenge === index}
                  setActive={setActiveChallenge}
                  onClick={() => {
                    setSelectedChallenge(challenges[index]);
                  }}
              />
          ))}
        </div>
        {/* This shows Public , Private selection  */}
        <div className="flex flex-row md:justify-start justify-center  gap-14 w-5/6 md:w-11/12 mt-10">
          {leaderboards.map((leaderboard, index) => (
              <span id={index}
                    className={` cursor-pointer  font-fira-code text-center text-2xl md:text-[2rem] ${(activeLeaderboard == index) && "text-mainLighter font-semibold"}`}
                    onClick={() => setActiveLeaderboard(index)}>{leaderboard.name}</span>
          ))}

        </div>

        <div>
          {/* This shows Public leaderboard content or private leaderboard content */}
          {
            !loading ?
                (!activeLeaderboard ? <PublicLeaderboard data={leaderboardData}/> : <PrivateLeaderboard/>) :
                <div className={`h-[500px] flex items-center`}>
                  <p className={`font-fira-code text-2xl font-semibold `}>Loading...</p>
                </div>
          }
        </div>

      </div>
  );
}

export default LeaderBoardTab;


// class a: forest, building, the sixth
// class b: palm-tree, stadium, green house