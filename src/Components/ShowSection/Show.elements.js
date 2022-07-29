import styled from "styled-components";

export const ShowSection = styled.section`
    height: auto;
    background: #F9F9F9;
`

export const ShowColumns = styled.div`
    display: flex;
    justify-content: space-between;
    justify-self: center;
    flex-wrap: wrap;
    @media screen and (max-width: 960px) {
        width: 100%; 
        gap: 3rem;
    }
`

export const ShowCard = styled.div`

    width: 31%;
    height: auto;
    background: #F1F1F1;
    border-radius: 10px;
    justify-content: space-around;
    justify-self: center;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 1400px) {
        width: 27%; 
    }
    @media screen and (max-width: 690px) {
        width: 100%; 
        //padding-bottom: 5%;
    }

`

export const ShowRows = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const Texttitle = styled.h3`
    font-family: 'PT Sans', sans-serif;
    color: #222D5A;
    font-size: 3rem;
    @media screen and (max-width: 1400px) {
        font-size: 2.6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 2.1rem;
        text-align: center;
    }
`

export const Textdes = styled.p`
    font-family: 'Jost', sans-serif;
    color: #262728;
    font-size: 2rem;

    @media screen and (max-width: 1400px) {
        font-size: 1.7rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        text-align: center;
    }


`

export const Titlecont = styled.div`
    display: flex;
    width: 100%;

    padding: 13% 8% 8% 10% ;
    @media screen and (max-width: 960px) {
        align-self: center;
        align-items: center;
        display: block;
    }

`


export const Textcont = styled.div`
    display: flex;
    padding: 2vh 2vh 2vh 3vh ;

    &.list{
        padding-top: 1vh;
    }
    &.separator{
        gap: 5vh;
    }
`
