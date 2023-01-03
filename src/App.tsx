import React from 'react';
import { Userboard } from './Components/userboard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>User Shower</h1>
      </header>
      <main className="App__main">
        <Userboard></Userboard>
      </main>
    </div>
  );
}

export default App;
