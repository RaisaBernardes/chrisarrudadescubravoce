import React from 'react'

const CTA = ({ styles, label }) => {
  return (
    <a href="https://pay.hotmart.com/V82831819V?bid=1698780561927">
      <button 
      type='button' 
      className={`py-4 px-6 bg-button rounded-[5px] font-lato font-medium text-[18px] text-white outline-none ${styles} w-full ss:w-auto hidden sm:block`}>
        {label}
      </button>
    </a>
  )
}

export default CTA