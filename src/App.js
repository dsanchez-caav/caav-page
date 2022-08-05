import React from "react";
import { Navbar, Footer } from "./Components";
import GlobalStyle from "./globlalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ServicesPrincipal from "./Pages/ServicesPages/ServicesPrincipal";
import MarketingService from "./Pages/ServicesPages/MarketingService";
import HumanService from "./Pages/ServicesPages/HumanService";
import AboutUs from "./Pages/CompanyPages/AboutUs";
import ContactUs from "./Pages/CompanyPages/ContactUs";
import Career from "./Pages/Careers/Careers";
import NotFoundP from "./Pages/404/404";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesPrincipal />} />
        <Route path="/Marketing" element={<MarketingService />} />
        <Route path="/Human-Resources" element={<HumanService />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Career" element={< Career/>} />
        <Route path="*" element={< NotFoundP/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
