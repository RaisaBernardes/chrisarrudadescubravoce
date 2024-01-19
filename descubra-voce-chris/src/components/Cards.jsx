import React from "react";

const Cards = ({ content, icon }) => (
  <div className="w-full flex justify-around flex-wrap px-5 py-5 rounded-[5px] ss:max-w-[270px] ss:my-5 learning-card ">
    <img
      src={icon}
      alt="icon"
      className="w-[60px] h-[55px] object-contain mt-2 sm:mt-5"
    />

    {/* <h4 className='font-semibold text-white text-center text-[18px] leading-[24px] mb-0 mt-2 max-w-[400px]'>
      {title}
    </h4> */}
   
    <p className="font-normal text-center text-[16px] leading-[130%] text-white mt-5 sm:mt-5 mr-2 ml-2 mb-10">
      {content}
    </p>
  </div>
);

export default Cards;
