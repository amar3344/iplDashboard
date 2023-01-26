import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props

  return (
    <li className="each-team-card">
      <Link
        to={`/teams-matches/${details.id}`}
        className="each-team-card-button"
      >
        <img src={details.team_image_url} alt={details.name} />
        <h4>{details.name}</h4>
      </Link>
    </li>
  )
}

export default TeamCard
