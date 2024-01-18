import React from 'react'
import { useState, useEffect } from 'react'
import { Blurhash } from 'react-blurhash'

function ImageComponent({ src, alt, className }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    })

  return (
    <>
        {!imageLoaded && (
            <div style={{display: imageLoaded ? 'none' : 'inline'}}>
                <Blurhash
                    hash="T49GRAxc04ROe-9v04xW~AS}WV=_"
                    width={400}
                    height={600}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} 
                    />
            </div>
        )}
            <img    
            src={src}
            alt={alt}
            className={className}
            style={{display: !imageLoaded ? 'none' : 'inline'}}
        />
    </>
  )
}

export default ImageComponent