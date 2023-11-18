import React, { useState } from 'react'
import './Card.css'
import { Dots, Filmreel,film0,film1,film2,film3,film4,film5 } from '../../assets/images/images'
import { useDispatch } from 'react-redux';
import { setDrop } from '../../store/DropSlice';
import { setFalse, setTranslate } from '../../store/SidebarSlice';

function Card({title,ind}) {
    const pic=[film0,film1,film2,film3,film4,film5,film1,film2,film3,film4,film5];
    const dispatch=useDispatch();
 
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
            
            <button className='card-btn' onClick={(e)=>{
                 e.stopPropagation();
                dispatch(setDrop(ind))
                }}>
                <img src={Dots}/>
            </button>
        </div>
    </div>
  )
}

export default Card