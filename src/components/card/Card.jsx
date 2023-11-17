import React from 'react'
import './Card.css'
import { Dots, Filmreel,film0,film1,film2,film3,film4,film5 } from '../../assets/images/images'

function Card({title,ind}) {
    const pic=[film0,film1,film2,film3,film4,film5,film1,film2,film3,film4,film5];
  return (
    <div className='card'>
        <div className='image-container'>
            <img src={pic[ind]} className=''></img>
        </div>
        <div className='card-foot'>
            <div>
                <img src={Filmreel} className='film-img'></img>
                <p className='card-text'>{title}</p>
            </div>
            
            <button className='card-btn'>
                <img src={Dots}/>
            </button>
        </div>
    </div>
  )
}

export default Card