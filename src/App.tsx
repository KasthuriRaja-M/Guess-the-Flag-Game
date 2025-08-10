import React, { useState, useEffect } from 'react';
import './App.css';
import FlagGame from './components/FlagGame';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Floating particles for visual effect */}
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <div className="floating-particle"></div>
      <FlagGame />
    </div>
  );
};

export default App; 