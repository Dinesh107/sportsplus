import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { badmintonMatchesNearMe } from '../../assets/assets'

const Cart = () => {
  
  const {matchId, removeFromCart} = useContext(StoreContext)

  return (
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Title</p>
                <p>Price</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
             { badmintonMatchesNearMe.map((matchId, index) => {
                       if(matchId[matchId.matchId] === matchId.matchId) {
                         return (
                            <div>
                                <p>{matchId.matchName}</p>
                                <p>{matchId.price}</p>
                                <p>{matchId.price}</p>
                            </div>
                         )
                       }
                })
             }
        </div>
    </div>
  )
}


export default Cart