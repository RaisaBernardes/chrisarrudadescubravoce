import styles, { layout } from "../style";
import { hero1, heromob} from "../assets";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CTA from "./CTA";
import CTA2 from "./CTA2";
import AnimationWrapper from '../ui/AnimationWrapper';

const Hero = () =>{

return (
  <div>
 <AnimationWrapper delay={0.6}>
  <section id="home" className={`flex flex-col md:flex-row mb-16 xxs:mb-0 xs:mb-20 lg:mb-40`}>
  
    <div className={`flex flex-col md:flex-row mb-16 xxs:mb-0 xs:mb-20 lg:mb-40`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pt-16 md:pt-0`}>

    <AnimationWrapper delay={0.8}>
      <div className="z-[2] flex-row justify-between items-center w-full sm:flex hidden md:pt-20">
        <h1 className="flex-1 font-semibold text-[48px] sm:text-[56px] text-white ss:leading-[120%] leading-[72.8px]">
          Decifre o que os <span className="second_purple_gradient text-[48px] sm:text-[56px] font-semibold whitespace-nowrap">traços do seu rosto
          </span>{" "}
        </h1>
      </div>
      <h1 className="font-semibold text-[48px] sm:text-[56px] text-white ss:leading-[120%] leading-[72.8px] w-full sm:flex hidden">
        revelam sobre você!<br className="block md:hidden" />
      </h1>
      </AnimationWrapper>

      <AnimationWrapper delay={1.0}>
      <p className={`${styles.heading3} max-w-[540px] mt-8 z-[2] `}>
      <span className="hidden sm:flex">Embarque em uma jornada única para construir uma imagem facial que transmita quem você realmente é enquanto experimenta o verdadeiro autoconhecimento.</span>
      <span className="hidden sm:flex"></span>
      </p>
      
      <CTA styles='mt-8' label='Inscreva-se agora!'/>
        <p className={`${styles.paragraph_small} max-w-10px mt-8 hidden md:flex`}>
        Compra 100% segura <br className="hidden md:flex"/>Garantia incondicional de 7 dias
        </p>
        </AnimationWrapper>
    </div>

    <div className={` flex-1 md:flex-row ${styles.flexCenter} md:my-0 my-10 relative hidden md:block `}>
        <LazyLoadImage src={hero1} alt='hero' className='w-full h-auto relative z-[5] hidden md:block min-w-[500px]'/>
          <div className='absolute z-[0] w-[50%] h-[55%] top-0 purple__gradient' />
          <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-10 white__gradient top-0 ' />
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 purple__gradient top-0 ' />
    </div>
    </div>
    

    {/* mobile section */}
      <div className="sm:hidden flex flex-col h-screen w-full relative mt-0 xxxs:mb-40 xxs:mb-8 xs:mb-60">
      <AnimationWrapper delay={0.4}>
        <div className="flex-1 md:hidden relative z-[10]">
        <LazyLoadImage
          src={hero1}
          alt="hero1"
          className="flex-1 md:hidden absolute z-[10] w-[100%] object-scale-down min-w-[350px]"
        />
        </div>
        </AnimationWrapper>
      </div>
        
          <div className="flex sm:hidden absolute z-[0] w-[100%] h-[100%] top-0 purple__gradient" />
       

        <div className="z-[20] mt-80 inset-x-0 space-y-8 pt-40 px-6 sm:hidden absolute xs:pt-10 ">
        <AnimationWrapper delay={1.0}>
          <h1 className="font-semibold text-[36px] sm:text-[56px] text-white leading-[130%] xs:mt-60">
          Decifre o que os <span className="second_purple_gradient text-[36px] sm:text-[56px] font-bold whitespace-nowrap">traços do seu rosto</span> revelam sobre você!
          </h1>
          <p className={`${styles.heading3} max-w-[540px] mt-8 z-[2]`}>
          Embarque em uma jornada única para construir uma imagem facial que transmita quem você realmente é enquanto experimenta o verdadeiro autoconhecimento.
          </p>
          <CTA2 styles='mt-8' label='Acessar agora'/>
          </AnimationWrapper>
        </div>
        
      {/* end mobile section */}
   
  </section>
  </AnimationWrapper>
  </div>
);
}

export default Hero;