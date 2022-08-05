import styled from "styled-components";
import { Button } from "../../globlalStyles";

export const FormSection = styled.section`
    height: auto;
    background: #F9F9F9;
    padding-top: 5%;
    padding-bottom: 10%;
    @media screen and (max-width: 960px) {
        padding-top: 10%;
    }
`

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

export const FormColumn = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 100%;
`

export const FormInput = styled.input`
    background: #F1F1F1;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    width: 100%;
    border: none;
    padding: 0.2rem;
    padding-left: 1rem;
    height: 4rem;
    color: #262728;
    :focus{
        outline: 3px solid #6EDAE4;
        border: 1px solid #6EDAE4;
        transition: all 0.2s ease-out;
        @media screen and (max-width: 960px) {
            outline: 1px solid #6EDAE4;
            border: 1px solid #6EDAE4;
    }
    }
    ::placeholder{
        font-size: 1.8rem;
        opacity: 50%;
        @media screen and (max-device-width: 1400px) {
        font-size: 1.4rem;
    }
    @media screen and (max-width: 960px) {
            font-size: 1.15rem;
        }
    }
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
        height: 3rem;
    }
`

export const TextForm = styled.p`
    font-family: 'Jost', sans-serif;
    font-size: 2.2rem;
    text-align: left;
    color: #262728;
    margin: auto;
    @media screen and (max-device-width: 1400px) {
        font-size: 1.8rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
    }
`

export const TextContainer = styled.div`
    width: 60%;
    padding-bottom: 1%;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const InputContainer = styled.div`
    width: 60%;
    padding-bottom: 5%;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const TextFormA = styled.textarea`
    background: #F1F1F1;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    width: 100%;
    border: 0px;
    padding: 0.2rem;
    padding-left: 1rem;
    padding-top: 1rem;
    color: #262728;
    min-height: 12rem;
    resize: vertical;
    outline: none;
    ::placeholder{
        font-size: 1.8rem;
        opacity: 50%;
        @media screen and (max-device-width: 1400px) {
            font-size: 1.4rem;
        }
        @media screen and (max-width: 960px) {
            font-size: 1.15rem;
        }
    }
    :focus{
        outline: 3px solid #6EDAE4;
        border: 1px solid #6EDAE4;
        transition: all 0.2s ease-out;
        @media screen and (max-width: 960px) {
            outline: 1px solid #6EDAE4;
            border: 1px solid #6EDAE4;
    }
    }
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 1.3rem;
    }
`

export const ButtonWrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    align-self: center;
    float: right;
    gap: 3rem;
    @media only screen and (max-width: 960px){
        width: 100%;
        flex-direction: column-reverse;
        gap: 1rem;
        padding-top: 5%;
    }
    
`;

export const CancelButton = styled(Button)`
    background: none;
    outline: 2px solid #6EDAE4;
    &:hover {
        transition: all 0.3s ease-out;
        background: none;
        color: #4D5053;
        outline: 2px solid #C9EFF2;
    }
    :active{
        outline: 2px solid #22B3E4;
        background: none;
    }

` 