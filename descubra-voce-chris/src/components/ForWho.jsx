import { features, text_section2 } from '../constants'
import styles, { layout } from '../style';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[5px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} dimPurple`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
    <h4 className='font-poppins font-semi-bold text-white tex-[18px] leading-[23px] mb-1'>
      {title}
    </h4>
    <p className='font-poppins font-semi-bold text-dimWhite tex-[16px] leading-[24px] mb-1'>
      {content}
    </p>
  </div>
  </div>
)

const ForWho = () => {

  // Access properties of section's text
  const { title, text } = text_section2;

  return (
    <section id="features" className={layout.section}>
      
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} mt-10`}>{title}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{text}</p> 
    </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} /> //"..." spread all the features inside the object
        ))}
      </div>
    </section>
  )
}

export default ForWho
