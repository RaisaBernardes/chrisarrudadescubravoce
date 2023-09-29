import React from 'react'
import styles, { layout }  from "../style";
import CTA from "./CTA";

/* title: Acesso ao Descubra Você*/
const Investment = () => {
  return (
   
    <section id="investment" className="flex-col relative mt-20 mb-20">
    <div className="flex justify-center items-center">
          <h1 className={`${styles.heading2} text-center`}>Acesso ao Descubra Você</h1>
    </div>




    <div class="flex justify-center items-center h-screen">
      <div class="flex space-x-10 justify-center items-center">
        <div class="border_card p-8 pr-16 pl-16 rounded-md shadow-md text-center">
          {/*Content for the left card*/}
          <div class="text-2xl font-semibold uppercase second_purple_gradient">VALOR PROMOCIONAL</div>
          <div class="mt-10 text-center">
            <div class="text-white text-xl font-normal line-through">De R$197,00 por</div>
            <div class="text-white text-4xl font-bold"><span class="text-xl font-normal">12x</span> R$9,68</div>
          </div>
          <div class="mt-10 text-center">
            <div class="text-white text-xl font-normal">Ou R$97,00 à vista</div>
          </div>
          
          {/*Button*/}
          <div className='flex justify-center'>
          <CTA styles='mt-8' label='Increva-se agora!'/>
          </div>

        </div>
        <div class="grid p-4 rounded-md shadow-md">
          {/*Content for the right card*/}
          <div class="text-left">
            <div class="text-[48px] font-normal leading-[62.4px] capitalize second_purple_gradient">7 Dias</div>
            <div class="font-lato text-[20.446px] uppercase leading-[26.58px] second_purple_gradient">DE GARANTIA INCONDICIONAL</div>
            
            <div class="mt-10 text-white">
              Caso, por algum motivo, achar que o conteúdo do curso não é adequado para o seu perfil, você pode entrar em contato conosco dentro de 7 dias e receberá o reembolso integral do seu investimento.
            </div>
          </div>

        </div>
      </div>
    </div>






  
  </section>

  )
}

export default Investment