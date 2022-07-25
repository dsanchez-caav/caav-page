import styled from "styled-components";
import SerImg from '../../Images/ServicesImg1.jpg'
import MarImg from '../../Images/ServicesImg2.jpg'


export const BannerSectionMar = styled.section`
    height: 50vh;
    padding-top: 1vh;
    background-image: url(${MarImg});
`;

export const BannerSectionSer = styled.section`
    height: 50vh;
    padding-top: 1vh;
    background-image: url(${SerImg});

`;

export const BannerTagline = styled.h4`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'Jost', sans-serif;
    letter-spacing: 1vh;
    font-weight: 400;
    font-size: 5vh;
    padding-top: 12vh;
`;

export const BannerTitle = styled.h3`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'PT Sans', sans-serif;
    font-size: 12vh;

`;

