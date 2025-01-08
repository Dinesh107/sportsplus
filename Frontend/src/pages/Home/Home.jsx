import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreTournaments from '../../components/ExploreTournaments/ExploreTournaments'
import MatchDisplay from '../../components/MatchDisplay/MatchDisplay'

const Home = () => {
  return (
    <div>
       <Header/>
       <ExploreTournaments/>
       <MatchDisplay />
    </div>
  )
}

export default Home