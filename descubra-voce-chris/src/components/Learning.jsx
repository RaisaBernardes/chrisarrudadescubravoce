import { learning, text_section3 } from "../constants";
import styles, { layout }  from "../style";
import Cards from './Cards';
import AnimationWrapper from '../ui/AnimationWrapper';

const Learning = () => {

  // Access properties of section's text
  const { title, text } = text_section3;

  return (
    <AnimationWrapper delay={0.2}>
    <section id="learning" className={`flex flex-col xs:mt-20 xs:mb-20 mt-20`}>
      
      {/*right gradient*/}
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full purple__gradient"/> */}

      {/*Text*/}
      <div className={`flex-1 flex-col justify-center items-start sm:items-center sm:justify-center ` }>
        <h2 className={`${styles.heading2} mt-10`}>{title}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{text}</p> 
      </div>

      {/*Cards*/}
      
      <div className="flex items-center justify-center">
        <div className=" mx-auto grid ss:grid-cols-2 md:grid-cols-4 mt-10 gap-8">
          {learning.map((card) => (
            <Cards 
            key={card.id} {... card}
            />
          ))}
        </div>
      </div>

    </section>
    </AnimationWrapper>
  )}

export default Learning