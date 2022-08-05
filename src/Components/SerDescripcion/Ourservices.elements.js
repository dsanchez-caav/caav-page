import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsMegaphoneFill, BsFillPersonPlusFill} from "react-icons/bs";

export const OurContainer = styled.section`
    height: auto;
    background: #F9F9F9;
`

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const OurTitle = styled.h3`
    font-family: 'PT Sans', sans-serif;
    color: #222D5A;
    font-size: 4.6rem;
    text-align: center;
    padding-bottom: 5rem;
    @media screen and (max-device-width: 1400px) {
        font-size: 3.9rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 2.4rem;
        padding-bottom: 3rem;
    }
`
export const ServicesColumn = styled.div`
    display: flex;
    justify-content: space-between;
    justify-self: center;
    flex-wrap: wrap;
    @media screen and (max-width: 960px) {
        width: 100%; 
        gap: 3rem;
    }
`

export const ServiceCard = styled.div`
    width: 40%;
    height: auto;
    background: #F1F1F1;
    border-radius: 10px;
    justify-content: space-around;
    justify-self: center;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    @media screen and (max-device-width: 1400px) {
        width: 42%; 
    }
    @media screen and (max-width: 690px) {
        width: 100%; 
    }

`


export const CardRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardTitle = styled.h3`
    font-family: 'PT Sans', sans-serif;
    color: #222D5A;
    font-size: 3rem;
    text-align: center;
    text-decoration: none;
    @media screen and (max-device-width: 1400px) {
        font-size: 2.4rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 2.1rem;
        
    }
`


export const CtitleCont = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    

    padding: 13% 8% 8% 10% ;
    @media screen and (max-width: 960px) {
        align-self: center;
        align-items: center;
        display: block;
    }

`


export const MarkIco = styled(BsMegaphoneFill)`
    height: 5rem;
    width: auto;
    color: #222D5A;
    @media screen and (max-width: 960px) {
        height: 3.8rem;
    }
    
`
export const HRIco = styled(BsFillPersonPlusFill)`
    height: 5rem;
    width: auto;
    color: #222D5A;
    @media screen and (max-width: 960px) {
        height: 3.8rem;
    }
`

export const Icontainer = styled.div`
    display: flex;
    padding: 0 0 4rem 0;
`

export const CLink = styled(Link)`
    text-decoration: none;
    :visited{
        text-decoration: none;
    }
`