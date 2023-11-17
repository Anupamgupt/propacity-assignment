import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Filmreel, Folder, Planet, Right, Species, Starimg, Users, Vehicle } from "../../assets/images/images";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFalse, setTranslate } from "../../store/SidebarSlice";
import { setMenu, setf } from "../../store/MenuSlice";
import { setFilm } from "../../store/FilmSlice";
import { setPeople } from "../../store/PeopleSlice";
import { setPlanets } from "../../store/PlanetSlice";
import { setSpecies } from "../../store/SpeciesSlice";
import { setStarship } from "../../store/StarshipSlice";
import { setVehicle } from "../../store/VehiclesSlice";
import { setSide } from "../../store/SidebarContentSlice";

function Sidebar() {
  const [page,setPage]=useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          filmsResponse,
          peopleResponse,
          planetsResponse,
          speciesResponse,
          starshipsResponse,
          vehiclesResponse,
        ] = await Promise.all([
          axios.get("https://swapi.dev/api/films/"),
          axios.get("https://swapi.dev/api/people"),
          axios.get("https://swapi.dev/api/planets"),
          axios.get("https://swapi.dev/api/species"),
          axios.get("https://swapi.dev/api/starships"),
          axios.get("https://swapi.dev/api/vehicles"),
        ]);

        dispatch(setFilm(filmsResponse.data.results));
        dispatch(setPeople(peopleResponse.data.results));
        dispatch(setPlanets(planetsResponse.data.results));
        dispatch(setSpecies(speciesResponse.data.results));
        dispatch(setStarship(starshipsResponse.data.results));
        dispatch(setVehicle(vehiclesResponse.data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleClick = (item) => {
    setPage(!page);
    dispatch(setFalse());
    dispatch(setMenu())
    dispatch(setf());
  };
  const menu = useSelector((state) => state.menu);
  const films =useSelector((state)=>state.films);
  const people =useSelector((state)=>state.people);
  const species =useSelector((state)=>state.species);
  const planets =useSelector((state)=>state.planets);
  const vehicles =useSelector((state)=>state.vehicle);
  const starships =useSelector((state)=>state.starship  );
  const side=useSelector((state)=>state.sideContent)
  return (
    <div className={menu ? `sideBar sidedis` : `sideBar sidenotdis`}>
      <Link
        to="/films"
        className="link"
        style={{
          background: 
            location.pathname === "/films" ? "#CB1A80" : "transparent",
        }}
      >
        <button
          className="hover"
          onClick={() => handleClick("film")}
          style={{
            background:
              location.pathname === "/films" ? "#CB1A80" : "transparent",
          }}
        >
          <div className="sideBar-bar">
            <img src={Folder} />
            <p>Films</p>
          </div>
          <img
            src={Right}
            className="change"
            style={{
              transform:
                location.pathname === "/films"  && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />  
        </button>
      </Link>
   {location.pathname === "/films" && page &&   <div className="it">
        {films.map((item,ind)=>(
          <div className="pad" style={{backgroundColor:ind===side.ind ? 
            "#F9FAFD33"
          :"transparent",
          border:ind===side.ind?"1px solid black ":"1px solid transparent"
          }} onClick={()=>{
            dispatch(setSide({ind,...item}))
            dispatch(setTranslate(true))
          }
            }>
            <img src={Filmreel}/>
            <p>{item.title}</p>
            <img
            src={Right}
            className="change ch"
          />
          </div>
        ))}
      </div>}
      <Link
        to="/people"
        className="link"
        style={{
          background:
            location.pathname === "/people" ? "#CB1A80" : "transparent",
        }}
      >
        <button className="hover" onClick={() => handleClick("people")}>
          <div className="sideBar-bar">
            <img src={Folder} />
            <p>People</p>
          </div>
          <img
            src={Right}
            className="change"
            style={{
              transform:
                location.pathname === "/people"  && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/people" && page &&   <div className="it">
        {people.map((item,ind)=>(
          <div className="pad" style={{backgroundColor:ind===side.ind ? 
            "#F9FAFD33"
          :"transparent",
          border:ind===side.ind?"1px solid black ":"1px solid transparent"
          }} onClick={()=>{
            dispatch(setSide({ind,...item}))
            dispatch(setTranslate(true))
          }
            }>
            <img src={Users}/>
            <p>{item.name}</p>
            <img
            src={Right}
            className="change ch"
          />
          </div>
        ))}
      </div>}
      <Link
        to="/planets"
        className="link"
        style={{
          background:
            location.pathname === "/planets" ? "#CB1A80" : "transparent",
        }}
      >
        <button className="hover" onClick={() => handleClick("planet")}>
          <div className="sideBar-bar">
            <img src={Folder} />
            <p>Planets</p>
          </div>
          <img
            src={Right}
            className="change"
            style={{
              transform:
                location.pathname === "/planets" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/planets" && page &&   <div className="it">
        {planets.map((item,ind)=>(
          <div className="pad" style={{backgroundColor:ind===side.ind ? 
            "#F9FAFD33"
          :"transparent",
          border:ind===side.ind?"1px solid black ":"1px solid transparent"
          }} onClick={()=>{
            dispatch(setSide({ind,...item}))
            dispatch(setTranslate(true))
          }
            }>
            <img src={Planet}/>
            <p>{item.name}</p>
            <img
            src={Right}
            className="change ch"
          />
          </div>
        ))}
      </div>}
      <Link
        to="/species"
        className="link"
        style={{
          background:
            location.pathname === "/species" ? "#CB1A80" : "transparent",
        }}
      >
        <button
          className="hover"
          onClick={() => {
            handleClick("species");
          }}
        >
          <div className="sideBar-bar">
            <img src={Folder} />
            <p>Species</p>
          </div>
          <img
            src={Right}
            className="change"
            style={{
              transform:
                location.pathname === "/species" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/species" && page &&   <div className="it">
        {species.map((item,ind)=>(
          <div className="pad" style={{backgroundColor:ind===side.ind ? 
            "#F9FAFD33"
          :"transparent",
          border:ind===side.ind?"1px solid black ":"1px solid transparent"
          }} onClick={()=>{
            dispatch(setSide({ind,...item}))
            dispatch(setTranslate(true))
          }
            }>
            <img src={Species}/>
            <p>{item.name}</p>
            <img
            src={Right}
            className="change ch"
          />
          </div>
        ))}
      </div>}
      <Link
        to="/starships"
        className="link"
        style={{
          background:
            location.pathname === "/starships" ? "#CB1A80" : "transparent",
        }}
      >
        <button className="hover" onClick={() => {
            handleClick("starships");
          }}>
          <div className="sideBar-bar">
            <img src={Folder} />
            <p>Starships</p>
          </div>
          <img
            src={Right}
            className="change"
            style={{
              transform:
                location.pathname === "/starships" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/starships" && page &&   <div className="it">
        {starships.map((item,ind)=>(
          <div className="pad" style={{backgroundColor:ind===side.ind ? 
            "#F9FAFD33"
          :"transparent",
          border:ind===side.ind?"1px solid black ":"1px solid transparent"
          }} onClick={()=>{
            dispatch(setSide({ind,...item}))
            dispatch(setTranslate(true))
          }
            }>
            <img src={Starimg}/>
            <p>{item.name}</p>
            <img
            src={Right}
            className="change ch"
          />
          </div>
        ))}
      </div>}
      <Link
        to="/vehicles"
        className="link"
        style={{
          background:
            location.pathname === "/vehicles" ? "#CB1A80" : "transparent",
        }}
      >
        <button className="hover" onClick={() => {
            handleClick("vehicles");
          }}>
          <div className="sideBar-bar">
            <img src={Folder} />
            <p>Vehicles</p>
          </div>
          <img
            src={Right}
            className="change"
            style={{
              transform:
                location.pathname === "/vehicles" && page
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          />
        </button>
      </Link>
      {location.pathname === "/vehicles" && page &&   <div className="it">
        {vehicles.map((item,ind)=>(
          <div className="pad" style={{backgroundColor:ind===side.ind ? 
            "#F9FAFD33"
          :"transparent",
          border:ind===side.ind?"1px solid black ":"1px solid transparent"
          }} onClick={()=>{
            dispatch(setSide({ind,...item}))
            dispatch(setTranslate(true))
          }
            }>
            <img src={Vehicle}/>
            <p>{item.name}</p>
            <img
            src={Right}
            className="change ch"
          />
          </div>
        ))}
      </div>}
    </div>
  );
}

export default Sidebar;
