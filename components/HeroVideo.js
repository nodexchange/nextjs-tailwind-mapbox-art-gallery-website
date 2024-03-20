import React, { useEffect, useRef } from 'react';

export default function VideoHero() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <div className="h-[730px] w-auto">
      <video ref={videoRef} width="450" loop autoPlay id="hero-video">
        <source type="video/mp4" src="/promo.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
