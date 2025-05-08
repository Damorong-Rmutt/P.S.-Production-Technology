import React, { useEffect, useState } from 'react';
import "../../styles.css";
import "./Banner.css";

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const images = [
    '/static/02.jpg',
    '/static/03.jpg',
    '/static/01.jpg',
    '/static/04.jpg',
    '/static/05.jpg',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="banner">
      <div className="slider-container">
        {images.map((src, index) => (
          <img key={index} src={src} className={index === current ? 'visible' : 'hidden'} alt={`slide-${index}`} />
        ))}
        <div className="slide-indicator">
          {images.map((_, index) => (
            <span key={index} className={`dot ${index === current ? 'active' : ''}`} onClick={() => setCurrent(index)}></span>
          ))}
        </div>
      </div>
    </div>
  );
}
