import './index.css'

const LatestMatch = props => {
  const {details} = props

  return (
    <>
      <div className="top-card">
        <div>
          <p className="competing-team">{details.competing_team}</p>
          <p className="date">{details.date}</p>
          <p className="venue">{details.venue}</p>
          <p className="venue">{details.result}</p>
        </div>
        <img
          src={details.competing_team_logo}
          alt={`latest match ${details.competing_team}`}
        />
      </div>
      <hr className="horizontal-line" />
      <div className="bottom-card">
        <p>First Innings</p>
        <p>{details.first_innings}</p>
        <p>Second Innings</p>
        <p>{details.second_innings}</p>
        <p style={{fontSize: '14px'}}>Man of the Match</p>
        <p>{details.man_of_the_match}</p>
        <p>Umpires</p>
        <p>{details.umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
