import React, { useState } from "react";

const ImageButton = ({ disabled, label, onClick, width, height, className }) => {
  return (
    <button
      className={`bg-transparent border-none p-0 m-0 cursor-pointer`}
      onClick={onClick}
    >
      <div className={`btn ${height > 0 ? `h-[${height}px]` : "h-[32px]"} ${width > 0 ? `w-[${width}px]` : "w-[156px]"} ${disabled === true ? "text-muted" : "text-white"} bg-cover bg-center  flex items-center justify-center text-[16px] font-semibold
          border-white border-[1px] px-3 rounded-[5px] ` + className}
      >
        {label}
      </div>
    </button>
  );
};

export default ImageButton;
