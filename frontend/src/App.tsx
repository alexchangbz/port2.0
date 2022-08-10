import React from 'react';
import './App.css';
import Greetings from './components/Greetings/Greetings';
import Navigator from './components/Navigator/Navigator';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Greetings />
    </div>
  );
}

export default App;
