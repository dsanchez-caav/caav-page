import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, Navicon, MobileIcon, NavMenu, NavItem, NavLinks } from "./Navbar.elements";
import { Container } from "../../globlalStyles";
import { IconContext } from "react-icons/lib";



const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <IconContext.Provider value={{ color: "#222D5A"}}>
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
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Company</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Carrers</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        </Nav>
        </IconContext.Provider> 
    </>
  );
};

export default Navbar;