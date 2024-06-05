import React from 'react';

function Button({ onClick, children, secondary }) {
  return (
    <button
      onClick={onClick}
      className={`w-auto h-[47px] px-[34px] py-2.5 rounded shadow flex-col justify-start items-start gap-2.5 inline-flex transition duration-300 ${secondary ? 'bg-gray-500 text-white hover:bg-gray-700' : 'bg-gradient-to-r from-purple-900 to-blue-950 text-white hover:from-blue-950 hover:to-purple-900'} `}
    >
      {children}
    </button>
  );
}

export default Button;
