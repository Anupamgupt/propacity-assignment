import React from 'react'
import './navbar.css'
import { Starwars } from '../../assets/images/images'
import { useDispatch } from 'react-redux';
import { setMenu } from '../../store/MenuSlice';
import { setFalse } from '../../store/SidebarSlice';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick=()=>{
    dispatch(setMenu());
    dispatch(setFalse())
  }
  return (
    <nav className='navbar-head'>
        <img src={Starwars} alt="logo" className='logo'/>
        <div onClick={()=>handleClick()} className='men'>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </nav>
  )
}

export default Navbar