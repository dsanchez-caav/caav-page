import styled from "styled-components";
import Home_img from '../../Images/Home.jpg';

export const Herosection = styled.section`
    height: 95vh;
    max-height: 1500px;
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
        height: auto;
        padding-bottom: 5vh;
    }
`
export const HeroText = styled.p`
    justify-content: right;
    margin-bottom: 1em;
    padding-left: 40%;
    font-size: 3rem;
    line-height: 24px;
    text-align: right;
    //Figma 
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    color: #F9F9F9;

    @media screen and (max-width: 1400px){
        padding-left: 50%;
        font-size: 2rem;

    }
    @media screen and (max-width: 960px){
        justify-content: center;
        font-size: 1.5rem;
        text-align: center;
        padding-left: 0;
    }

`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    //flex-flow: wrap;
    //padding-top: 3vh;
    //gap: 3rem;
    align-items: flex-end;
    align-self: stretch;
    float: right;

    @media only screen and (max-width: 960px){
        display: block;
    }
`;

