import styled from "styled-components";
import SerImg from '../../Images/ServicesImg1.jpg'
import MarImg from '../../Images/ServicesImg2.jpg'
import HRImg from '../../Images/ServicesImg3.jpg'


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

export const BannerSectionHr = styled.section`
    height: 50vh;
    padding-top: 1vh;
    background-image: url(${HRImg});
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

export const BannerSectionDes = styled.section`
    height: 23vh;
    background: #F9F9F9;

`

export const BannerDes = styled.p`
    margin: auto;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    color: #262728;
    text-align: center;
    font-size: 3.6vh;
    max-width: 55%;
    padding-top: 4vh;
`
