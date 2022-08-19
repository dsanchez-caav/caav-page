import styled from "styled-components";
import { Button, Container } from "../../globlalStyles";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

export const Nav = styled.nav`
    background: #F1F1F1;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
        top: 0;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    ${Container}
`;

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

export const CaavLogo = styled.img`
    height: 50px;
    width: auto;
    alt: "CAAV";
    @media screen and (max-width: 960px){
        height: 40px;
    }
`;


export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
            top: 0;
            right: 0;
        transform: translate(-100%, 60%);
        font-size:  1.8rem;
        cursor: pointer;
        
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 960px){
        display: ${({ click }) => (click ? "flex" : "none")};
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
            top: 80px;
            left: 0px;
        opacity: 1;
        background: #F1F1F1;
    }
`;

export const NavItem = styled.li`
    color: #262728;
    height: 80px;
    border-bottom: 2px solid transparent;
    font-family: 'Jost', sans-serif;
    &:hover {
        transition: all 0.3s ease-out;
        border-bottom: 5px solid #6EDAE4;
    }
    @media screen and (max-width: 960px){
        width: 100%;
        &:hover {
            border: none;
        }
    }
    &.language{
        padding-left: 2rem;
    }
`;

export const NavLinks = styled(Link)`
    color: #262728;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: 'Jost', sans-serif;
    @media screen and (max-width: 960px){
        text-align: left;
        padding: 2rem;
        width: 100%;
        display: table;
    }
    &hover{
            transition: all 0.3s ease;
            color: #262728;
        }
`;

export const NavItemBtn = styled.li`
   @media screen and (max-width: 960px){
        display: none;
    }

`

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`

export const Dropico = styled(FaCaretDown)`
    margin-left: 0.2rem;
    color: #262728;
    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const LoginBtn = styled(Button)`
    font-size: 1.2rem;
    padding: 0.3rem 1.25rem;
`