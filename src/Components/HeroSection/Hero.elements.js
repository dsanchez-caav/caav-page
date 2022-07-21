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
`
export const HeroText = styled.p`
    justify-content: right;
    margin-bottom: 35px;
    padding-left: 30%;
    font-size: 5vh;
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
        padding-left: 40%;

    }

`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    flex-flow: wrap;
    gap: 0.5rem;

`;

