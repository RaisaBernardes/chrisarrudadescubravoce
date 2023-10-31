import styles, { layout } from "../style";
import { hero1 } from "../assets";
import CTA from "./CTA";
import { motion }  from 'framer-motion'
import CTA2 from "./CTA2";

const Hero = () =>{

return (
  <section id="home" className={`flex flex-col md:flex-row mb-16 xxs:mb-0 sm:mb-20 sm:mt-20`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       <img
        src={hero1}
        alt="hero1"
        className="hidden md:flex absolute z-[1] w-[150%] h-[150%] -right-[20%] object-scale-down "
      />
      <div className="xs:flex absolute z-[0] w-[50%] h-[50%] top-0 md:-right-[20%] purple__gradient" />
   

      <motion.div  
      className="z-[2] flex-row justify-between items-center w-full sm:flex hidden">
        <h1 className="flex-1 font-semibold text-[48px] sm:text-[56px] text-white ss:leading-[120%] leading-[72.8px]">
          Descubra sua <span className="second_purple_gradient text-[48px] sm:text-[56px] sm:flex hidden"> verdadeira identidade
          </span>{" "}
        </h1>
      </motion.div>

      <h1 className="font-semibold text-[48px] sm:text-[56px] text-white ss:leading-[120%] leading-[72.8px] w-full sm:flex hidden">
        e liberte o poder da <br className="sm:block hidden" />{" "} sua imagem
      </h1>

      {/* mobile section */}
      <div className="sm:hidden flex h-screen w-full relative mt-0 xs:mb-16 ss:mb-24">
        <img
          src={hero1}
          alt="hero1"
          className="flex-1 md:hidden absolute z-[10] w-[100%] object-scale-down min-w-[350px]"
        />
        <div className="flex absolute z-[0] w-[100%] h-[100%] top-0 purple__gradient md:hidden" />
       
        <div className="absolute inset-x-0 bottom-0 h-[60%] xxs:h-[55%] xs:h-[45%] ss:h-[30%] z-[20]">
          <h1 className="flex-1 font-semibold text-[36px] sm:text-[56px] text-white text-left leading-[130%] ">
          Descubra sua verdadeira identidade e liberte o poder da sua imagem
          </h1>
          <p className={`${styles.heading3} max-w-[540px] mt-8 z-[2]`}>
            Descubra os segredos presentes em seu rosto e 
            crie uma marca pessoal magnética!
          </p>
          <CTA2 styles='mt-8' label='Eu quero ser magnética!'/>
        </div>
      </div>
      {/* end mobile section */}

      <p className={`${styles.heading3} max-w-[540px] mt-8 z-[2] `}>
      <span className="hidden sm:flex">Domine a análise facial comportamental e embarque 
      em uma jornada fascinante de autodescoberta.</span>
      <span className="hidden sm:flex">Descubra os segredos presentes em seu rosto e 
      crie uma marca pessoal magnética!</span>
      </p>
      
    
      <CTA styles='mt-8' label='Eu quero ser magnética!'/>
        <p className={`${styles.paragraph_small} max-w-10px] mt-8 hidden md:flex`}>
        Compra 100% segura <br className="hidden md:flex"/>Garantia incondicional de 7 dias
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
}

export default Hero;