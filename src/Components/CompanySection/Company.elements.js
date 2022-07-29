import styled from "styled-components";
//
import VisImg from '../../Images/Company/Mision.jpg'
import MisImg from '../../Images/Company/Vision.jpg'

export const Companysection = styled.section`
    background: #F9F9F9;
    height: auto;

`
export const Infocontainer = styled.div`
    display: flex;
    padding: 3% 2vh 5vh 3vh;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
    height: auto;
    @media screen and (max-width: 1400px){
        flex-wrap: wrap;
    }
`

export const ImgContainer = styled.div`
    
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    display: flex;
    width: 100%;
    //align-self: stretch;
    align-items: center;
    align-content: center;
    &.vis{
        background-image: url(${VisImg});
    }
    &.mis{
        background-image: url(${MisImg});
        order: 4;
    }
    @media screen and (max-width: 960px) {
        &.mis{
        order: 0;
    }
    }
`

export const TextContainer = styled.section`
    align-content: center;
    flex-grow: 2;
    align-self: center;
    align-content: center;
    padding: 0 2% 0 2%;
`

export const Companytext = styled.p`
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    color: #262728;
    padding: 0 5vh 0 5vh;
    @media screen and (max-width: 1400px) {
        font-size: 1.7rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        text-align: center;
        padding: 10% 0 0 0;
    }
`

export const Companytitle = styled.h2`
    text-align: center;
    color: #F9F9F9;
    font-family: 'PT Sans', sans-serif;
    font-size: 4.6rem;
    padding-top: 5%;
    padding-bottom: 8%;
    @media screen and (max-width: 1400px){
        font-size: 4rem;
    }
    @media screen and (max-width: 960px){
        font-size: 2.4rem;
    }
`
export const TitleContainer = styled.div`
    align-content: center;
    align-self: center;
    padding: 0 2vh 0 2vh;
    z-index: auto;
    width: 100%;
`
export const Img = styled.img`
    padding-right: 0px;
    border: 0;
    max-height: 100%;
    vertical-align: middle;
    max-width: 40vh;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
    image-rendering: optimizeSpeed;
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-position: right top;

    @media screen and (max-width: 1400px){
        max-width: 50vh;
    }
`