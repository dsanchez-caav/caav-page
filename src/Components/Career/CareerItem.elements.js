import styled from "styled-components";

export const Item = styled.div`
    background: #F1F1F1;
    width: 100%;
    border-radius: 10px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
`

export const ItemConatainer = styled.div`
    display: flex;
    padding: 2rem;
`

export const ItemRow = styled.div`
    display: flex;
    flex-direction: column;
    

    
    &.left{
        width: 70%;
    }
    &.right{
        width: 30%;
    }
`

export const ItemColumn = styled.div`
    display: flex;
    flex-direction: row;
    &.button{
        
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`

export const TitleConatiner = styled.div`
    max-width: 100%;
`

export const Title = styled.h4`
    text-align: left;
    color: #222D5A;
    font-family: 'PT Sans', sans-serif;
    
    font-size: 3rem;
    &.money{
        font-weight: 400;
    }
    @media screen and (max-device-width: 1400px) {
        font-size: 2.4rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 2.1rem;
        text-align: center;
    }
`
export const TextConatiner = styled.div`

`

export const Text = styled.p`
    font-family: 'Jost', sans-serif;
    color: #262728;
    font-size: 2rem;
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        text-align: center;
    }
`

export const ButtonContainer = styled.div`
    align-self: center;
    align-items: stretch;
    width: 100%;
`

