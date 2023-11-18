import React, {  useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import { Dots, Vg, Vl,Species as sp} from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";
import SideCard from "../../components/sideCard/SideCard";
import Loader from "../loader/Loader";
import DropDown from "../../components/dropDown/DropDown";
import { setdf } from "../../store/DropSlice";
import Modal from "../../components/modal/Modal";

function Species() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid((prev) => !prev);
  };
  const dispath = useDispatch();
  const planets= useSelector((state) => state.planets);
  const species= useSelector((state) => state.species);  
  const translate=useSelector((state)=>state.sidebar);
  const show=useSelector((state)=>state.drop)
  const modal=useSelector((state)=>state.modal)
  if(species.length===0 || planets.length===0){
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
          <p>Species</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src={Vg} className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src={Vl} className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate?"film-content fl":" film-content"} >
            {species.map((items,ind) => (
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
              <p className="direct">Homeworld</p>
              <p className="date">Lifespan</p>
            </div>
            {species.map((items,ind)=>(
                <div className={translate?"list fl":" list"}  style={{
                  borderBottom:ind===(species.length-1)?"1px solid transparent":""
                }} onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={sp} className="" />
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
