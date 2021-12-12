import './App.css';
import PersonCard from './components/PersonCard';
import React, { useState } from 'react';

function App() {

  
  return (
    <div className="App">
      <PersonCard firstName={ "Jane" } lastName={ "Doe" } 
      age={ "Age: 45" } hairColor={ "Hair Color: Black" }/> 
      <PersonCard firstName={ "John" } lastName={ "Smith" } 
      age={ "Age: 88" } hairColor={ "Hair Color: Brown" }/> 
      <PersonCard firstName={ "Millard" } lastName={ "Fillmore" } 
      age={ "Age: 50" } hairColor={ "Hair Color: Brown" }/> 
      <PersonCard firstName={ "Maria" } lastName={ "Smith" } 
      age={ "Age: 62" } hairColor={ "Hair Color: Brown" }/> 
      {/* this line is to import PersonCard component to App.js */}
    </div>
  );
}

export default App;
