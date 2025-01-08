import React, { useState } from 'react'
import './MatchList.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const MatchList = ({matchName, location, price}) => {
  
  const [matchPlay, setMatchPlayCount] = useState(0);


  return (
    <div className='match-list'>
        <div className="match-list-info">
            <div className="match-list-name">
                <p>{matchName}</p>
            </div>
            <p className="match-location">
                {location}
            </p>
            <p className="match-price">₹{price} / 👤</p>
            {/* {!matchPlay 
                ? <img className='add' onClick={() => setMatchPlayCount(prev=>prev+1)} src= {assets.add_icon_white} alt="" />
                : <div className="match-play-counter">
                   <img onClick={() => setMatchPlayCount(prev=>prev-1)} src= {assets.remove_icon_red} alt="" /> 
                   <span>{matchPlay}</span>
                   <img onClick={() => setMatchPlayCount(prev=>prev+1)} src= {assets.add_icon_green} alt="" />
                </div> 
            } */}

            {
                <Link to='/cart'><button className='book-match-button' >Book match</button></Link> 
            }

        </div>
    </div>
  )
}

export default MatchList