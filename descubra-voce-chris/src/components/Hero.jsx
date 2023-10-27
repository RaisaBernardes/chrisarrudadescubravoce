import styles, { layout } from "../style";
import { hero1 } from "../assets";
import CTA from "./CTA";

const Hero = () => (
  <section id="home" className={`flex md:flex-row  ${styles.paddingY} sm:mt-20 sm:mb-20`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       <img
        src={hero1}
        alt="hero1"
        className="xs:flex  absolute z-[1] w-[100%] h-[100%] -right-[20%] object-scale-down"
      />
      <div className="xs:flex  absolute z-[0] w-[40%] h-[30%] top-0 -right-[20%] purple__gradient" />
   

      <div className="z-[2] flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-semibold text-[48px] sm:text-[56px] text-white ss:leading-[120%] leading-[72.8px]">
          Descubra sua <span className="hero-text-gradient text-[48px] sm:text-[56px]"> verdadeira identidade
          </span>{" "}
        </h1>
      </div>

      <h1 className="font-semibold text-[48px] sm:text-[56px] text-white ss:leading-[120%] leading-[72.8px] w-full">
        e liberte o poder da <br className="sm:block hidden" />{" "} sua imagem
      </h1>
      <p className={`${styles.heading3} max-w-[540px] mt-8`}>
      Domine a análise facial comportamental e embarque 
      em uma jornada fascinante de autodescoberta. 
      Descubra os segredos presentes em seu rosto e 
      crie uma marca pessoal magnética!

      </p>
      
       <CTA styles='mt-8' label='Eu quero ser magnética!'/>
       <p className={`${styles.paragraph_small} max-w-10px] mt-8`}>
       Compra 100% segura <br/>Garantia incondicional de 7 dias
       </p>
    </div>

    {/*Right side*/}
    <div className={`flex-1 ${styles.flexCenter} my-0 md:my-10 relative`}>
     {/* <img
        src={hero1}
        alt="hero1"
        className="flex md:hidden w-[100%] h-[100%] relative z-[5]"
      />  */}


      <div className="absolute z-[0] w-[80%] h-[80%] top-0 purple__gradient" />
    </div>
  </section>
);

export default Hero;
