import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Folder, Right } from "../../assets/images/images";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setFalse } from "../../store/SidebarSlice";
import { setf } from "../../store/MenuSlice";
import { setFilm } from "../../store/FilmSlice";
import { setPeople } from "../../store/PeopleSlice";
import { setPlanets } from "../../store/PlanetSlice";
import { setSpecies } from "../../store/SpeciesSlice";
import { setStarship } from "../../store/StarshipSlice";
import { setVehicle } from "../../store/VehiclesSlice";

function Sidebar() {
  const location = useLocation();
  const dispatch=useDispatch();
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
    // setPage(item);
    dispatch(setFalse());
    dispatch(setf());
  };
  const menu = useSelector((state)=>state.menu);
  return (
    <div className={menu? `sideBar sidedis`:`sideBar sidenotdis`}>
      <Link to="/films" className="link" style={{ background: location.pathname === "/films" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={() => handleClick("film")} style={{ background: location.pathname === "/films" ?"#CB1A80" : "transparent" }}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Films</p>
        </div>
        <img src={Right} className="change" style={{transform:location.pathname === "/films" ?'rotate(90deg)': 'rotate(0deg)'}} />
      </button>
      </Link>
      <Link to="/people" className="link" style={{ background: location.pathname === "/people" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={()=>handleClick("people")}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>People</p>
        </div>
        <img src={Right} className="change" style={{transform:location.pathname === "/people" ?'rotate(90deg)': 'rotate(0deg)'}} />
      </button>
      </Link>
      <Link to="/planets" className="link" style={{ background: location.pathname === "/planets" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={()=>handleClick("planet")}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Planets</p>
        </div>
        <img src={Right} className="change" style={{transform:location.pathname === "/planets" ?'rotate(90deg)': 'rotate(0deg)'}} />
      </button>
      </Link>
      <Link to="/species" className="link" style={{ background: location.pathname === "/species" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={()=>{handleClick("species")}}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Species</p>
        </div>
        <img src={Right} className="change" style={{transform:location.pathname === "/species" ?'rotate(90deg)': 'rotate(0deg)'}} />
      </button>
      </Link>
      <Link to="/starships" className="link" style={{ background: location.pathname === "/starships" ? "#CB1A80" : "transparent" }}>
      <button className="hover">
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Starships</p>
        </div>
        <img src={Right} className="change" style={{transform:location.pathname === "/starships" ?'rotate(90deg)': 'rotate(0deg)'}} />
      </button>
      </Link>
      <Link to="/vehicles" className="link" style={{ background: location.pathname === "/vehicles" ? "#CB1A80" : "transparent" }}>
      <button className="hover">
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Vehicles</p>
        </div>
        <img src={Right} className="change" style={{transform:location.pathname === "/vehicles" ?'rotate(90deg)': 'rotate(0deg)'}} />
      </button>
      </Link>
    </div>
  );
}

export default Sidebar;
