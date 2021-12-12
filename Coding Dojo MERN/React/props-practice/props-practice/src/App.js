import './App.css';
import PersonCard from './components/PersonCard';
import React, { useState } from 'react';

function App() {

  
  return (
    <div className="App">
      <PersonCard firstName={ "Jane" } lastName={ "Doe" } 
      age={ 45 } hairColor={ "Black" }/> 
      <PersonCard firstName={ "John" } lastName={ "Smith" } 
      age={ 88 } hairColor={ "Brown" }/> 
      <PersonCard firstName={ "Millard" } lastName={ "Fillmore" } 
      age={ 50 } hairColor={ "Brown" }/> 
      <PersonCard firstName={ "Maria" } lastName={ "Smith" } 
      age={ 62 } hairColor={ "Brown" }/> 
      {/* this line is to import PersonCard component to App.js */}
    </div>
  );
}

export default App;
