import React, { useState } from "react";
import "./sidebar.css";
import { Folder, Right } from "../../assets/images/images";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setFalse } from "../../store/SidebarSlice";
import { setf } from "../../store/MenuSlice";

function Sidebar() {
  const location = useLocation();
  const [page,setPage]=useState('');
  const dispatch=useDispatch();
  const handleClick = (item) => {
    setPage(item);
    dispatch(setFalse());
    dispatch(setf());
    console.log(item)
  };
  const menu = useSelector((state)=>state.menu);
  return (
    <div className={menu? `sideBar sidedis`:`sideBar sidenotdis`}>
      <Link to="/films" className="link" style={{ background: location.pathname === "/films" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={() => handleClick("film")} style={{ background: page === "film" ? "#CB1A80" : "transparent" }}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Films</p>
        </div>
        <img src={Right} />
      </button>
      </Link>
      <Link to="/people" className="link" style={{ background: location.pathname === "/people" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={()=>handleClick("people")}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>People</p>
        </div>
        <img src={Right} />
      </button>
      </Link>
      <Link to="/planets" className="link" style={{ background: location.pathname === "/planets" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={()=>handleClick("planet")}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Planets</p>
        </div>
        <img src={Right} />
      </button>
      </Link>
      <Link to="/species" className="link" style={{ background: location.pathname === "/species" ? "#CB1A80" : "transparent" }}>
      <button className="hover" onClick={()=>{handleClick("species")}}>
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Species</p>
        </div>
        <img src={Right} />
      </button>
      </Link>
      <Link to="/starships" className="link" style={{ background: location.pathname === "/starships" ? "#CB1A80" : "transparent" }}>
      <button className="hover">
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Starships</p>
        </div>
        <img src={Right} />
      </button>
      </Link>
      <Link to="/vehicles" className="link" style={{ background: location.pathname === "/vehicles" ? "#CB1A80" : "transparent" }}>
      <button className="hover">
        <div className="sideBar-bar">
          <img src={Folder} />
          <p>Vehicles</p>
        </div>
        <img src={Right} />
      </button>
      </Link>
    </div>
  );
}

export default Sidebar;
