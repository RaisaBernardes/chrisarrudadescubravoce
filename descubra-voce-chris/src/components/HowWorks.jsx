import { art_backside } from "../assets";
import { modules, text_section4 } from "../constants";
import styles, { layout } from "../style";

const ModulesContainer = ({ icon, title, content, index }) => (
  <div className="flex flex-row">
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} dimPurple mt-2`}
    >
      <img src={icon} alt="icon" className="w-[30%] h-[30%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 mt-5">
      <h4 className="text-lg font-medium leading-[1.2] text-white mt-2  ">
        {title}
      </h4>
      <p className="text-dimWhite text-base font-normal mt-2 leading-[1.2]">
        {content}
      </p>
    </div>
  </div>
);

const HowWorks = () => {
  const { title, text } = text_section4;

  return (
    <section id="modules" className={`flex md:flex-row flex-col py-16`}>
      <div className="flex flex-col sm:grid justify-items-start">
        <div className={`${layout.sectionInfo} flex-row`}>
          <h2 className={`${styles.heading2} mt-8`}>{title}</h2>  
          <p className={`${styles.paragraph} max-w-[530px] mt-5`}>
            {text}
          </p>
        </div>

        <div className="flex-col max-w-[530px] ">
          {modules.map((module, index) => (
            <ModulesContainer key={module.id} {...module} index={index} /> //"..." spread all the features inside the object
          ))}
        </div>
      </div>
      <div className={`hidden md:flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
    
        <img
        src={art_backside} 
        alt="arte lateral" 
        width={570} 
        height={522} 
        className="object-contain"/>
      </div>
    </section>
  );
};

export default HowWorks;
