import React from "react";
import { Navbar, Footer } from "./Components";
import GlobalStyle from "./globlalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ServicesPrincipal from "./Pages/ServicesPages/ServicesPrincipal";
import MarketingService from "./Pages/ServicesPages/MarketingService";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesPrincipal />} />
        <Route path="/Marketing" element={<MarketingService />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
