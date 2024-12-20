function LeaderboardChallengeSelectionButton({id, buttonInfo, active, setActive, restrictWidth=true , onClick}) {
    let targetcolor = active ? 'bg-mainLighter shadow-mainLighter' : 'bg-dark shadow-dark';
    return <div className={`overflow-x-clip select-none flex-shrink-0 cursor-pointer text-center py-1 px-4 ${restrictWidth ? "md:w-[12rem]" : "w-full" } border hover:scale-105 transition-all ease ${targetcolor} border-borderMain font-semibold shadow-md   rounded-xl text-lg md:text-2xl 2xl:w-[600px]`} title={buttonInfo.name}
                onClick={()=>{
                    setActive(id)
                    onClick()
                }}>
        {buttonInfo.name}
    </div>;
}

export default LeaderboardChallengeSelectionButton;