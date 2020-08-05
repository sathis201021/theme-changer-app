import React from 'react';
import './App.css';
import ThemePicker from './comps/ThemePicker'
import ThemeContextProvider from './comps/context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App" style={{ backgroundColor: "color" }}>
        <ThemePicker />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
