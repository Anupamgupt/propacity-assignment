import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import HomeCard from '../../components/home-component/HomeCard'

function Home() {
  return (
    <div className="film">
        <Sidebar/>
        <div className='dashboard'>
            <HomeCard/>
        </div>
    </div>
  )
}

export default Home