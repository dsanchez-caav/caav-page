import styled from "styled-components";
import Home_img from '../../Images/Home.jpg';

export const Herosection = styled.section`
    height: 95vh;
    background-image: url(${Home_img});
    justify-content: right;
    background-position: top;
    background-size: cover;
    display: flex;
    align-items: top;
    object-fit: contain;
    

    @media screen and (max-width: 960px){
        background-repeat: no-repeat;
        background-size: 250%;
        height: 60vh;
    }
`
export const HeroText = styled.p`
    justify-content: right;
    margin-bottom: 35px;
    padding-left: 30%;
    font-size: 4.5vh;
    line-height: 24px;
    text-align: right;
    //Figma 
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #F9F9F9;

    @media screen and (max-width: 1400px){
        padding-left: 50%;

    }
    @media screen and (max-width: 960px){
        justify-content: center;
        font-size: 2.8vh;
        text-align: center;
        padding-left: 0;
        padding-top: 0.3vh;
    }

`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    flex-flow: wrap;
    padding-top: 3vh;
    gap: 3rem;

    @media screen and (max-width: 960px){
        justify-content: center;
        font-size: 1.5em;
        text-align: center;
        padding-left: 0;
        padding-top: 2vh;
    }


`;

