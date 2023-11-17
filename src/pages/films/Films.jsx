import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import "./film.css";
import Card from "../../components/card/Card";
import { Dots, Filmreel, Vg, Vl } from "../../assets/images/images";
import { useDispatch } from "react-redux";
import { setFilm } from "../../store/FilmSlice";
import { useSelector } from "react-redux";
import SideCard from "../../components/sideCard/SideCard";
import { setTranslate } from "../../store/SidebarSlice";
import { setSide } from "../../store/SidebarContentSlice";

function Films() {
  const [grid, setGrid] = useState(true);
  const handleClick = () => {
    setGrid((prev) => !prev);
    // console.log(grid);
  };
  const dispath = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        dispath(setFilm(response.data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispath]);
  const films = useSelector((state) => state.films);
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
          <p>Films</p>
          <button className="film-btns" onClick={() => handleClick()}>
            <img src={Vg} className={!grid && "vl"} />
            {grid && <p className="text-film">Grid</p>}
            <img src={Vl} className={grid && "vl"} />
            {!grid && <p className="text-film">List</p>}
          </button>
        </div>
        {grid ? (
          <div className="film-content" >
            {films.map((items,ind) => (
              <div onClick={()=>{
                dispath(setTranslate(true))
                dispath(setSide({ind,...items}))
              }}>
                <Card key={ind} ind={ind} title={items.title} />
              </div>
              
            ))}
          </div>
        ) : (
          <div className="list-view">
            <div className="list-head">
              <p className="name">Name</p>
              <p className="direct">Director</p>
              <p className="date">Release Date</p>
            </div>
            {films.map((items,ind)=>(
                <div className="list" onClick={()=>{
                  dispath(setTranslate(true))
                  dispath(setSide({ind,...items}))
                }
                }>
                    <div className="name">
                        <img src={Filmreel} className="" />
                        {items.title}
                    </div>
                    <p className="direct">{items.director}</p>
                    <div className="date">
                    {items.release_date}
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

export default Films;
