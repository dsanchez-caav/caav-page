import React, {useState} from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Navicon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Dropico,
} from "./Navbar.elements";
import { Container } from "../../globlalStyles";
import { IconContext } from "react-icons/lib";
import { Menuitems } from "./Menuitems";
import { useTranslation } from "react-i18next";

import { DropdownS, DropdownC, DropdownL } from "./Dropdown";


const Navbar = () => {

  //Constants declarations 

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const [t, i18n] = useTranslation("global");

  const [dropdownS, setDropdownS] = useState(false)
  const [dropdownC, setDropdownC] = useState(false)
  const [dropdownL, setDropdownL] = useState(false)

  

  return (
    <>
      <IconContext.Provider value={{ color: "#262728"}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Navicon />
            CAAV
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {Menuitems.map(item => {
                if (item.title === "Services") {
                  return (
                    <NavItem key={item.id}>
                      <NavLinks to={item.path} onMouseEnter={() => setDropdownS(true)} onMouseLeave={() => setDropdownS(false)}>
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
                  return (
                    <NavItem key={item.id}>
                      <NavLinks to={item.path} onMouseEnter={() => setDropdownL(true)} onMouseLeave={() => setDropdownL(false)} >
                        {t(item.tras)} <Dropico />
                        {dropdownL && <DropdownL />}
                      </NavLinks>
                    </NavItem>
                  );
                  }else
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
        
      </IconContext.Provider> 
      
    </>
  );
};  

export default Navbar;

