import React from "react";
import { Navbar, Footer, Protected } from "./Components";
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
import CareerTable from "./Pages/Admin/CareerTable";
import CareerAdd from "./Pages/Admin/CareerAdd";
import { AuthContextPrivider } from "./Context/AuthContexts";
import CareerEdit from "./Pages/Admin/CareerEdit";
import AdminPrincipal from "./Pages/Admin/AdminPrincipal";
import ConatctTable from "./Pages/Admin/ContactTable";
import ContactView from "./Pages/Admin/ContactView";

function App() {

  return (
    <Router>
      <GlobalStyle />
      <AuthContextPrivider>
        <Navbar />
        <Routes>

          {/* General Routes */}

          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/services" element={<ServicesPrincipal />} />
          <Route exact path="/services/marketing" element={<MarketingService />} />
          <Route exact path="/services/human-resources" element={<HumanService />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/career" element={< Career />} />
          <Route exact path="/job/:id" element={< Job />} />
          <Route exact path="/admin" element={< AdminPrincipal />} />

          {/* Protected routes */}
          <Route exact path="/admin/career/table" element={
            <Protected>
              < CareerTable />
            </Protected>} />
          <Route exact path="/admin/career/create" element={
            <Protected>
              < CareerAdd />
            </Protected>
          } />
          <Route exact path="/admin/career/edit/:id" element={
            <Protected>
              < CareerEdit />
            </Protected>
          } />
          <Route exact path="/admin/contact/table" element={
            <Protected>
              <ConatctTable />
            </Protected>
          } />

          <Route exact path="/admin/contact/view/:id" element={
            <Protected>
              <ContactView />
            </Protected>
          } />

          {/* Error route (404) */}
          <Route path="*" element={< NotFoundP />} />
        </Routes>
        <Footer />
      </AuthContextPrivider>
    </Router>
  );
};

export default App;
