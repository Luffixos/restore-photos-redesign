import React from 'react';
import Button from './Button';
import heroPic from '../assets/pic.png';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white text-black py-20 px-4 mx-5 lg:mx-20 animate-fadeIn">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <div className="w-full lg:w-[700px] h-auto mb-4">
          <span className="text-purple-900 text-4xl lg:text-7xl font-bold leading-tight lg:leading-none">Restore</span>
          <span className="text-black text-4xl lg:text-7xl font-normal leading-tight lg:leading-none"> your photos in seconds</span>
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
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 1" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 2" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 3" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 4" />
            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://via.placeholder.com/40" alt="User 5" />
          </div>
          <span className="ml-4 text-gray-700 text-sm lg:text-lg">600k+ users</span>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={heroPic} alt="Hero" className="w-full h-auto animate-fadeIn delay-300" />
      </div>
    </div>
  );
}

export default Hero;
