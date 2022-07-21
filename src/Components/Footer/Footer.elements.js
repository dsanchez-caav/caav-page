import styled from "styled-components";
import { Link } from 'react-router-dom';

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail, MdLocationOn } from "react-icons/md";

export const FooterSection = styled.section`
    height: 50vh;
    background-color: #606568;
`;

export const FooterRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
`;

export const FooterColumn = styled.div`
    margin-bottom: 15px;
    //padding-left: 15px;
    padding-right: 15px;
    //flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const FooterWrapper = styled.div`
    max-width: 540px;
    padding-top: 30px;
    padding-bottom: 50px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;

    }

`;

export const FooterText = styled.p`
    justify-content: left;
    //margin-bottom: 35px;
    //padding-left: 30%;
    font-size: 3vh;
    line-height: 24px;
    text-align: left;
    //Figma 
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #F9F9F9;
    

        @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }

`;

export const FooterIco = styled(Link)`
    color: #F9F9F9;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 3.5vh;
    display: flex;
    align-items: center;
    padding-top: 2vh;
`;

export const Phone = styled(BsFillTelephoneFill)`
    margin-right: 2rem;
    font-size: 4vh;
`;

export const Location = styled(MdLocationOn)`
    margin-right: 2rem;
    font-size: 5vh;
`;

export const Mail = styled(MdMail)`
    margin-right: 2rem;
    font-size: 5vh;
`;

export const FooterLinktext = styled(Link)`
    color: #F9F9F9;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 3.5vh;
    display: flex;
    align-items: center;
    padding-top: 2vh;
`;

export const FooterIcoA = styled.a`
    color: #F9F9F9;
    justify-self: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 3.5vh;
    display: flex;
    align-items: center;
    padding-top: 2vh;
`;
