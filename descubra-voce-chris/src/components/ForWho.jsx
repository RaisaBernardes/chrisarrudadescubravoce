import { features, text_section2 } from '../constants'
import styles, { layout } from '../style';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[5px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card md:h-[200px] lg:h-[180px] items-center z-[20]`}>
    <div className='flex items-start'>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} dimPurple`}>
        <img src={icon} alt='icon' className='w-[40%] h-[40%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-2'>
        <h4 className='font-semibold text-white text-[18px] leading-[24px] mb-2 max-w-[400px]'>
          {title}
        </h4>
        <p className='font-normal text-dimWhite text-[16px] leading-[24px] mb-1 max-w-[400px]'>
          {content}
        </p>
    </div>
  </div>
  </div>
)

const ForWho = () => {

  // Access properties of section's text
  const { title, text } = text_section2;

  return (
    <section id="features" className={`flex-1 flex-row items-start sm:mb-20 z-[20] mt-40 xxs:mt-8 xs:mt-16 pt-20 lg:pt-0`}>
      <div className="flex flex-col md:flex-row md:justify-items-start ">
        <div className={`flex-col flex-1`}>
          <h2 className={`${styles.heading2} flex flex-1`}>{title}</h2>
          <p className={`${styles.paragraph} flex flex-1 mt-5 max-w-[530px]`}>{text}</p> 
        </div>
      
        <div className={`flex mt-8 md:mt-0 flex-col max-w-[530px]`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} /> //"..." spread all the features inside the object
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForWho
