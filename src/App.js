import logo from './logo.svg';
import './App.css';

import Buttons from './components/button'

import React, { useState, useEffect, useRef } from 'react';

function App() {
  return (
    <div className="App">
      <Buttons position={'left'}/>
      <Buttons position={'right'}/>
    </div>
  );
}

export default App;
