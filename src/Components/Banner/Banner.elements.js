import styled from "styled-components";
import SerImg from '../../Images/Services/ServicesImg1.jpg'
import MarImg from '../../Images/Services/ServicesImg2.jpg'
import HRImg from '../../Images/Services/ServicesImg3.jpg'
import AuImg from '../../Images/Company/CompanyImg1.jpg'
import CoImg from '../../Images/Company/CompanyImg2.jpg'
import CaImg from '../../Images/Career/CareerImg1.avif'

import GlobalStyle from "../../globlalStyles";


export const BannerSectionMar = styled.section`
    height: 50vh;
    max-height: 400px; 
    background-image: url(${MarImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: optimizeSpeed;
    @media screen and (max-device-width: 1400px) {
        max-height: 350px;
    }
    @media screen and (max-width: 960px) {
        max-height: 250px;
    }
`;

export const BannerSectionSer = styled.section`
    height: 50vh;
    max-height: 400px; 
    background-image: url(${SerImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: optimizeSpeed;
    @media screen and (max-device-width: 1400px) {
        max-height: 350px;
    }
    @media screen and (max-width: 960px) {
        max-height: 200px;
    }
`;

export const BannerSectionHr = styled.section`
    height: 50vh;
    max-height: 400px; 
    background-image: url(${HRImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: optimizeSpeed;
    @media screen and (max-device-width: 1400px) {
        max-height: 350px;
    }
    @media screen and (max-width: 960px) {
        max-height: 250px;
    }
`;

export const BannerSectionAu = styled.section`
    height: 50vh;
    max-height: 400px; 
    background-image: url(${AuImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: optimizeSpeed;
    @media screen and (max-device-width: 1400px) {
        max-height: 350px;
    }
    @media screen and (max-width: 960px) {
        max-height: 250px;
    }
`;

export const BannerSectionCn = styled.section`
    height: 50vh;
    max-height: 400px; 
    padding-top: 1vh;
    background-image: url(${CoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: optimizeSpeed;
    @media screen and (max-device-width: 1400px) {
        max-height: 350px;
    }
    @media screen and (max-width: 960px) {
        max-height: 200px;
    }
`;

export const BannerSectionCa = styled.section`
    height: 50vh;
    max-height: 400px; 
    padding-top: 1vh;
    background-image: url(${CaImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    image-rendering: optimizeSpeed;
    @media screen and (max-device-width: 1400px) {
        max-height: 350px;
    }
    @media screen and (max-width: 960px) {
        max-height: 200px;
    }
`;


export const BannerTagline = styled.h4`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'Jost', sans-serif;
    letter-spacing: 1vh;
    font-weight: 400;
    font-size: 2.8rem;
    padding-top: 8%;

    &.caav{
        padding-top: 4%;
    }

    @media screen and (max-device-width: 1400px) {
        font-size: 2.2rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.8rem;
        padding-top: 10%;
    }
`;

export const BannerTaglineA = styled.h4`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'Jost', sans-serif;
    letter-spacing: 1vh;
    font-weight: 400;
    font-size: 2.8rem;
    
    @media screen and (max-width: 1400px) {
        font-size: 2.2rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.6rem;
        padding-top: 5%;
    }
`;

export const BannerTitle = styled.h3`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'PT Sans', sans-serif;
    font-size: 6.5rem;
    &.caav{
        letter-spacing: 2rem;
    }

    @media screen and (max-device-width: 1400px) {
        font-size: 6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

`;

export const BannerSectionDes = styled.section`
    height: 25vh;
    max-height: 200px;
    background: #F9F9F9;
    @media screen and (max-width: 960px) {
        height: auto;
        max-height: 250px;
    }
`

export const BannerDes = styled.p`
    margin: auto;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    color: #262728;
    text-align: center;
    font-size: 2rem;
    padding-top: 5%;
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
        padding-top: 4%;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        padding-top: 10%;
    }
`
