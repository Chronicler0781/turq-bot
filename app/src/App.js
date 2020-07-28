import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Thread from './components/Thread';

function App() {
  return (
    <div className="App">
	    <div className="App-content">
        <Profile />
        <Thread/>
	    </div>
    </div>
  );
}

export default App;
