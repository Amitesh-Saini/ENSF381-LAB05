import React from 'react';

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

export default App;
