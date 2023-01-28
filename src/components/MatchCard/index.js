import './index.css'

const MatchCard = props => {
  const {details} = props
  const statusClassName =
    details.match_status === 'Lost' ? 'lose-class' : 'win-class'

  return (
    <li>
      <div className="each-match-card">
        <img src={details.competing_team_logo} alt={details.competing_team} />
        <p style={{textAlign: 'center', fontSize: '13px'}}>
          {details.competing_team}
        </p>
        <p style={{textAlign: 'center', fontWeight: '500'}}>{details.result}</p>
        <p className={statusClassName}>{details.match_status}</p>
      </div>
    </li>
  )
}

export default MatchCard
