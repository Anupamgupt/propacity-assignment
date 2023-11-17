import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import { Dots,  Vg, Vl ,Planet as Pl} from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";
import SideCard from "../../components/sideCard/SideCard";
import Loader from "../loader/Loader";

function Planet() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid((prev) => !prev);
  };
  const dispath = useDispatch();
  const planets= useSelector((state) => state.planets);
  const translate=useSelector((state)=>state.sidebar);
  if(planets.length===0){
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
          <p>Planets</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src={Vg} className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src={Vl} className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate?"film-content fl":" film-content"} >
            {planets.map((items,ind) => (
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
              <p className="direct">Climate</p>
              <p className="date">Gravity</p>
            </div>
            {planets.map((items,ind)=>(
                <div className={translate?"list fl":" list"} style={{
                  borderBottom:ind===(planets.length-1)?"1px solid transparent":""
                }} onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={Pl} className="" />
                        {items.name}
                    </div>
                    <p className="direct">{items.climate}</p>
                    <div className="date">
                    {items.gravity}
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

export default Planet;
