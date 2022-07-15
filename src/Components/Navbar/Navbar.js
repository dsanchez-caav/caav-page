import React, {useState} from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, Navicon, MobileIcon, NavMenu, NavItem, NavLinks, Dropico, Navdrop } from "./Navbar.elements";
import { Container } from "../../globlalStyles";
import { IconContext } from "react-icons/lib";

//test
import { useTranslation } from "react-i18next";



const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const [t, i18n] = useTranslation("global")

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
            <NavItem>
                <NavLinks to="/">{t("nav.home") }</NavLinks>
            </NavItem>
            <NavItem >
                <NavLinks to="/services">{t("nav.services")}
                </NavLinks>
            </NavItem>
            <NavItem >
                <NavLinks to="/">{t("nav.company")} <Dropico />  
                </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/">
                  {t("nav.careers")} <Dropico />
                </NavLinks>
            </NavItem>
              <NavItem>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        </Nav>
        </IconContext.Provider> 
    </>
  );
};

export default Navbar;