import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <Link to= '/' ><img src= {assets.logo2} alt="" className="logo" /></Link>
        <ul className='navbar-menu'>
           <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"? "active":""}>home</Link>
           <a href='#explore-tour' onClick={()=>setMenu("tournaments")} className={menu=="tournaments"? "active":""}>Tournaments</a>
           <a href='#' onClick={()=>setMenu("ongoingmatches")} className={menu=="ongoingmatches"? "active":""}>Live Matches</a>
           <a href='#' onClick={()=>setMenu("players")} className={menu=="players"? "active":""}>Players</a>
        </ul>
        <div className="navbar-right">
           <div className="navbar-basket-icon">
            <Link to= '/cart' ><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
           </div>
           <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar