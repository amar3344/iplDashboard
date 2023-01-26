import './index.css'

const LatestMatch = props => {
  const {details} = props
  const latestMatchDetails = details.latest_match_details
  console.log(latestMatchDetails)

  return (
    <>
      <div className="top-card">
        <div>
          <h1 className="competing-team">
            {latestMatchDetails.competing_team}
          </h1>
          <h3 className="date">{latestMatchDetails.date}</h3>
          <p className="venue">{latestMatchDetails.venue}</p>
          <p className="venue">{latestMatchDetails.result}</p>
        </div>
        <img
          src={latestMatchDetails.competing_team_logo}
          alt={latestMatchDetails.competing_team}
        />
      </div>
      <hr className="horizontal-line" />
      <div className="bottom-card">
        <p>First Innings</p>
        <p>{latestMatchDetails.first_innings}</p>
        <p>Second Innings</p>
        <p>{latestMatchDetails.second_innings}</p>
        <p style={{fontSize: '14px'}}>Man of the Match</p>
        <p>{latestMatchDetails.man_of_the_match}</p>
        <p>Umpires</p>
        <p>{latestMatchDetails.umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
