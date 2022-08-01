import styled from "styled-components";
import { Link } from 'react-router-dom';
import { MdMail, MdLocationOn, MdPhone } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";


export const FooterSection = styled.section`
    height: auto;
    background-color: #606568;
`;

export const Logocontainer = styled.div`

`

export const InfoContainer = styled.div`
    display: flex;
    padding-top: 5vh;
    flex-direction: column;

    
`
export const Contactinfo = styled.div`
    width: 100%;
    display: flex;
    align-content: center;
    align-self: center;
`
export const IcoContainer = styled.a`
    align-items: center;
    padding: 1vh;
    align-content: center;
    align-self: center;
`
export const LinkContainer = styled.a`
    max-width: 70%;
    align-content: center;
    flex-grow: 2;
    align-self: center;
    padding-left: 1vh;
    text-decoration: none;
`
export const FooterText = styled.p`
    font-size: 1.5rem;
    font-family: 'Jost', sans-serif;
    color: #F9F9F9;
    text-align: left;
    
    @media screen and (max-width: 1400px){
        font-size: 1.2rem;
    }
    @media screen and (max-width: 960px){
        font-size: 1.1rem;
    }
`

export const InfoRow = styled.div`
    display: flex;
    padding-bottom: 5vh;
    @media screen and (max-width: 960px) {
        flex-wrap: wrap;
        width: 100%;
    }

`

//Iconos

export const Phone = styled(MdPhone)`
    color: #F9F9F9;
    font-size: 2rem;
    align-self: center;

    @media screen and (max-width: 1400px){
        font-size: 1.7rem;
    }
`
export const Mail = styled(MdMail)`
    color: #F9F9F9;
    font-size: 2rem;
    align-self: center;
    @media screen and (max-width: 1400px){
        font-size: 1.7rem;
    }
`
export const Location = styled(MdLocationOn)`
    color: #F9F9F9;
    font-size: 2rem;
    align-self: center;
    @media screen and (max-device-width: 1400px){
        font-size: 1.7rem;
    }
`

//Network
export const Linkedin = styled(AiOutlineLinkedin)`
    color: #F9F9F9;
    font-size: 3rem;
    align-self: center;
    @media screen and (max-device-width: 1400px){
        font-size: 2.8rem;
    }
`
export const Facebook = styled(AiOutlineFacebook)`
    color: #F9F9F9;
    font-size: 3rem;
    align-self: center;
    @media screen and (max-device-width: 1400px){
        font-size: 2.8rem;
    }
`
export const Instagram = styled(AiOutlineInstagram)`
    color: #F9F9F9;
    font-size: 3rem;
    align-self: center;
    @media screen and (max-device-width: 1400px){
        font-size: 2.8rem;
    }
`
