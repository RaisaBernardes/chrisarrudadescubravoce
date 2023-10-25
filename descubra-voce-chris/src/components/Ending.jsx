import React from "react";
import CTA from "../components/CTA";
//Venha embarcar nessa jornada de autodescoberta e transformação!

const Ending = () => {
  return (
    <section id="investment" className={`padding max-container m-55`}>
        <div className={`flex flex-col justify-center items-center md:gap-y-12 xs:mb-10`}>
          <h1 className={`text-[32px] ss:text-[36px] text-white leading-[150%] font-lato font-bold text-center max-xs:w-[360px] md:w-[600px]`}>
            Venha embarcar nessa jornada de autodescoberta e transformação!
          </h1>

          {/*efeito*/}
          <div className="absolute z-[0] w-[10%] h-[10%] justify-center bg-ending" />

          <CTA styles="mt-8" label="Inscreva-se já!" />
        </div>
      
    </section>
  );
};

export default Ending;
