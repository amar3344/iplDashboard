import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamDetails: []}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/ipl/${id}`
    const options = {
      method: 'GET',
    }
    const res = await fetch(url, options)
    const data = await res.json()

    this.setState({isLoading: false, teamDetails: data})
  }

  getClassNames = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'CSK':
        return 'csk'

      case 'MI':
        return 'mi'

      case 'KKR':
        return 'kkr'

      case 'KX1P':
        return 'kx1p'

      case 'SRH':
        return 'srh'

      case 'RR':
        return 'rr'

      case 'RCB':
        return 'rcb'

      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  getTeamMatchDetails = () => {
    const {teamDetails} = this.state
    const teamClassName = this.getClassNames()
    return (
      <div className={`match-details-cont  ${teamClassName}`}>
        <img
          src={teamDetails.team_banner_url}
          alt={teamDetails.id}
          className="banner-image"
        />
        <h4 className="heading">Latest Matches</h4>
        <div className="latest-match-card">
          <LatestMatch details={teamDetails} />
        </div>
        <div className="match-card-container">
          <MatchCard details={teamDetails} />
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-details-con">
        {isLoading ? (
          <div>
            <Loader type="Rings" width={50} height={50} color="#fff" />
          </div>
        ) : (
          this.getTeamMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
