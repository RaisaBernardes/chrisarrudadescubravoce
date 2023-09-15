import { learning, text_section3 } from "../constants";
import styles, { layout }  from "../style";
import Cards from './Cards';


const Learning = () => {

  // Access properties of section's text
  const { title, emphasis, text } = text_section3;

  return (
    <section id="learning" className={`${styles.paddingY} flex-col relative`}>
      
      {/*right gradient*/}
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full purple__gradient"/> */}

      {/*Left text*/}
      <div className={layout.sectionInfo}>
        <h1 className={styles.heading2}>{title} <br className="sm:block hidden"/>{emphasis}</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{text}</p>
      </div>

      {/*Cards*/}
      <div className="flex flex-wrap sm:justify-center justify-center w-full relative z-[1] mt-20">
        {learning.map((card) => (
          <Cards key={card.id} {... card}/>
        ))}
      </div>
    </section>
  )}

export default Learning