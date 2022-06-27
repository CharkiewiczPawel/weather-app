import React from 'react';
import CurrentDate from './CurrentDate';
import CitySelection from './CitySelection';

import './App.css';

const App: React.FC=()=>{
  return(
    <div className='App'>
      <CurrentDate/>
      <CitySelection/>
    </div>
  )
}

export default App;
