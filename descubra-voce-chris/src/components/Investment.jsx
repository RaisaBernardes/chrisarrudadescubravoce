import React from "react";
import styles, { layout } from "../style";
import CTA2 from "./CTA2";
import CTA from "./CTA";

/* title: Acesso ao Descubra Você*/
const Investment = () => {
  return (
    <section id="investment" className={`flex flex-col mt-20 mb-20`}>
      <div className={`flex justify-center items-center `}>
        <h1 className={`${styles.heading2} text-center w-[300px] sm:w-full`}>
          Acesso ao Descubra Você
        </h1>
      </div>

      <div className={`flex flex-col justify-center items-center mt-20`}>
        <div className={`flex sm:flex-row flex-col sm:space-x-16  ${styles.flexCenter}`}>
          <div className={`border_card pt-8 pb-8 px-8 sm:px-16 rounded-md shadow-md text-center`}>
            {/*Content for the left card*/}
            <div className={`text-2xl font-normal uppercase second_purple_gradient`}>
              VALOR PROMOCIONAL
            </div>
            <div className={`mt-10 text-center`}>
              <div className="text-white text-xl font-normal line-through">
                De R$197,00 por
              </div>
              <div className="text-white text-4xl font-bold">
                <span className='text-xl font-normal'>12x</span> R$9,68
              </div>
            </div>
            <div className="mt-10 text-center">
              <div className="text-white text-xl font-normal">
                Ou R$97,00 à vista
              </div>
            </div>

            {/*Button*/}
            <div className="flex justify-center">
              <CTA styles="mt-8" label="Inscreva-se agora!" />
              <CTA2 styles="mt-8" label="Inscreva-se agora!" className="z-[1] hidden sm:block" />
            </div>
          </div>
          
          
          <div className={`flex-1 flex md:p-4 rounded-md shadow-md`}>
            {/*Content for the right card*/}
            <div className="justify-start text-center sm:text-left flex-col">
              
              <div className="text-[45px] sm:text-[48px] font-normal capitalize second_purple_gradient mt-10">
                7 Dias
              </div>
              <div className="w-80 sm:w-80 font-lato text-[18px] sm:text-[20px] uppercase leading-[26.58px] second_purple_gradient">
                DE GARANTIA INCONDICIONAL
              </div>

              <div className="flex flex-1 mt-10 mb-20 text-dimWhite w-80">
                Caso, por algum motivo, achar que o conteúdo do curso não é
                adequado <br/> para o seu perfil, você pode entrar em contato conosco
                dentro de 7 dias e <br/> receberá o reembolso integral do seu
                investimento.
              </div>
            
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
