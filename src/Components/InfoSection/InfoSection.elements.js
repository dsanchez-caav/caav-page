import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoSec = styled.div`
    color: #262728;
    padding-top: 60px;
    padding-bottom: 50px;
    background: #F9F9F9;
    height: auto;
    @media screen and (max-width: 768px) {
        padding: 0 0;
        height: auto;
    }
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: flex-start;
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
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
    padding-top: 3vh;
    font-size: 6vh;
    margin-bottom: 3rem;
    color: #262728;
    display: flex;
    align-items: flex-start;
    text-align: left;

    @media screen and (max-width: 1400px){
        font-size: 8vh;
    }

    @media screen and (max-width: 960px){
        justify-content: center;
        font-size: 6vh;
        text-align: center;
        padding-top: 6vh;
        margin-bottom: 2rem;
    }


`;

export const TexDesc = styled.p`
    justify-content: left;
    padding-bottom: 8vh;
    font-size: 3vh;
    text-align: left;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    color: #262728;
    line-height: normal;

        @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }
    @media screen and (max-width: 960px){
        justify-content: center;
        font-size: 3vh;
        text-align: center;
        padding-top: 0;
    }
`;


export const Serlist = styled.p`
    justify-content: left;
    padding-bottom: 1vh;
    font-size: 3vh;
    text-align: left;
    font-family: 'Jost', sans-serif;
    display: flex;
    align-items: center;
    color: #262728;

    &.mk{
        
        justify-content: right;
        
    }

    @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }

    @media screen and (max-width: 960px){
        font-size: 3.5vh;
    }

`

export const Serlink = styled(Link)`
    justify-content: left;
    font-family: 'PT Sans', sans-serif;
    padding-top: 3vh;
    font-size: 4vh;
    margin-bottom: 1rem;
    color: #222D5A;
    display: flex;
    align-items: center;
    text-align: left;
    text-decoration: none;
    font-style: normal;
    font-weight: 700;

    &.mk{
        padding-left: 10vh;
        padding-top: 10vh;
        justify-content: right;
    
    }

    @media screen and (max-width: 1400px){
        font-size: 4vh;

    }

`;