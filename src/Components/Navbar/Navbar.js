import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Dropico,
  CaavLogo
} from "./Navbar.elements";
import { Menuitems } from "./Menuitems";
import { useTranslation } from "react-i18next";
import { DropdownS, DropdownC, DropdownL } from "./Dropdown";
import { useLocation } from 'react-router-dom';
import Logo from "../../Images/Logos/LogoOriginal.svg"

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [t, i18n] = useTranslation("global");
  const [dropdownS, setDropdownS] = useState(false)
  const [dropdownC, setDropdownC] = useState(false)
  const [dropdownL, setDropdownL] = useState(false)
  let location = useLocation();

  return (
    <>

      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <CaavLogo src={Logo} alt="CAAV" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes color="#262728" /> : <FaBars color="#262728" />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {Menuitems.map(item => {
              if (item.title === "Services") {
                return (
                  <NavItem key={item.id}>
                    <NavLinks to={item.path} onMouseEnter={() => setDropdownS(true)} onMouseLeave={() => setDropdownS(false)} >
                      {t(item.tras)} <Dropico />
                      {dropdownS && <DropdownS />}
                    </NavLinks>
                  </NavItem>
                );
              } else if (item.title === "Company") {
                return (
                  <NavItem key={item.id}>
                    <NavLinks to={item.path} onMouseEnter={() => setDropdownC(true)} onMouseLeave={() => setDropdownC(false)}>
                      {t(item.tras)} <Dropico />
                      {dropdownC && <DropdownC />}
                    </NavLinks>
                  </NavItem>
                );
              } else if (item.title === "Languaje") {
                if (window.innerWidth < 960) {
                  return (
                    <NavItem className="language">
                      <NavLinks to={location} onClick={() => i18n.changeLanguage("en")} >
                        {t("drop.drop_len.english")}
                      </NavLinks>
                      <NavLinks to={location} onClick={() => i18n.changeLanguage("es")}>
                        {t("drop.drop_len.spanish")}
                      </NavLinks>
                    </NavItem>
                  )
                } else {
                  return (
                    <NavItem key={item.id}>
                      <NavLinks to={location} onMouseEnter={() => setDropdownL(true)} onMouseLeave={() => setDropdownL(false)} >
                        <BsGlobe /> <Dropico />
                        {dropdownL && <DropdownL />}
                      </NavLinks>
                    </NavItem>
                  );
                }
              } else
                return (
                  <NavItem key={item.id}>
                    <NavLinks to={item.path} >
                      {t(item.tras)}
                    </NavLinks>
                  </NavItem>
                );
            }
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;