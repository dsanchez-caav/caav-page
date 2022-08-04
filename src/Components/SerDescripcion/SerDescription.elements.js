import styled from "styled-components";

export const DesSection = styled.section`
    height: auto;
    background: #F9F9F9;
`

export const DesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
    height: auto;
    padding: 3% 2vh 5vh 3vh;
    flex-direction: ${({ start }) => (start ? 'row' : 'row-reverse')};
    @media screen and (max-width: 960px){
        flex-wrap: wrap;
    }

`


export const TitleContainer = styled.div`

    max-width: 40%;
    align-content: center;
    padding: 0 2vh 0 2vh;
    z-index: auto;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 960px){
        max-width: 100% ;
    }
`

export const TitleText = styled.h3`
    text-align: center;
    color: #262728;
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

export const TextContainer = styled.div`
    align-content: center;
    flex-grow: 2;
    align-self: center;
    align-content: center;
    padding: 0 2% 0 2%;
`

export const TextDes = styled.p`
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    color: #262728;
    padding: 0 5vh 0 5vh;
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        text-align: center;
        padding: 10% 0 0 0;
    }
`

