import React from "react";
import { Navbar } from "./Components";
import GlobalStyle from "./globlalStyles";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
