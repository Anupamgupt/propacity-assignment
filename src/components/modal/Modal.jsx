import React from 'react'
import './modal.css'
import { alert } from '../../assets/images/images'
import { useDispatch, useSelector } from 'react-redux'
import { setModal, setmf } from '../../store/ModalSlice';
import { useLocation } from 'react-router-dom';
import { removeFilm } from '../../store/FilmSlice';
import { removePeople } from '../../store/PeopleSlice';
import { removePlanet } from '../../store/PlanetSlice';
import { removeSpecies } from '../../store/SpeciesSlice';
import { removeStarship } from '../../store/StarshipSlice';
import { removeVehilce } from '../../store/VehiclesSlice';
import { setTranslate } from '../../store/SidebarSlice';

function Modal() {
    const {show,id}=useSelector((state)=>state.drop)
    const dispatch=useDispatch();
    const location=useLocation();
    const handleClick=(id)=>{
        if(location.pathname==="/films"){
            console.log(id,location.pathname);
            dispatch(removeFilm(id));
        }
        if(location.pathname==="/people"){
            dispatch(removePeople(id));
        }
        if(location.pathname==="/planets"){
            dispatch(removePlanet(id));
        }
        if(location.pathname==="/species"){
            dispatch(removeSpecies(id));
        }
        if(location.pathname==="/starships"){
            dispatch(removeStarship(id));
        }
        if(location.pathname==="/vehicles"){
            dispatch(removeVehilce(id));
        }
        dispatch(setmf());
        dispatch(setTranslate(false))
    }
    // const 
  return (
    <div className='modal'>
        <div>
            <img src={alert}></img>
            <h2>Caution!</h2>
            <p>Are you sure you want to Delete <span>$NAME</span></p>
            <div>
                <button className='bt' onClick={()=>dispatch(setModal(false))}>Cancel</button>
                <button className='bt bt22' onClick={()=>handleClick(id)}>Yes</button>
            </div>
            
        </div>
    </div>
  )
}

export default Modal