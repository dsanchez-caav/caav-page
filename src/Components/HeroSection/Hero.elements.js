import styled from "styled-components";
import Home_img from '../../Images/Home.png';

export const Herosection = styled.section`
    height: 100vh;
    background-image: url(${Home_img});
    justify-content: right;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    object-fit: contain;
`
export const HeroText = styled.p`
    justify-content: right;
    margin-bottom: 35px;
    font-size: 4vh;
    line-height: 24px;
    text-align: right;
    //Figma 
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 92px;
    display: flex;
    align-items: center;
    color: #FFFFFF;

`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    flex-flow: wrap;
    gap: 0.5rem;

`;

