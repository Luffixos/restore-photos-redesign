import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Button from './components/Button';
import './index.css';
import logoPic from './assets/logo.png'

function App() {
  return (
    
      <div className="font-sans">
        <nav className="bg-white p-4 flex items-center justify-between mx-4 lg:mx-20 shadow-md">
          <img src={logoPic} className="h-10" alt="React logo" />
          <div className="flex space-x-4">
            <Link to="/" className="text-black hover:text-gray-900 transition duration-300">Home</Link>
            <Link to="/open-source" className="text-black hover:text-gray-400 transition duration-300">Open Source</Link>
            <Link to="/pricing" className="text-black hover:text-gray-400 transition duration-300">Pricing</Link>
          </div>
          <Button onClick={() => alert('Sign Up clicked!')}>Sign Up</Button>
        </nav>
        <Hero />
      </div>
    
  );
}

export default App;
