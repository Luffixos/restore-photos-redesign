import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Button from './components/Button';
import './index.css';
import logoPic from './assets/logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="font-sans">
        <nav className="bg-white p-4 flex items-center justify-between mx-4 lg:mx-20 shadow-md relative">
          <img src={logoPic} className="h-10" alt="React logo" />
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-black hover:text-gray-900 transition duration-300">Home</Link>
            <Link to="/open-source" className="text-black hover:text-gray-400 transition duration-300">Open Source</Link>
            <Link to="/pricing" className="text-black hover:text-gray-400 transition duration-300">Pricing</Link>
          </div>
          <Button onClick={() => alert('Sign Up clicked!')}>Sign Up</Button>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-4 py-4">
              <Link to="/" className="text-black hover:text-gray-900 transition duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/open-source" className="text-black hover:text-gray-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Open Source</Link>
              <Link to="/pricing" className="text-black hover:text-gray-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            </div>
          )}
        </nav>
        <Hero />
      </div>
  );
}

export default App;
