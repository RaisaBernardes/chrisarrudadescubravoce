import React from 'react'

const CTA = ({ styles }) => {
  return (
    <button type='button' 
    className={`py-4 px-6 bg-button rounded-[5px] font-lato font-medium text-[18px] text-white outline-none ${styles}`}>
      Inscreva-se agora!
    </button>
  )
}

export default CTA