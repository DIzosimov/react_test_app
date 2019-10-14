import React from 'react';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Test App</h1>
      <label id="email">Email</label>
      <textarea className="email-text"></textarea>
      <button className="Submit" value="submit">Click Me</button>
    </>
  );
}

export default App;
