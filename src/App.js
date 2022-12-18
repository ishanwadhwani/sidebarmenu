import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
    </>

  );
}

export default App;
