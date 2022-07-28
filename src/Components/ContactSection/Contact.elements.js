import styled from "styled-components";

export const ContactSection = styled.section`
    height: auto;
    background: #F9F9F9;
    @media screen and (max-width: 1400px) {
        height: 50vh;
    }

`

export const Titlecont = styled.div`
    display: flex;
    width: 70%;
    padding-top: 5vh;

`

export const Textcont = styled.div`
    display: flex;
    width: 60%;
    padding-top: 3vh;
`

export const Contacttitle = styled.h1`
    font-family: 'PT Sans', sans-serif;
    color: #262728;
    font-size: 6vh;
    @media screen and (max-width: 1400px){
        font-size: 8vh;
    }
`

export const Contacttext = styled.p`
    font-family: 'Jost', sans-serif;
    color: #262728;
    font-size: 3vh;
    @media screen and (max-width: 1400px){
        font-size: 3.5vh;
    }
`

export const Buttoncont = styled.div`
    display: flex;
    padding-top: 7vh;
    padding-bottom: 10vh;
`