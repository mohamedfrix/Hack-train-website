import CTFDecorator from '/src/assets/Leaderboard/CTFsDecorator.svg'
import LeaderboardChallengeSelectionButton from '../Leaderboard/Common/LeaderboardChallengeSelectionButton';
function ChallengesScrollbar({Challenges , CurrentChallenge, SetCurrentChallenge}){
    return (
        <div className=" border border-borderMain rounded-3xl flex overflow-x-hidden font-fira-code  flex-col items-center h-full bg-dark ">
            {/* This is for the title */}
            <div className="flex justify-center gap-2  text-lg text-mainLighter px-11 py-4">
                <img src={CTFDecorator} width={"70px"} alt="ctf_decorator"/>
                <span>Challenges</span>
                <img src={CTFDecorator} width={"70px"} alt="ctf_decorator" />
            </div>

            {/* This section is for the challenges selection */}
            <div className='overflow-y-scroll scrollbar-mainLighter  gap-3 flex flex-col max-h-[75vh] w-full p-4 items-center'>
                {
                    Challenges.map((challenge, i)=>{
                        
                        return <LeaderboardChallengeSelectionButton setActive={SetCurrentChallenge} id={i} active={(i == CurrentChallenge)} restrictWidth={false}  buttonInfo={{name: challenge}}/>}
                    )
                }
                
                
            </div>

        </div>
    )
}
export default ChallengesScrollbar;