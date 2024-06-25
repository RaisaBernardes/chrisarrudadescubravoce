import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type AnimationWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({ children, className, delay = 0 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.5,  // Longer duration for a slower effect
        delay, 
        ease: [0.23, 1, 0.32, 1]  // Mimicking Power4.easeOut
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
