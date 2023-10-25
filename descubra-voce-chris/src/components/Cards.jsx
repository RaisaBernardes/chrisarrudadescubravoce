import React from "react";

const Cards = ({ content, icon }) => (
  <div className="w-full flex justify-around flex-wrap px-5 py-5 rounded-[5px] ss:max-w-[270px] ss:my-5 learning-card">
    <img
      src={icon}
      alt="icon"
      className="w-[60px] h-[55px] object-contain mt-2 sm:mt-5"
    />
    <p className="font-normal text-center text-[16px] leading-[130%] text-white mt-5 sm:mt-10 mr-4 ml-4 mb-10">
      {content}
    </p>
  </div>
);

export default Cards;
