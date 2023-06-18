import React from 'react';
import './App.css';

import InputFood from './components/InputFood';
import ListFood from './components/ListFood';

function App() {
  return (
    <div className='container'>
      <InputFood />
      <ListFood />
    </div>
  );
}

export default App;
