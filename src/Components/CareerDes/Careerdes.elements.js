import styled from "styled-components";

export const CareerContainer = styled.section`
    height: auto;
    background: #F9F9F9;
`
export const TitleContainer = styled.div`
    align-content: center;
    align-self: center;
`

export const Title = styled.h2`
    text-align: center;
    color: #262728;
    font-family: 'PT Sans', sans-serif;
    font-size: 4.6rem;
    padding-bottom: 4rem;
    @media screen and (max-width: 1400px){
        font-size: 4rem;
    }
    @media screen and (max-width: 960px){
        font-size: 2.4rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const DesContainer = styled.div`
    align-content: center;
    align-self: center;
`

export const Des = styled.p`
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    color: #262728;
    padding: 0 2rem 4rem;
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        text-align: center;
        padding: 0 0 2rem;
    }
`

export const ListContainer = styled.div`
    align-content: left;
    align-self: center;
`

export const Listtext = styled.p`
    text-align: left;
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    color: #262728;
    padding: 0 6rem 4rem;
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        text-align: center;
        padding: 0 0 2rem;
    }
`