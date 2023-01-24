import './index.css'

const TeamCard = props => {
  const {details} = props
  console.log(details)

  return (
    <div>
      <h3>{details.name}</h3>
      <img src={details.teamImageUrl} alt="teamImage" />
    </div>
  )
}

export default TeamCard
