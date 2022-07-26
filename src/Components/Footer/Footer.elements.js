import styled from "styled-components";
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail, MdLocationOn } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";


export const FooterSection = styled.section`
    height: 50vh;
    background-color: #606568;
    padding-top: 6vh;
`;

export const FooterRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 8vh;
    align-items: center;
    padding-top: 1vh;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1vh;
    
    &.ico{
        width: 4vh;
        padding-right: 3vh;
    }
    &.text{
        width: 40%;
        align-items: flex-start;
    }
    &.separator{
        width: 10%;
    }
    &.network{
        align-items: flex-start;
        width: 20%;
    }
    &.networkI{
        width: 15%;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (max-width: 996px) {
        width: 100%;
            &.text{
            width: 100%;
            align-items: flex-start;
        }
        &.network{
        align-items: flex-start;
        width: 100%;
    }
    &.networkI{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    }

`;


export const FooterText = styled.p`
    font-size: 2.8vh;
    text-align: left;
    font-family: 'Jost', sans-serif;
    display: flex;
    align-items: center;
    color: #F9F9F9;

        @media screen and (max-width: 1400px){
        font-size: 3.2vh;
    }

`;

export const FooterIco = styled(Link)`
    color: #F9F9F9;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

//Icons
export const Phone = styled(BsFillTelephoneFill)`
    font-size: 3vh;
`;

export const Location = styled(MdLocationOn)`
    font-size: 4.5vh;
`;

export const Mail = styled(MdMail)`
    font-size: 4vh;
`;

export const Instagram = styled(AiOutlineInstagram)`
    font-size: 5.5vh;
`
export const Linkedin = styled(AiOutlineLinkedin)`
    font-size: 5.5vh;
`

export const Facebook = styled(AiOutlineFacebook)`
    font-size: 5.5vh;
`

export const FooterLinktext = styled(Link)`
    color: #F9F9F9;
    cursor: pointer;
    text-decoration: none;
    font-size: 2.6vh;
    display: flex;

    @media screen and (max-width: 1400px){
        font-size: 2.8vh;
    }
`;


export const FooterIcoA = styled.a`
    color: #F9F9F9;
    cursor: pointer;
    display: flex;
    align-items: center;
    &social{
        padding: 10vh;
    }
`;

export const FooterAtext = styled.a`
    color: #F9F9F9;
    cursor: pointer;
    text-decoration: none;
    font-size: 2.6vh;
    display: flex;

    @media screen and (max-width: 1400px){
        font-size: 2.8vh;
    }
`;