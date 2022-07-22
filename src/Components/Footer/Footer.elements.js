import styled from "styled-components";
import { Link } from 'react-router-dom';

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail, MdLocationOn } from "react-icons/md";

export const FooterSection = styled.section`
    height: 50vh;
    background-color: #606568;
    padding-top: 6vh;
`;

export const FooterRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 25%;
    align-items: center;
    padding-top: 1vh;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1vh;
    
    &.ico{
        width: 4vh;
        padding-right: 3vh;
    }
`;

export const FooterWrapper = styled.div`
    //max-width: 540px;
    padding-top: 30px;
    padding-bottom: 50px;


    @media screen and (max-width: 768px) {
        padding-bottom: 65px;

    }

`;

export const FooterText = styled.p`
    //justify-content: left;
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
    cursor: pointer;
    display: flex;
    align-items: center;
    //padding: 10px;
`;

export const Phone = styled(BsFillTelephoneFill)`
    //margin-right: 2rem;
    font-size: 3vh;
    
`;

export const Location = styled(MdLocationOn)`
    //margin-right: 2rem;
    font-size: 4.5vh;
`;

export const Mail = styled(MdMail)`
    //margin-right: 2rem;
    font-size: 4vh;
`;

export const FooterLinktext = styled(Link)`
    color: #F9F9F9;
    cursor: pointer;
    text-decoration: none;
    font-size: 2.8vh;
    display: flex;

`;


