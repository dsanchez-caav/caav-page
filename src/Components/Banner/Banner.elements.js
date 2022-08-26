import styled from "styled-components";
import SerImg from '../../Images/Services/ServicesImg1.avif'
import SerImgA from '../../Images/Services/ServicesImg1.png'
import MarImg from '../../Images/Services/ServicesImg2.avif'
import MarImgA from '../../Images/Services/ServicesImg2.png'
import HRImg from '../../Images/Services/ServicesImg3.avif'
import HRImgA from '../../Images/Services/ServicesImg3.png'
import AuImg from '../../Images/Company/CompanyImg1.avif'
import AuImgA from '../../Images/Company/CompanyImg1.png'
import CoImg from '../../Images/Company/CompanyImg2.avif'
import CoImgA from '../../Images/Company/CompanyImg2.png'
import CaImg from '../../Images/Career/CareerImg1.avif'
import CaImgA from '../../Images/Career/CareerImg1.png'
import JoImg from '../../Images/Career/CareerImg2.png'
import AdImg from '../../Images/Admin/AdminPrincipal.png'

export const BannerSectionMar = styled.section`
    height: 50vh;
    max-height: 400px; 

    background-image: url(${MarImg}), url(${MarImgA}); 
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
    background-image: url(${SerImg}), url(${SerImgA});
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
    background-image: url(${HRImg}),  url(${HRImgA});
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
    background-image: url(${AuImg}), url(${AuImgA});
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
    background-image: url(${CoImg}), url(${CoImgA});
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
    background-image: url(${CaImg}), url(${CaImgA});
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


export const BannerSectionJo = styled.section`
    height: 30vh;
    max-height: 400px; 
    padding-top: 1vh;
    background-image: url(${JoImg});
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


export const BannerSectionAd = styled.section`
    height: 50vh;
    max-height: 400px; 
    padding-top: 1vh;
    background-image: url(${AdImg});
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
    letter-spacing: 1rem;
    font-weight: 400;
    font-size: 2.8rem;
    padding-top: 8%;
    &.caav{
        padding-top: 4%;
    }
    &.job{
        text-align: left;
        padding-top: 1rem;
        letter-spacing: normal;
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
    &.job{
        text-align: left;
        padding-top: 1rem;
    }
    @media screen and (max-device-width: 1400px) {
        font-size: 6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 3.2rem;
        &.job{
        text-align: left;
        padding-top: 0.5rem;
    }
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
