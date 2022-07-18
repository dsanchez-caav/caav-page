import styled from "styled-components";
import { Container } from "../../globlalStyles";
import { Link } from "react-router-dom";
import { FaMagento, FaCaretDown } from "react-icons/fa";

//This file gives the style to the Navbar

export const Nav = styled.nav`
    background: #F1F1F1;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top:0;
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
    color: #222D5A;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const Navicon = styled(FaMagento)`
    margin-right: 0.5rem;
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

    &:hover {
        border-bottom: 2px solid #262728;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #262728;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    @media screen and (max-width: 960px){
        text-align: left;
        padding: 2rem;
        width: 100%;
        display: table;

        &hover{
            color: #262728;
            transition: all 0.3s ease;
        }
    }
`;

export const Dropico = styled(FaCaretDown)`
    margin-left: 0.2rem;
    color: #262728;
    @media screen and (max-width: 960px){
        display: none;
    }
    `;