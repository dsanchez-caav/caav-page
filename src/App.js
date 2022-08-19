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
import Job from "./Pages/Careers/Job";
import CareerAdmin from "./Pages/Admin/CareerAdmin";
import CareerForm from "./Pages/Admin/CareerForm";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/services" element={<ServicesPrincipal />} />
        <Route exact path="/Marketing" element={<MarketingService />} />
        <Route exact path="/services/human-resources" element={<HumanService />} />
        <Route exact path="/About-us" element={<AboutUs />} />
        <Route exact path="/Contact" element={<ContactUs />} />
        <Route exact path="/Career" element={< Career/>} />
        <Route exact path="/Job" element={< Job/>} />
        <Route exact path="/admin/career/principal" element={< CareerAdmin />} />
        <Route exact path="/admin/career/create" element={< CareerForm />} />
        
        <Route path="*" element={< NotFoundP/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
