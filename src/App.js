import React from "react";
import { Navbar, Footer } from "./Components";
import GlobalStyle from "./globlalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Services from "./Pages/ServicesPages/Services";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Services" element = {<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
