import React from "react";
import { FcLightAtTheEndOfTunnel } from "react-icons/fc";
import logo from "../../assets/icons/logo.png"

export const Logo = ({ textSize = null, bg = true }) => {
  return (
    <div
      className={`${
        bg && " border-x-1   shadow rounded"
      } w-full flex justify-center items-center p-2  select-none`}
    >
      {/* <FcLightAtTheEndOfTunnel className="-mr-2" size={45} /> */}
      <span
        className={`${
          textSize ? textSize : "text-3xl"
        } p-1  text-blue-800 font-bold `}
      >
        <img src={logo} alt="" 
        
        style={{
          width: "120px"
        }}/>
        
      </span>
    </div>
  );
};
