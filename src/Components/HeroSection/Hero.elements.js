import styled from "styled-components";
import Home_imgA from '../../Images/Home.png';
import Home_img from '../../Images/Home.avif';

export const Herosection = styled.section`
    height: 95vh;
    max-height: 1400px;
    background-image: url(${Home_img}), url(${Home_imgA});
    justify-content: right;
    background-position: top;
    background-size: cover;
    display: flex;
    align-items: top;
    object-fit: contain;
    image-rendering: optimizeSpeed;
    
    @media only screen and (max-device-width: 1700px) {
        max-height: 1100px;
    }
    
    

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
    padding-left: 30%;
    font-size: 3rem;
    line-height: 24px;
    text-align: right;
    font-family: 'Jost', sans-serif;
    line-height: normal;
    color: #F9F9F9;

    
    @media only screen and (max-device-width: 1600px) {
        font-size: 2.8rem;
        padding-top: 3%;
    }

    @media screen and (max-device-width: 1400px){
        padding-left: 40%;
        font-size: 2.6rem;

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
    align-items: flex-end;
    align-self: stretch;
    float: right;
    @media only screen and (max-width: 960px){
        display: block;
    }
`;

