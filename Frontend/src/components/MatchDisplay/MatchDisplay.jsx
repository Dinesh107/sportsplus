import React, { useContext } from 'react'
import './MatchDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import MatchList from '../MatchList/MatchList'

const MatchDisplay = () => {

   const { badmintonMatchesNearMe } = useContext(StoreContext )

  return (
    <div className='match-display'>
      <h2>Badminton Matches Near You</h2>
      <div className="match-display-list">
        {badmintonMatchesNearMe.map((match, index) => {
                return <MatchList key={index}  name = {match.matchName} location = {match.location} price = {match.price} />
            })
        }
      </div>
    </div>
  )
}

export default MatchDisplay