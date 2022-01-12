import "./Toggle.css";
import SunImg from "../../images/sun.png";
import MoonImg from "../../images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {
  
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div className="toggle">
      <img src={SunImg} className="toggleIcon"></img>
      <img src={MoonImg} className="toggleIcon"></img>
      <div 
        style={state.darkMode ? { right: 0 } : { left: 0 }} 
        className="toggleBtn" 
        onClick={() => {
          dispatch({type: "TOGGLE"})
        }} 
      />
    </div>
  );
}

export default Toggle;