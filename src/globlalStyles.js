import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Jost", sans-serif;
    }
    body{
        background-color: #F9F9F9;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 10px;
    background: ${({ primary }) => (primary ? "#C9EFF2" : "#54DAE4")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
    color: #606568;
    font-size: ${({ fontBig }) => (fontBig ? "3vh" : "2vh")};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: 'PT Sans', sans-serif;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({ primary }) => (primary ? "#54DAE4" : "#C9EFF2")};
        color: #4D5053;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
        font-size: ${({ fontBig }) => (fontBig ? "1.8vh" : "1.5vh")};
    } 
`

export const MainHeader = styled.h1`
    justify-content: right;
    font-family: 'PT Sans', sans-serif;
    padding-top: 10vh;
    font-size: 11vh;
    margin-bottom: 3rem;
    color: #F9F9F9;
    display: flex;
    align-items: flex-start;
    text-align: right;

    @media screen and (max-width: 1400px){
        padding-left: 13%;

    }
    @media screen and (max-width: 960px){
        justify-content: center;
        font-size: 5vh;
        text-align: center;
        padding-left: 0;
        padding-top: 5vh;
    }

`

export default GlobalStyle;