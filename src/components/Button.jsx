import React from 'react';

function Button({ onClick, children, secondary }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded shadow justify-center items-center transition duration-300 ${secondary ? 'bg-gray-500 text-white hover:bg-gray-700' : 'bg-blue-500 text-white hover:bg-blue-700'} `}
    >
      {children}
    </button>
  );
}

export default Button;
