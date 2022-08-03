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
        //font-size: 18px;

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
    background: ${({ primary }) => (primary ? "#C9EFF2" : "#6EDAE4")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "0.75rem 4rem" : "0.63rem 1.25rem")};
    color: #606568;
    font-size: ${({ fontBig }) => (fontBig ? "2rem" : "1.6rem")};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: 'Jost', sans-serif;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({ primary }) => (primary ? "#54DAE4" : "#C9EFF2")};
        color: #4D5053;
    }
    :active{
        background: #22B3E4;
    }

    @media screen and (max-device-width: 1400px){
        font-size: ${({ fontBig }) => (fontBig ? "1.6rem" : "1.3rem")};
    }

    @media screen and (max-width: 960px){
        width: 100%;
        padding: ${({ big }) => (big ? "0.75rem 4rem" : "0.63rem 1.25rem")};
        font-size: ${({ fontBig }) => (fontBig ? "1.3rem" : "1rem")};
    } 
`

export const MainHeader = styled.h1`

    justify-content: right;
    font-family: 'PT Sans', sans-serif;
    padding-top: 5%;
    font-size: 8rem;
    margin-bottom: 3rem;
    color: #F9F9F9;
    display: flex;
    align-items: flex-start;
    text-align: right;  

    
    @media only screen and (max-device-width: 1400px) {
        font-size: 6.5rem;
    }


    @media screen and (max-width: 960px){
        justify-content: center;
        text-align: center;
        padding-left: 0;
        font-size: 2.6rem;
        margin-bottom: 0.6em;
    }
    

`;

export default GlobalStyle;