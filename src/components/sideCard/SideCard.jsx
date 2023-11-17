import React from 'react'
import './sideCard.css'
import { Close, Stars,film0,film1,film2,film3,film4,film5 } from '../../assets/images/images'
import { useDispatch, useSelector } from 'react-redux'
import { setFalse } from '../../store/SidebarSlice';

function SideCard() {
    const pic=[film0,film1,film2,film3,film4,film5,film1,film2,film3,film4,film5];
    const data=useSelector((state)=>state.sideContent)
    const propertiesToRender = [
        'gender',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'population',
        'classification',
        'designation',
        'average_height',
        'skin_colors',
        'hair_colors',
        'eye_colors',
        'average_lifespan',
        'model',
        'manufacturer',
        'cost_in_credits',
        'length',
        'max_atmosphering_speed',
        'crew',
        'passengers',
        'cargo_capacity',
        'consumables',
        'hyperdrive_rating',
        'MGLT',
        'starship_class',
      ];
      
    

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
                <h3>{data.title?" Title":"Name"}</h3>
                <p>{data.title?data.title:data.name}</p>
                <h3>{data.opening_crawl&&"Plot summary"}</h3>
               {data.opening_crawl&& <p> {data.opening_crawl}</p>} 
                {data.release_date&& <h3>Release Date</h3>}
                {data.release_date && <p>{data.release_date}</p>}
                {data.director&& <h3>Director</h3>}
                {data.director && <p>{data.director}</p>}
                {data.producer&& <h3>Producers</h3>}
                {data.producer && <p>{data.producer}</p>}
                {data.height&& <h3>Height</h3>}
                {data.height && <p>{data.height}</p>}
                {data.mass&& <h3>Mass</h3>}
                {data.mass && <p>{data.mass}</p>}
                {data.hair_color&& <h3>Hair Color</h3>}
                {data.hair_color && <p>{data.hair_color}</p>}
                {data.skin_color&& <h3>Skin Color</h3>}
                {data.skin_color && <p>{data.skin_color}</p>}
                {data.eye_color&& <h3>Eye Color</h3>}
                {data.eye_color && <p>{data.eye_color}</p>}
                {data.birth_year&& <h3>Birth Year</h3>}
                {data.birth_year && <p>{data.birth_year}</p>}
                {data.gender&& <h3>Gender</h3>}
                {data.gender && <p>{data.gender}</p>}
                {propertiesToRender.map(key => data[key] && (
                <>
                    <h3>{key}</h3>
                    <p>{data[key]}</p>
                </>
                ))}
              
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