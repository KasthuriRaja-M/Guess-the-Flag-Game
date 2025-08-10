import React, { useState, useEffect } from 'react';
import './App.css';
import FlagGame from './components/FlagGame';

const App: React.FC = () => {
  return (
    <div className="App">
      <FlagGame />
    </div>
  );
};

export default App; 