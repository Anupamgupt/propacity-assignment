import React, {  useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import { Dots, Users, Vg, Vl } from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SideCard from "../../components/sideCard/SideCard";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";
import Loader from "../loader/Loader";
import DropDown from "../../components/dropDown/DropDown";
import { setdf } from "../../store/DropSlice";
import Modal from "../../components/modal/Modal";

function People() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid((prev) => !prev);
  };
  const dispath = useDispatch();
  const people= useSelector((state) => state.people);
  const species=useSelector((state)=>state.species)
  const translate=useSelector((state)=>state.sidebar);
  const show=useSelector((state)=>state.drop)
  const modal=useSelector((state)=>state.modal)
  if(people.length===0 || species.length===0){
    return <Loader/>
  }
  return (
    <div className="film">
      {modal && <div className="gg" ><Modal/></div>} 
      <Sidebar/>
       { translate   && <div  className="side-main" style={{ transform: translate ? 'translateX(0%)' : 'translateX(100%)' }
}>
       <SideCard translate={translate}/>
      </div>}
      <div className="flim-body">
        <div className="flim-head">
          <p>People</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src={Vg} className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src={Vl} className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className={translate?"film-content fl":" film-content"} >
            {people.map((items,ind) => (
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
              <p className="direct">BirthDate</p>
              <p className="date">Species</p>
            </div>
            {people.map((items,ind)=>(
                <div className={translate?"list fl":" list"} style={{
                  borderBottom:ind===(people.length-1)?"1px solid transparent":""
                }} onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={Users} className="" />
                        {items.name}
                    </div>
                    <p className="direct">{items.birth_year}</p>
                    <div className="date">
                    {items.species && items.species[0] ? species[items.species[0].split('/')[5]-1].name:"NA"}
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

export default People;
