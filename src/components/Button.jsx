import React from 'react';

function Button({ onClick, children, secondary }) {
  return (
    <button
      onClick={onClick}
      className={`w-auto h-[47px] px-[34px] py-2.5 rounded flex justify-center items-center transition-all duration-500 transform hover:scale-105 ${secondary ? 'bg-gray-500 text-white hover:bg-gray-700' : 'bg-gradient-to-r from-purple-900 to-blue-950 text-white hover:bg-gradient-to-l hover:from-blue-950 hover:to-purple-900'} `}
    >
      {children}
    </button>
  );
}

export default Button;
