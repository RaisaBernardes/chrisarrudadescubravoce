import { chris_who } from "../assets";
import { text_chris } from "../constants";
import styles, { layout } from "../style";
import ImageComponent from "./ImageComponent"

const Chris = () => {
  // Access properties of section's text
  const { title, text } = text_chris;

  return (
    <section id="text_chris" className={`flex sm:flex-row flex-col sm:items-center mt-20 md:mt-0` }>
      {/*Left side*/}
      <div className={`flex flex-1 flex-col`}>
        <h2 className={`${styles.heading2} mt-8 text-start text-white`}>{title}</h2>
        <p className={`${styles.paragraph} flex flex-1 justify-start items-start max-w-[530px] mt-8`}>
          {text}
        </p>
      </div>


      {/*Right side*/}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative hidden sm:flex`}>
      <ImageComponent 
          src={chris_who}
          alt="chrisWho"
          className="w-[100%] h-[100%] z-[5] -right-[60%] md:-right-[30%] object-scale-down min-w-[350px] "
        />
        <div className="absolute z-[0] w-[100%] h-[100%] top-0  who-photo-gradient" />
      </div>
    </section>
  );
};

export default Chris;
