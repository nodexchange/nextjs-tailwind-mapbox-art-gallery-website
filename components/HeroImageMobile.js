import React from 'react'
import Image from 'next/image';

function HeroImageMobile() {
  return (
    <div className="sm:hidden">
        <Image
          src="/mobile/image-hero.jpg"
          width={375}
          height={240}
          alt="hero image mobile"
          priority="true"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
  )
}

export default HeroImageMobile