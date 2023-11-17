import React from 'react'
import './sideCard.css'
import { Close, Stars,film0,film1,film2,film3,film4,film5 } from '../../assets/images/images'
import { useDispatch, useSelector } from 'react-redux'
import { setFalse } from '../../store/SidebarSlice';

function SideCard() {
    const pic=[film0,film1,film2,film3,film4,film5,film1,film2,film3,film4,film5];
    const data=useSelector((state)=>state.sideContent)

    const dispatch=useDispatch();
  return (
    <div className='side-Card-main'>
        <div className='side-left'></div>
        <div className='side-right'>
            <div className='side-head'>
                <p>Movie Details</p>
                <img src={Close} className='side-main-image' onClick={()=>dispatch(setFalse())}/>
            </div>
            <div className='side-down'>
                <h3>Image</h3>
                <img src={pic[data.ind]} className='img-st'></img>
                <h3>Title</h3>
                <p>jdndsjf </p>
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officia quo laudantium, fugiat </p>
                <h3>Title</h3>
                <p>jdjdsmb</p>
              
            </div>
            <div className='cl-down'>
                <button className='cl' onClick={()=>dispatch(setFalse())}>
                    Close
                </button>
            </div>
           
           
          
        </div>
    </div>
  )
}

export default SideCard