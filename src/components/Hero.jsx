import React from 'react';
import Button from './Button';
import heroPic from '../assets/pic.png';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white text-black py-20 px-4 mx-5 lg:mx-20">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
      <div className="w-[700.07px] h-[156px] mb-4"><span className="text-purple-900 text-7xl font-bold font-['Plus Jakarta Sans'] leading-[78.84px]">Restore</span><span className="text-black text-7xl font-normal font-['Plus Jakarta Sans'] leading-[78.84px]"> your photos in seconds</span></div>
        <p className="text-lg lg:text-xl mb-8 animate-fadeIn delay-150">Have old and blurry face photos? Let our AI restore them so those memories can live on. </p>
        <div className="flex space-x-4">
          <Button onClick={() => alert('Get Started clicked!')}>
            Get Started
          </Button>
          <Button secondary onClick={() => alert('Learn More clicked!')}>
            Learn More
          </Button>
        </div>
      </div>
      <div className="lg:w-[600px]">
        <img src={heroPic} alt="Hero" className="w-full h-auto animate-fadeIn delay-300" />
      </div>
    </div>
  );
}

export default Hero;
