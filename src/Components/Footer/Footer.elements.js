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
    //max-width: 70%;
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
    font-size: 2vh;
    font-family: 'Jost', sans-serif;
    color: #F9F9F9;
    text-align: left;
    
    @media screen and (max-width: 1400px){
        font-size: 2.5vh;
    }
`

export const InfoRow = styled.div`
    display: flex;
    padding-bottom: 5vh;
`

//Iconos

export const Phone = styled(MdPhone)`
    color: #F9F9F9;
    font-size: 3vh;
    align-self: center;

    @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }
`
export const Mail = styled(MdMail)`
    color: #F9F9F9;
    font-size: 3vh;
    align-self: center;
    @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }
`
export const Location = styled(MdLocationOn)`
    color: #F9F9F9;
    font-size: 3vh;
    align-self: center;
    @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }
`

//Network
export const Linkedin = styled(AiOutlineLinkedin)`
    color: #F9F9F9;
    font-size: 4vh;
    align-self: center;
    @media screen and (max-width: 1400px){
        font-size: 4.5vh;
    }
`
export const Facebook = styled(AiOutlineFacebook)`
    color: #F9F9F9;
    font-size: 4vh;
    align-self: center;
    @media screen and (max-width: 1400px){
        font-size: 4.5vh;
    }
`
export const Instagram = styled(AiOutlineInstagram)`
    color: #F9F9F9;
    font-size: 4vh;
    align-self: center;
    @media screen and (max-width: 1400px){
        font-size: 4.5vh;
    }
`
