import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import { Dots, Starimg, Users, Vg, Vl } from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";
import SideCard from "../../components/sideCard/SideCard";
import Loader from "../loader/Loader";

function Starship() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid((prev) => !prev);
  };
  const dispath = useDispatch();
 
  const starships= useSelector((state) => state.starship);
  const translate=useSelector((state)=>state.sidebar);
  if(starships.length===0){
    return <Loader/>
  }
  return (
    <div className="film">
      <Sidebar />
      { translate   && <div  className="side-main" style={{ transform: translate ? 'translateX(0%)' : 'translateX(100%)' }
}>
       <SideCard translate={translate}/>
      </div>}
      <div className="flim-body">
        <div className="flim-head">
          <p>Starships</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src={Vg} className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src={Vl} className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate?"film-content fl":" film-content"} >
            {starships.map((items,ind) => (
               <div onClick={()=>{
                dispath(setTranslate(true))
                dispath(setSide({ind,...items}))
              }}>
              <Card key={ind} title={items.name} ind={ind} />
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            <div className="list-head">
              <p className="name">Name</p>
              <p className="direct">Model</p>
              <p className="date">HyperDrive Rating</p>
            </div>
            {starships.map((items,ind)=>(
                <div className={translate?"list fl":" list"}  style={{
                  borderBottom:ind===(starships.length-1)?"1px solid transparent":""
                }} onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={Starimg} className="" />
                        {items.name}
                    </div>
                    <p className="direct">{items.model}</p>
                    <div className="date">
                    {items.hyperdrive_rating}
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

export default Starship;
