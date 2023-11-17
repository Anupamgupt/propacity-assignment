import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Card from "../../components/card/Card";
import { Dots, Users, Vg, Vl } from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setStarship } from "../../store/StarshipSlice";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";
import SideCard from "../../components/sideCard/SideCard";

function Starship() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid((prev) => !prev);
    // console.log(grid);
  };
  const dispath = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/starships");
        dispath(setStarship(response.data.results));
        console.log(response)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispath]);
  const starships= useSelector((state) => state.starship);
  //   if(films>0){
    const translate=useSelector((state)=>state.sidebar);
//   //   }
//   if(starships){
    
//   }
  return (
    <div className="film">
      <Sidebar />
      <div  className="side-main" style={{ transform: translate ? 'translateX(0%)' : 'translateX(100%)' }
}>
       <SideCard translate={translate}/>
      </div>
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
          <div className="film-content">
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
                <div className="list" onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={Users} className="" />
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
