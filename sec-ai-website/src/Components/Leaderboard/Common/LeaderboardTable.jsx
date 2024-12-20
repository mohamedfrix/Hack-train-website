function LeaderboardTable({data}){
    //TODO : figure out how to make this table not exceed screen height in a better way
    return (
      <div className="w-5/6 md:w-5/6 flex max-h-[65vh] md:max-h-[55vh] justify-center mt-10 font-fira-code text-sm md:text-lg">
      <div className=" overflow-scroll lg:overflow-x-hidden   w-full  border rounded-t-xl  border-white ">
        <table className=" min-w-full   bg-black bg-opacity-40  shadow-dark ">
          <thead>
            <tr>
              <th className="px-6 py-3  text-white border-b">#</th>
              <th className="px-2 md:w-[15rem] py-3 text-left text-white border-b">Team</th>
              <th className="px-2 py-3  text-white border-b">Score</th>
              <th className="px-2 py-3  text-white border-b">Last Submission</th>
            </tr>
          </thead>
          <tbody>
            
            {data.map((row, index) => (
              <tr  key={index}>
                <td className="py-3 h-[5rem] text-center text-white border-b">{index+1}</td>
                <td className="px-2 py-3 text-white border-b">{row['teamName']}</td>
                <td className="px-2 py-3 text-center text-white border-b">{row['score']}</td>
                <td className="px-2 py-3 text-center text-white border-b">{row['last submission']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default LeaderboardTable;