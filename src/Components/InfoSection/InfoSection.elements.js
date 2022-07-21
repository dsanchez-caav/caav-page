import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoSec = styled.div`
    color: #262728;
    padding: 80px 0;
    background: #F9F9F9;
    height: 95vh;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    //padding-left: 15px;
    padding-right: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 50px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;

    }

`;

export const TexTitle = styled.h2`
    justify-content: left;
    font-family: 'PT Sans', sans-serif;
    padding-top: 8vh;
    //font-size: clamp(2.3rem, 6vh, 4.5rem);
    font-size: 6vh;
    margin-bottom: 2rem;
    color: #262728;
    display: flex;
    align-items: flex-start;
    text-align: left;
    @media screen and (max-width: 1400px){
        font-size: 8vh;
    }

`;

export const TexDesc = styled.p`
    justify-content: left;
    margin-bottom: 35px;
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
    color: #262728;

        @media screen and (max-width: 1400px){
        font-size: 3.5vh;

    }

`;


export const Serlist = styled.p`
    justify-content: left;
    //margin-bottom: 35px;
    //padding-left: 30%;
    font-size: 3.3vh;
    line-height: 24px;
    text-align: left;
    //Figma 
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #262728;

    @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }

`

export const Serlink = styled(Link)`
    justify-content: left;
    font-family: 'PT Sans', sans-serif;
    padding-top: 3vh;
    //font-size: clamp(2.3rem, 6vh, 4.5rem);
    font-size: 4vh;
    margin-bottom: 1rem;
    color: #222D5A;
    display: flex;
    align-items: flex-start;
    text-align: left;
    text-decoration: none;
    font-style: normal;
    font-weight: 700;

    @media screen and (max-width: 1400px){
        font-size: 4vh;
    }

`;