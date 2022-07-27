import styled from "styled-components";
//import VisImg from '../../Images/Company/Mision.jpg'

export const Companysection = styled.section`
    background: #F9F9F9;
    height: auto;

`
export const Infocontainer = styled.div`
    display: flex;
    padding: 5vh 2vh 5vh 3vh;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
`

export const ImgContainer = styled.div`

`

export const TextContainer = styled.div`
    align-content: center;
    flex-grow: 2;
    align-self: center;
    align-content: center;
    padding: 0 2vh 0 2vh;
`

export const Companytext = styled.p`
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 3vh;
    color: #262728;

`

export const Img = styled.img`
    padding-right: 0px;
    border: 0;
    max-height: 100%;
    vertical-align: middle;
    max-width: 40vh;

    @media screen and (max-width: 1400px){
        max-width: 50vh;
    }
`

export const Companytitle = styled.h2`
    text-align: center;
    color: black;
    font-family: 'PT Sans', sans-serif;
    font-size: 10vh;

`
export const TitleContainer = styled.div`
    align-content: center;
    //flex-grow: 2;
    align-self: center;
    align-content: center;
    padding: 0 2vh 0 2vh;
    z-index: auto;
`
