import * as React from "react";
import Home from "./Home.jsx";
import { Routes, Route } from "react-router-dom";
import { TranslatorProvider } from "react-translate";
import translations from "./translations.json";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="lang">
        <a href="/">is</a>
        <a href="/en">en</a>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <TranslatorProvider translations={translations.is}>
              <Home lang="is" />
            </TranslatorProvider>
          }
        />
        <Route
          path="/en"
          element={
            <TranslatorProvider translations={translations.en}>
              <Home lang="en" />
            </TranslatorProvider>
          }
        />
      </Routes>
    </div>
  );
}
