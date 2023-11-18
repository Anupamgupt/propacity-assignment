import React, {  useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import { Dots, Vehicle, Vg, Vl } from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";
import SideCard from "../../components/sideCard/SideCard";
import Loader from "../loader/Loader";
import DropDown from "../../components/dropDown/DropDown";
import { setdf } from "../../store/DropSlice";
import Modal from "../../components/modal/Modal";

function Vehicles() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid((prev) => !prev);
  };
  const dispath = useDispatch();
  const vehicles= useSelector((state) => state.vehicle);
  const translate=useSelector((state)=>state.sidebar);
  const show=useSelector((state)=>state.drop)
  const modal=useSelector((state)=>state.modal)
  if(vehicles.length===0){
    return <Loader/>
  }
  return (
    <div className="film">
      {modal && <div className="gg" ><Modal/></div>} 
      <Sidebar />
      { translate   && <div  className="side-main" style={{ transform: translate ? 'translateX(0%)' : 'translateX(100%)' }
}>
       <SideCard translate={translate}/>
      </div>}
      <div className="flim-body">
        <div className="flim-head">
          <p>Vehicles</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src={Vg} className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src={Vl} className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate?"film-content fl":" film-content"} >
            {vehicles.map((items,ind) => (
               <div onClick={()=>{
                dispath(setTranslate(true))
                dispath(setSide({ind,...items}))
                dispath(setdf());
              }} className="c">
              <Card key={ind} ind={ind} title={items.name} />
              {show.show && show.id===ind && <DropDown/>}
              </div>
            ))}
          </div>
        ) : (
          <div className="list-view">
            <div className="list-head">
              <p className="name">Name</p>
              <p className="direct">Model</p>
              <p className="date">Top Speed</p>
            </div>
            {vehicles.map((items,ind)=>(
                <div className={translate?"list fl":" list"}  style={{
                  borderBottom:ind===(vehicles.length-1)?"1px solid transparent":""
                }} onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={Vehicle} className="" />
                        {items.name}
                    </div>
                    <p className="direct">{items.model}</p>
                    <div className="date">
                    {items.max_atmosphering_speed}
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

export default Vehicles;
