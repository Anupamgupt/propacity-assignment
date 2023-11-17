import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import { Dots, Users, Vg, Vl } from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSpecies } from "../../store/SpeciesSlice";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";
import SideCard from "../../components/sideCard/SideCard";

function Species() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid((prev) => !prev);
  };
  const dispath = useDispatch();
  const planets= useSelector((state) => state.planets);
  const species= useSelector((state) => state.species);  
  const translate=useSelector((state)=>state.sidebar);
  return (
    <div className="film">
      <Sidebar />
      { translate   && <div  className="side-main" style={{ transform: translate ? 'translateX(0%)' : 'translateX(100%)' }
}>
       <SideCard translate={translate}/>
      </div>}
      <div className="flim-body">
        <div className="flim-head">
          <p>Species</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src={Vg} className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src={Vl} className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className="film-content">
            {species.map((items,ind) => (
               <div onClick={()=>{
                dispath(setTranslate(true))
                dispath(setSide({ind,...items}))
              }}>
              <Card key={ind} ind={ind} title={items.name} />
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            <div className="list-head">
              <p className="name">Name</p>
              <p className="direct">Homeworld</p>
              <p className="date">Lifespan</p>
            </div>
            {species.map((items,ind)=>(
                <div className="list" onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={Users} className="" />
                        {items.name}
                    </div>
                    <p className="direct">{items.homeworld && planets.length ? planets[8].name:"NA"}</p>
                    <div className="date">
                    {items.average_lifespan}
                    <img src={Dots}></img>
                    </div>
                </div>
            ))}
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Species;
