import React from 'react';
import Button from './Button';
import Slider from './Slider';
import avatar1 from '../assets/Avatar-1.png';
import avatar2 from '../assets/Avatar-2.png';
import avatar3 from '../assets/Avatar-3.png';
import avatar4 from '../assets/Avatar-4.png';
import avatar5 from '../assets/Avatar.png';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white text-black py-20 px-4 mx-5 lg:mx-20 animate-fadeIn">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <div className="w-full lg:w-[525px] h-auto mb-4">
          <span className="text-purple-900 text-4xl lg:text-7xl font-bold leading-tight lg:leading-none block lg:inline">Restore</span>
          <span className="text-black text-4xl lg:text-7xl font-normal leading-tight lg:leading-none block lg:inline"> your photos in seconds</span>
        </div>
        <p className="text-[18px] lg:text-xl mb-8">Have old and blurry face photos? Let our AI restore them so those memories can live on.</p>
        <div className="flex space-x-4">
          <Button onClick={() => alert('Get Started clicked!')}>
            Get Started
          </Button>
          <Button secondary onClick={() => alert('Learn More clicked!')}>
            Learn More
          </Button>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex -space-x-2">
            <img className="w-10 h-10 rounded-full border-2 border-white" src={avatar1} alt="User 1" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src={avatar2} alt="User 2" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src={avatar3} alt="User 3" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src={avatar4} alt="User 4" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src={avatar5} alt="User 5" />
          </div>
          <span className="ml-4 text-gray-700 text-sm lg:text-lg">600k+ users</span>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Slider />
      </div>
    </div>
  );
}

export default Hero;
