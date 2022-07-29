import styled from "styled-components";
import SerImg from '../../Images/Services/ServicesImg1.jpg'
import MarImg from '../../Images/Services/ServicesImg2.jpg'
import HRImg from '../../Images/Services/ServicesImg3.jpg'
import AuImg from '../../Images/Company/CompanyImg1.jpg'


export const BannerSectionMar = styled.section`
    height: 25rem;
    //padding-top: 1vh;
    background-image: url(${MarImg});
    background-position: top;
    background-repeat: no-repeat;
    background-size: auto;
`;

export const BannerSectionSer = styled.section`
    height: 50vh;
    padding-top: 1vh;
    background-image: url(${SerImg});
    background-position: center;
`;

export const BannerSectionHr = styled.section`
    height: 50vh;
    padding-top: 1vh;
    background-image: url(${HRImg});
    background-position: center;
`;

export const BannerSectionAu = styled.section`
    height: 50vh;
    padding-top: 1vh;
    background-image: url(${AuImg});
    background-position: center;
`;

export const BannerSectionCn = styled.section`
    height: 50vh;
    padding-top: 1vh;
    background-image: url(${AuImg});
    background-position: center;
`;


export const BannerTagline = styled.h4`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'Jost', sans-serif;
    letter-spacing: 1vh;
    font-weight: 400;
    font-size: 3em;
    padding-top: 5rem;
`;

export const BannerTaglineA = styled.h4`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'Jost', sans-serif;
    letter-spacing: 1vh;
    font-weight: 400;
    font-size: 5vh;
    //padding-top: 12vh;
`;

export const BannerTitle = styled.h3`
    color: #F9F9F9;
    text-align: center;
    justify-content: center;
    font-family: 'PT Sans', sans-serif;
    font-size: 8em;
    &.caav{
        letter-spacing: 2vh;
    }

`;

export const BannerSectionDes = styled.section`
    height: 25vh;
    background: #F9F9F9;

`

export const BannerDes = styled.p`
    margin: auto;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    color: #262728;
    text-align: center;
    font-size: 2em;
    //max-width: 55%;
    padding-top: 4vh;
`
