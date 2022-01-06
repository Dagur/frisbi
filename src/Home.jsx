import React, { useEffect } from "react";
import { useTranslate } from "react-translate";
import "./App.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const discs = [
  "Putter",
  "Midrange",
  "Driver",
  "Stable",
  "Understable",
  "Overstable",
  "Wildcard"
];
const throws = [
  "Backhand",
  "Forehand",
  "Roller",
  "Hyzer",
  "Anhyzer",
  "Wildcard"
];

function Home(translations) {
  const t = useTranslate("App");
  const [disc, setDisc] = React.useState("");
  const [yeet, setYeet] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    setDisc(discs[getRandomInt(discs.length)]);
    setYeet(throws[getRandomInt(throws.length)]);
  }, []);

  const roll = () => {
    setDisc(discs[getRandomInt(discs.length)]);
    setYeet(throws[getRandomInt(throws.length)]);
    setCounter(counter + 1);
  };

  const odd = Boolean(counter % 2);

  return (
    <>
      <div className="app-main">
        <p className={`throw ${odd ? "odd" : ""}`}>{t(yeet)}</p>
        <p className={`throw ${odd ? "" : "odd"}`}>{t(disc)}</p>
      </div>
      <button className="throw-button" onClick={roll}>
        {t("Throw")}
      </button>
    </>
  );
}

export default Home;
