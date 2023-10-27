import React from 'react'
import styles, { layout }  from "../style";

  /* title: Desfrute de três benefícios em um único curso.*/
  /* paragraph: 1. AUTOCONHECIMENTO 2. MARCA PESSOAL 3. BELEZA*/

const Benefits = () => {
  
  return (

  <section id="benefits" className="flex flex-col relative mt-20 mb-20">
   <div className='flex flex-col justify-center items-center mt-20'>
      <div className="flex justify-center items-center">
            <h1 className={`${styles.heading2} text-center`}>Desfrute de três benefícios <br/>em um único curso</h1>
      </div>
      <div className='grid justify-items-start gap-y-8 sm:flex flex-row  items-center sm:space-x-12 mt-20'>
        <h3 className="text-2xl font-normal font-light leading-[1.3] uppercase text-left uppercase second_purple_gradient"><span className='md:text-5xl font-normal font-light leading-[1.3] uppercase second_purple_gradient'>1.</span> autoconhecimento</h3>
        <h3 className="text-2xl font-normal font-light leading-[1.3] uppercase text-left uppercase second_purple_gradient"><span className='md:text-5xl font-normal font-light leading-[1.3] uppercase second_purple_gradient'>2.</span> marca pessoal</h3>
        <h3 className="text-2xl font-normal font-light leading-[1.3] uppercase text-left uppercase second_purple_gradient"><span className='md:text-5xl font-normal font-light leading-[1.3] uppercase second_purple_gradient'>3.</span> beleza</h3>
      </div>
    </div>    
  </section>



  )
}

export default Benefits