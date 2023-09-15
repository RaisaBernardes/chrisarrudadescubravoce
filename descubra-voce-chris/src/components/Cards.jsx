import React from "react";

const Cards = ({ content, icon }) => (
  <div className="w-full content-start flex justify-around flex-wrap px-5 py-5 rounded-[5px] max-w-[270px] md:mr-10 sm:mr-5 mr-0 my-5 learning-card">
    <img
      src={icon}
      alt="icon"
      className="w-[42px] h-[27px] object-contain mt-5"
    />
    <p className="font-normal text-center text-[16px] leading-[32px] text-white mt-10">
      {content}
    </p>
  </div>
);

export default Cards;
