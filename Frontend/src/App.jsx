import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Tournaments from './pages/Tournaments/Tournaments'
import Players from './pages/Players/Players'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import OnGoingMatches from './pages/LiveMatches/OnGoingMatches'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin = {setShowLogin} />:<></>}
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
           <Route path='/' element= {<Home/>}/>
           <Route path='/cart' element= {<Cart/>}/>
           <Route path='/order' element= {<PlaceOrder/>}/>
           <Route path='/tournaments' element= {<Tournaments/>}/>
           <Route path='/players' element= {<Players/>}/>
           <Route path='/ongoingmatches' element= {<OnGoingMatches/>}/>
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App