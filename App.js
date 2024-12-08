import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
   

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <center>
      <h1>This is my first website 
        <pre>   welcome to my page  </pre>
      </h1>
      </center>
      <center> 
      <button onClick={toggleDarkMode}>CLICK HERE</button>
      </center>
    </div>
  );
  
}

export default App;
