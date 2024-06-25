import { faq_texts } from '../constants'
import styles, { layout } from '../style';
import React from "react";
import { Accordion } from 'flowbite-react';
import AnimationWrapper from '../ui/AnimationWrapper';
 
const Accordions = ({title, answer}) => {
  
  return (
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title className='faq mt-4 lg:mt-6 font-lato'>
              {title}
            </Accordion.Title >
            <Accordion.Content className='bg-mediumPurple'>
              <p className="mb-2 text-whit">
                <p>
                  {answer}
                </p>
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion >
  
  );
}



const Faq = () => {
 
  return(
    <AnimationWrapper delay={0.2}>
      <section id="faq_texts" className="flex-col justify-center mt-20 mb-20">
        
        <div className="flex justify-center items-center">
          <h2 className={`${styles.heading2} mt-10 mb-10 flex justify-center items-center `}>Perguntas Frequentes</h2>
        </div>

        <div className={`flex-col text-white`}>
          {faq_texts.map((faq, index) => (
            <Accordions key={faq.id} {...faq} index={index} /> //"..." spread all the features inside the object
          ))}
        </div>
      </section>
    </AnimationWrapper>

  )
}


export default Faq;

