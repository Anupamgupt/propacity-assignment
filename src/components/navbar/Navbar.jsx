import React from 'react'
import './navbar.css'
import { Starwars } from '../../assets/images/images'
import { useDispatch } from 'react-redux';
import { setMenu } from '../../store/MenuSlice';

function Navbar() {
  const dispatch = useDispatch();
  const handleClick=()=>{
    dispatch(setMenu());
  }
  return (
    <nav className='navbar-head'>
        <img src={Starwars} alt="logo" className='logo'/>
        <div onClick={()=>handleClick()} className='men'>menu</div>
    </nav>
  )
}

export default Navbar