import styles, { layout } from "../style";
import { hero1 } from "../assets";
import CTA from "./CTA";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-semibold ss:text-[56px] text-[56px] text-white ss:leading-[120%] leading-[72.8px]">
          Descubra sua <span className="hero-text-gradient"> verdadeira identidade
          </span>{" "}
        </h1>
      </div>

      <h1 className="font-semibold ss:text-[56px] text-[56px] text-white ss:leading-[120%] leading-[72.8px] w-full">
        e revele o poder da <br className="sm:block hidden" />{" "} sua imagem
      </h1>
      <p className={`${styles.heading3} max-w-[540px] mt-8`}>
        Aprenda a técnica de análise facial comportamental e explore uma jornada
        fascinante de autodescoberta rumo à sua essência. Decifre os mistérios
        do seu rosto e construa uma marca pessoal magnética!
      </p>
      
       <CTA styles='mt-8'/>
     
      
    </div>

    {/*Right side*/}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={hero1}
        alt="hero1"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[80%] h-[80%] top-0 purple__gradient" />
    </div>
  </section>
);

export default Hero;
