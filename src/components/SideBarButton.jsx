// SidebarButton.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from '../Utilities'

const SidebarButton = ({ isActive, label }) => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const onTabClick = (value) => {
    navigate("/" + String(value).toLocaleLowerCase());
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`sidebar-button bg-transparent border-none p-0 m-0 cursor-pointer ${isActive ? "active" : ""}`}
      onClick={() => onTabClick(label)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-200px h-59px bg-cover bg-center d-flex pl-5 justify-content-start gap-20 align-items-center 

        ${isHovered && !isActive ? "hover" : ""}`}
        style={{
          // backgroundImage: `url(${isActive ? "/Btn_bg_On.png" : ""})`,
        }}
      >
        <img
          src={`/sidebar/${isActive ? label + "_on.svg" : label + ".svg"}`}
          className={` ml-[36px] `}
          alt="tab"
        />
        <div
          className={`text-[16px] font-semibold ${isActive ? "text-white" : "text-custom-medium-white"}`}
        >
          {label}
        </div>
        {isActive && <div className="active-dot" />}
      </div>
    </button>
  );

  // return (
  //   <Button type={"inline"} className={`bg-transparent`} onClick={() => onTabClick(label)} >
  //     <div className="w-200px " >
  //       <img
  //         src={`/sidebar/${isActive ? label + "_on.svg" : label + ".svg"}`}
  //         className={` ml-[36px] w-22 h-22`}
  //         alt="tab"
  //       />
  //       <div
  //         className={`text-[16px] font-semibold ${isActive ? "text-white" : "text-custom-medium-white"}`}
  //       >
  //         {label}
  //       </div>
  //       {isActive && <div className="active-dot" />}
  //     </div>
  //   </Button>
  // )
};

export default SidebarButton;
