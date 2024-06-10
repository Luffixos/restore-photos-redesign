import React, { useState } from 'react';
import beforePic from '../assets/before.png'; // Placeholder before image
import afterPic from '../assets/after.png'; // Placeholder after image
import sliderPic from '../assets/slider.png'; // Placeholder slider image

function Slider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - left) / width) * 100;
    setSliderPosition(position);
  };

  return (
    <div className="relative w-[550px] h-[550px] overflow-hidden" onMouseMove={handleMouseMove}>
      <img src={beforePic} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img src={afterPic} alt="After" className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 h-full flex items-center" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
        <img src={sliderPic} alt="Slider" className="w-8 h-8 cursor-ew-resize" />
      </div>
    </div>
  );
}

export default Slider;
