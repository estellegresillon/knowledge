import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/index.css";
import Menu from "./Menu";
import Home from "./Home";

// Home with explanations
// js concepts
// react concepts
// code bits like gists
// mastering the interview
// make a portfolio
// make a cv
// your first job
// go freelance
// frontend tools
// design tools
// glossary for beginners
// write tests
// memos and callbacks
// state management
// refs and dom manipulation in react

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
