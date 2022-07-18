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

import Dropdown from "./Dropdown";

//test




const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const [t, i18n] = useTranslation("global");



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
                return (
                  <NavItem key={item.id}>
                    <NavLinks to={item.path} >
                      {t(item.tras)}
                  </NavLinks>
                </NavItem>
              )
                }
                )}
              </NavMenu>
        </NavbarContainer>
        </Nav>
        <Dropdown />
        </IconContext.Provider> 
    </>
  );
};  

export default Navbar;

// const Navbar = () => {
//   const [click, setClick] = useState(false)
  
//   const handleClick = () => setClick(!click)
  
//   const [t, i18n] = useTranslation("global")
  
//   return (
//     <>
//       <IconContext.Provider value={{ color: "#262728" }}>
//         <nav className="Navbar">
//           <link to="./" className="Navlogo">
//             CAAV
//           </link>
//           <ul className="Nav-item">

//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   )
// }
// export default Navbar;
