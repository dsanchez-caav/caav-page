import styled from "styled-components";

export const DesContainer = styled.section`
    padding-bottom: 5rem;
    padding-top: 2rem;
`

export const Title = styled.h2`
 justify-content: left;
    font-family: 'PT Sans', sans-serif;
    padding-top: 2%;
    font-size: 4.6rem;
    padding-bottom: 1rem;
    color: #262728;
    display: flex;
    align-items: flex-start;
    text-align: left;
    @media screen and (max-device-width: 1400px){
        font-size: 3.9rem;
    }
    @media screen and (max-width: 960px){
        justify-content: center;
        font-size: 2.4rem;
        text-align: center;
        padding-top: 3%;
        margin-bottom: 2rem;
    }

`

export const Description = styled.pre`
justify-content: left;
    padding-bottom: 3%;
    font-size: 2rem;
    text-align: left;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    color: #262728;
    line-height: normal;
        @media screen and (max-device-width: 1400px){
        font-size: 1.6rem;
    }
    @media screen and (max-width: 960px){
        
        font-size: 1.3rem;
        text-align: left;
        padding-top: 0;
    }

    white-space: pre-wrap;
`

export const Subtitle = styled.h3`
 justify-content: left;
    font-family: 'PT Sans', sans-serif;
    padding-top: 2%;
    font-size: 3.8rem;
    //margin-bottom: 3rem;
    color: #262728;
    display: flex;
    align-items: flex-start;
    text-align: left;
    padding-bottom: 1rem;
    @media screen and (max-device-width: 1400px){
        font-size: 3rem;
    }
    @media screen and (max-width: 960px){
        
        font-size: 1.8rem;
        text-align: left;
        padding-top: 20%;
        //margin-bottom: 2rem;
        padding-bottom: 1rem;
    }

`

export const JobInfo = styled.p`
justify-content: left;
    
    font-size: 1.5rem;
    text-align: left;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    color: #989898;
    line-height: normal;
        @media screen and (max-device-width: 1400px){
        font-size: 1.1rem;
    }
    @media screen and (max-width: 960px){
        
        font-size: 1rem;
        text-align: left;
        padding-top: 0;
    }

`