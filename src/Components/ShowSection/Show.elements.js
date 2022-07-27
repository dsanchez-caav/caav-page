import styled from "styled-components";

export const ShowSection = styled.section`
    height: 70vh;
    background: #F9F9F9;
`

export const ShowColumns = styled.div`
    display: flex;
    justify-content: space-between;
    justify-self: center;
    flex-wrap: nowrap;
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

`

export const ShowRows = styled.div`
    display: flex;
    flex-direction: column;
`

export const Texttitle = styled.h3`
    font-family: 'PT Sans', sans-serif;
    color: #222D5A;
    font-size: 3.3vh;
`

export const Textdes = styled.p`
    font-family: 'Jost', sans-serif;
    color: #262728;
    font-size: 2.5vh;

    @media screen and (max-width: 1400px) {
        font-size: 2.8vh;
    }


`

export const Titlecont = styled.div`
    display: flex;
    width: 100%;
    padding-top: 5vh;
    padding-bottom: 4vh;
    margin-left: 3vh;
`
export const Textcont = styled.div`
    display: flex;
    padding-bottom: 2vh;
    margin-left: 3vh;
    margin-right: 1.5vh;
    &.list{
        padding-top: 1vh;
    }
    &.separator{
        gap: 5vh;
    }
`
