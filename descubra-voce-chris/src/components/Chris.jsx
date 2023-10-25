import { chris_who } from "../assets";
import { text_chris } from "../constants";
import styles, { layout } from "../style";

const Chris = () => {
  // Access properties of section's text
  const { title, text } = text_chris;

  return (
    <section id="text_chris" className={layout.section}>
      {/*Left side*/}
      <div className={`${layout.sectionInfo} justify-center items-start`}>
        <h2 className={`${styles.heading2} mt-10 text-white`}>{title}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          {text}
        </p>
      </div>

      {/*Right side*/}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative hidden md:flex`}>
        <img
          src={chris_who}
          alt="chrisWho"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[80%] h-[80%] top-0 purple__gradient" />
      </div>
    </section>
  );
};

export default Chris;
