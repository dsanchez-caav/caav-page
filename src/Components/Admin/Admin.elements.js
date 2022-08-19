import styled from "styled-components";

/**
=========Career General styles=================
 */

export const Title = styled.h2`
    text-align: left;
    color: #262728;
    font-family: 'PT Sans', sans-serif;
    font-size: 4.6rem;
    padding-top: 5%;
    padding-bottom: 3%;
    @media screen and (max-width: 1400px){
        font-size: 4rem;
    }
    @media screen and (max-width: 960px){
        font-size: 2.4rem;
    }
`

export const Description = styled.p`
    text-align: left;
    font-family: 'Jost', sans-serif;
    font-size: 2rem;
    color: #262728;
    padding-bottom: 5%;
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
`
/**
========= Career Table styles =================
 */

export const CareerSection = styled.section`
    background: #F9F9F9;
    height: auto;
    padding-bottom: 5rem;
`

export const Ctable = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-family: 'Jost', sans-serif;
    font-size: 1.3rem;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    margin: auto;
    
`

export const Cthead = styled.thead`
    background-color: #009879;
    color: #ffffff;
    text-align: left;
`

export const Ctr = styled.tr`
    background-color: #009879;
    color: #ffffff;
    text-align: left;
    &.body{
        background-color: #f3f3f3;
        color: #262728;
        border-bottom: 1px solid #dddddd;
    }
    :last-of-type{
        border-bottom: 2px solid #009879;
    }
    :nth-of-type(even){
        background-color: #009879;
    }
`

export const Cth = styled.th`
    padding: 12px 15px;
    &.id{
        width: 15%;
    }
    &.name{
        width: 50%;
    }
    &.actions{
        width: 35%;
    }
`

export const Ctd = styled.td`
    padding: 12px 15px;
    
`

export const Ctbody = styled.tbody`
    border-bottom: 1px solid #dddddd;
`

/**
========= Career Form styles =================
 */

export const FormSection = styled.section`
    height: auto;
    background: #F9F9F9;
    padding-top: 5%;
    padding-bottom: 10%;
`
export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

export const FormColumn = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    align-self: center;
    width: 100%;
`

export const TextContainer = styled.div`
    width: 60%;
    padding-bottom: 1%;
    
`

export const InputContainer = styled.div`
    width: 60%;
    padding-bottom: 5%;
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
    }
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
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
        
    }
    :focus{
        outline: 3px solid #6EDAE4;
        border: 1px solid #6EDAE4;
        transition: all 0.2s ease-out;
    }
    @media screen and (max-device-width: 1400px) {
        font-size: 1.6rem;
    }
`