import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    
*{
    @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
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
    border-radius: 20px;
    background: ${({ primary }) => (primary ? "#C9EFF2" : "#0467FB")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
    color: #606568;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: red;
        background: ${({ primary }) => (primary ? "#0467FB" : "#C9EFF2")};
    }

    @media screen and (max-width: 960px){
        width: 100%;
    } 
`

export const MainHeader = styled.h1`
    justify-content: right;
    font-family: 'PT Sans', sans-serif;
    //font-size: clamp(2.3rem, 6vh, 4.5rem);
    font-size: 14vh;
    margin-bottom: 2rem;
    color: #F9F9F9;
    display: flex;
    align-items: flex-start;
    text-align: right;

`

export default GlobalStyle;