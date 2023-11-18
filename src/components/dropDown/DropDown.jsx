import React from "react";
import { Lock, one, two, three, four, five, zero }  from "../../assets/images/images";
import './dropdown.css'
import { useDispatch } from "react-redux";
import { setModal } from "../../store/ModalSlice";

function DropDown() {
    const disPatch=useDispatch();
  return (
    <div className="dd">
      <button>
        <img src={zero} />
        <p>View</p>
      </button>
      <button>
        <img src={one} />
        <p>Download</p>
      </button>
      <button>
        <img src={two} />
        <p>Rename</p>
      </button>
      <button>
        <img src={three} />
        <p>Share Link</p>
      </button>
      <button>
        <img src={four} />
        <p>Move</p>
      </button>
      <button>
        <img src={Lock} />
        <p>Mark Private</p>
      </button>
      <button>
        <img src={five} />
        <p className="del" onClick={()=>{
            disPatch(setModal(true))
        }}>Delete</p>
      </button>
    </div>
  );
}

export default DropDown;
