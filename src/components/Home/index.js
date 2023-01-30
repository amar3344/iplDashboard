import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamList()
  }

  getIplTeamList = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const res = await fetch(url)
    const data = await res.json()
    const teamsData = data.teams

    this.setState({teamsList: teamsData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h3 className="ipl-heading">IPL Dashboard</h3>
        </div>
        <div className="teams-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#fff" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-container">
              {teamsList.map(item => (
                <TeamCard key={item.id} details={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
