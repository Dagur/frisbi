import React from "react";
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
  "Wildcard",
];
const throws = [
  "Backhand",
  "Forehand",
  "Roller",
  "Hyzer",
  "Anhyzer",
  "Wildcard",
];

function Home({ lang }) {
  const t = useTranslate("App");
  const isEn = lang === "en";
  const [disc, setDisc] = React.useState(discs[getRandomInt(discs.length)]);
  const [yeet, setYeet] = React.useState(throws[getRandomInt(throws.length)]);
  const [counter, setCounter] = React.useState(0);
  const [showEn, setShowEn] = React.useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  const roll = () => {
    setShowEn(false);
    setDisc(discs[getRandomInt(discs.length)]);
    setYeet(throws[getRandomInt(throws.length)]);
    setCounter(counter + 1);
    setIsButtonDisabled(true);
    setTimeout(() => {
      if (!isEn) {
        setShowEn(true);
      }
    }, 500);
    setTimeout(() => setIsButtonDisabled(false), 1000);
  };

  const odd = Boolean(counter % 2);

  return (
    <>
      <div className="app-main">
        <span className={odd ? "odd" : ""}>
          <div className="throw">{t(yeet)}</div>
          {showEn ? <div className="original">({yeet})</div> : <div></div>}
        </span>

        <span className={odd ? "odd" : ""}>
          <div className="throw">{t(disc)}</div>
          {showEn ? <div className="original">({disc})</div> : <div></div>}
        </span>
      </div>
      <button
        className="throw-button"
        onClick={roll}
        disabled={isButtonDisabled}
      >
        {t("Throw")}
      </button>
    </>
  );
}

export default Home;
