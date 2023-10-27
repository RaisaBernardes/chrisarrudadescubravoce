import React from "react";
import styles, { layout } from "../style";
import CTA from "./CTA";

/* title: Acesso ao Descubra Você*/
const Investment = () => {
  return (
    <section id="investment" className={`flex flex-col sm:mt-20 sm:mb-20`}>
      <div className={`flex justify-center items-center `}>
        <h1 className={`${styles.heading2} text-center w-[300px] sm:w-full`}>
          Acesso ao Descubra Você
        </h1>
      </div>

      <div className={`flex flex-col justify-center items-center h-screen mt-40 sm:mt-0 `}>
        <div className={`flex sm:flex-row flex-col space-x-10 ${styles.flexCenter}`}>
          <div className={`border_card p-8 pr:8 pl:8 lg:pr-16 lg:pl-16 rounded-md shadow-md text-center`}>
            {/*Content for the left card*/}
            <div className={`text-2xl font-semibold uppercase second_purple_gradient`}>
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
              <CTA styles="mt-8" label="Increva-se agora!" />
            </div>
          </div>
          
          
          <div className={`flex-1 flex ${styles.flexCenter} p-4 rounded-md shadow-md`}>
            {/*Content for the right card*/}
            <div className="text-left w-80">
              
              <div className="text-[48px] font-normal leading-[62.4px] capitalize second_purple_gradient mt-10">
                7 Dias
              </div>
              <div className="font-lato text-[20.446px] uppercase leading-[26.58px] second_purple_gradient">
                DE GARANTIA INCONDICIONAL
              </div>

              <div className="mt-10 mb-16 text-white">
                Caso, por algum motivo, achar que o conteúdo do curso não é
                adequado para o seu perfil, você pode entrar em contato conosco
                dentro de 7 dias e receberá o reembolso integral do seu
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
