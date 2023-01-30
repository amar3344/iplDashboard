import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props

  return (
    <li className="each-team-card">
      <Link
        to={`/team-matches/${details.id}`}
        className="each-team-card-button"
      >
        <img
          src={details.team_image_url}
          alt={details.name}
          className="team-card-image"
        />
        <p>{details.name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
