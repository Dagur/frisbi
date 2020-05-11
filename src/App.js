import React from "react";
import logo from "./logo.svg";
import "./App.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const discs = ["Putter", "Midrange", "Driver", "Understable", "Overstable", "Wildcard"];
const throws = ["Backhand", "Forehand", "Roller", "Hyzer", "Anhyzer", "Wildcard"];

function App() {
  const [dice, setDice] = React.useState("");

  const roll = () => {
    setDice(`${discs[getRandomInt(6)]} ${throws[getRandomInt(6)]}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>{dice}</p>
        <button className="App-link" onClick={roll}>
          Kasta
        </button>
      </header>
    </div>
  );
}

export default App;
