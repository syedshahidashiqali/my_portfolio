import "./Toggle.css";
import SunImg from "../../images/sun.png";
import MoonImg from "../../images/moon.png";
import { useState } from "react";

function Toggle() {
  
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="toggle">
      <img src={SunImg} className="toggleIcon"></img>
      <img src={MoonImg} className="toggleIcon"></img>
      <div 
        style={darkMode ? { right: 0 } : { left: 0 }} 
        className="toggleBtn" 
        onClick={() => setDarkMode(!darkMode)} 
      />
    </div>
  );
}

export default Toggle;