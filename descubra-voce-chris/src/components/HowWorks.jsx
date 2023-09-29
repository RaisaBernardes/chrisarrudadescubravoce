import { modules, text_section4 } from "../constants";
import styles, { layout }  from "../style";


const ModulesContainer = ({icon, title, content, index}) => (
  <div className="w-1/2 flex flex-row">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} dimPurple `}>
      <img src={icon} alt='icon' className='w-[30%] h-[30%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3 mt-5'>
      <h4 className='text-lg font-semibold font-normal leading-[1.2] text-white'>
        {title}
      </h4>
      <p className='text-dimWhite text-base font-normal leading-[1.2]'>
        {content}
      </p>
    </div>
  </div>
)


const HowWorks = () => {

  const { title, text } = text_section4;


  return (
    <section id="modules" className="mt-20 mb-20">
    <div className="grid justify-items-start">
      <div className={`${layout.sectionInfo} flex-row`} >
        <h2 className={`${styles.heading2} mt-10 text-white`}>{title}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>{text}</p> 
      </div>

      <div className="flex flex-col mt-20">
        {modules.map((module, index) => (
          <ModulesContainer key={module.id} {...module} index={index} /> //"..." spread all the features inside the object
        ))}
      </div>
      </div>  
    </section>
  )
}

export default HowWorks