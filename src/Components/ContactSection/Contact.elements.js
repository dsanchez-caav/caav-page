import styled from "styled-components";

export const ContactSection = styled.section`
    height: auto;
    background: #F9F9F9;


`

export const Titlecont = styled.div`
    display: flex;
    width: 70%;
    padding-top: 5vh;
    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export const Textcont = styled.div`
    display: flex;
    width: 60%;
    padding-top: 3vh;
    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export const Contacttitle = styled.h1`
    font-family: 'PT Sans', sans-serif;
    color: #262728;
    font-size: 4.6rem;
    @media screen and (max-width: 1400px){
        font-size: 4rem;
    }
    @media screen and (max-width: 960px){
        font-size: 2.4rem;
        text-align: center;
    }
`

export const Contacttext = styled.p`
    font-family: 'Jost', sans-serif;
    color: #262728;
    font-size: 2rem;
    @media screen and (max-width: 1400px){
        font-size: 1.7rem;
    }
    @media screen and (max-width: 960px){
        font-size: 1.3rem;
        text-align: center;
    }
`

export const Buttoncont = styled.div`
    display: flex;
    padding-top: 7vh;
    padding-bottom: 10vh;
    @media screen and (max-width: 960px){
        width: 100%;
        display: block;
    }

`