import React, { useEffect, useRef, useState } from 'react';
import "../../styles.css";
import "./Brand_Slider.css"

export default function BrandSlider() {
  const sliderRef = useRef(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    let autoScrollInterval = setInterval(() => {
      if (!autoScrollEnabled) return;
      const scrollAmount = 210;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft + scrollAmount >= maxScroll - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(autoScrollInterval);
  }, [autoScrollEnabled]);

  const handleMouseDown = (e) => {
    setAutoScrollEnabled(false);
    const slider = sliderRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftInit = slider.scrollLeft;
    slider.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    slider.isDown = false;
    slider.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 2;
    slider.scrollLeft = slider.scrollLeftInit - walk;
  };

  return (
    <section className="brand-step-scroll" ref={sliderRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp}>
      <div className="brand-track">
        {[
          'DAHUA_LOGO.png', 'HIKVISION_LOGO.png', 'IMOU_LOGO.png', 'CYBER_POWER_LOGO.png',
          'HILOOK_LOGO.png', 'EZIVZ_LOGO.png', 'APOLLO_LOGO.png', 'TP_LINK_LOGO.png',
          'RAYEE_LOGO.png', 'RUIJIE_LOGO.png', 'WD_LOGO.png', 'SEAGATE_LOGO.png',
          '19_GERMANY_LOGO.png', 'LINK_LOGO.png', 'UNV_LOGO.png', 'ZKTECO_LOGO.png',
          'GLINK_LOGO.png', 'ZIRCON_LOGO.png'
        ].map((logo, index) => (
          <img key={index} src={`/static/${logo}`} alt={`brand-${index}`} />
        ))}
      </div>
    </section>
  );
}