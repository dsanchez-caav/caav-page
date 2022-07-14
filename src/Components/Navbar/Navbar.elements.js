import styled from "styled-components";
import { Container } from "../../globlalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

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
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
            top: 80px;
            right: ${({ click }) => (click ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: #F1F1F1;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &hover {
        border-bottom: 2px solid #222D5A;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &hover {
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap');
    color: #262728;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &hover{
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
    font-family: 'Jost', sans-serif;
    
`

