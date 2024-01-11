import React from 'react'
import { motion } from 'framer-motion'

const CTA = ({ styles, label }) => {
  return (
    <a href="https://pay.hotmart.com/V82831819V?bid=1698780561927">
      <motion.button 
      whileHover={{
        backgroundColor: '#A317E1'
      }}

      type='button' 
      className={`py-4 px-6 bg-button rounded-[5px] font-lato font-medium text-[18px] text-white outline-none ${styles} w-full ss:w-auto hidden sm:block`}>
        {label}
      </motion.button>
    </a>
  
  )
}

export default CTA