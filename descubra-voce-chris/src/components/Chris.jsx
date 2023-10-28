import { chris_who } from "../assets";
import { text_chris } from "../constants";
import styles, { layout } from "../style";

const Chris = () => {
  // Access properties of section's text
  const { title, text } = text_chris;

  return (
    <section id="text_chris" className={`flex md:flex-row flex-col md:items-center mt-20 md:mt-0` }>
      {/*Left side*/}
      <div className={`flex flex-1 flex-col`}>
        <h2 className={`${styles.heading2} mt-8 text-start text-white`}>{title}</h2>
        <p className={`${styles.paragraph} flex flex-1 justify-start items-start max-w-[530px] mt-8`}>
          {text}
        </p>
      </div>

      {/*Right side*/}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative hidden md:block`}>
        <img
          src={chris_who}
          alt="chrisWho"
          className="w-[100%] h-[100%] relative z-[5] -right-[30%] "
        />
        <div className="absolute z-[0] w-[100%] h-[100%] top-0 -right-[20%] who-photo-gradient" />
      </div>
    </section>
  );
};

export default Chris;
