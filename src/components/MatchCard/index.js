import './index.css'

const MatchCard = props => {
  const {details} = props
  const recentMatches = details.recent_matches
  console.log(recentMatches)

  return (
    <>
      {recentMatches.map(item => (
        <div className="each-match-card">
          <img src={item.competing_team_logo} alt={item.competing_team} />
          <h3 style={{textAlign: 'center'}}>{item.competing_team}</h3>
          <p style={{textAlign: 'center', fontWeight: '500'}}>{item.result}</p>
          <p>{item.match_status}</p>
        </div>
      ))}
    </>
  )
}

export default MatchCard
