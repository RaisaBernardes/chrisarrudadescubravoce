import React from 'react'

const CTA = ({ styles, label }) => {
  return (
    <button type='button' 
    className={`py-4 px-6 bg-button rounded-[5px] font-lato font-medium text-[18px] text-white outline-none ${styles} w-full ss:w-auto hidden sm:block`}>
      {label}
    </button>
  )
}

export default CTA