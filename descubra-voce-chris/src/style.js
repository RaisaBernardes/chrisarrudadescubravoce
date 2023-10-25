const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-lato font-semibold text-[36px] text-white w-[500px]",
    heading3: "font-lato font-light xs:text-[20px] text-[24px] text-white xs:leading-[150%] leading-[150%] w-full",
    paragraph: "font-lato font-normal text-dimWhite text-[16px] leading-[28.8px]",
    paragraph_small: "font-lato font-normal text-dimWhite uppercase text-[12px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-8 py-16",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col `,
  };
  
  export default styles;