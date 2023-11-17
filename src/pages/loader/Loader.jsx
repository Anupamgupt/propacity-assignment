import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { loader } from '../../assets/images/images'
import "./loader.css"

function Loader() {
  return (
    <div className="film">
        <Sidebar/>
        <div className='dash'>
            <img src={loader}/>
        </div>
    </div>
  )
}

export default Loader