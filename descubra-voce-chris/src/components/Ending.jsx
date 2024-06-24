import React from "react";
import CTA from "./CTA";
import CTA2 from "./CTA2";

const Ending = () => {
  return (
    <section id="investment" className={`padding max-container mt-20 mb-20 w-full`}>
        <div className={`flex flex-col justify-center items-center md:gap-y-12 xs:mb-10`}>
          <h1 className={`z-[1] text-[26px] ss:text-[36px] text-white leading-[150%] font-lato font-bold text-center md:w-[600px]`}>
            Venha embarcar nessa jornada de autodescoberta e transformação!
          </h1>

          {/*efeito*/}

          <CTA styles="mt-7" label="Inscreva-se já!" className="z-[1]" />
          <CTA2 styles="mt-7" label="Inscreva-se já!" className="z-[1] hidden sm:block" />
        </div>
      
    </section>
  );
};

export default Ending;
