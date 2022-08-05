import React from 'react'
import styled from 'styled-components'
import { Button, Container } from '../../globlalStyles'
import NotfoundImg from '../../Images/404/404.svg'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

const NotArea = styled.section`
    height: 100vh;
    background: #F9F9F9;
`

const NotContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 20%;
    flex-wrap: nowrap;
    @media screen and (max-device-width: 1400px) {
        padding-top: 10%;
    }
    @media screen and (max-width: 960px){
        flex-wrap: wrap;
        gap: 5rem;
    }

`

const NotRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 960px){
        gap: 2rem;
        width: 100%;
    }

`

const TitleNotC = styled.div`
`

const TitleNot = styled.h2`
    font-family: 'PT Sans', sans-serif;
    color: #222D5A;
    font-size: 6rem;
    @media screen and (max-device-width: 1400px) {
        font-size: 2.4rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 2.1rem;
        text-align: center;
    }
`

const TextNot = styled.p`
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

const ButtonNotC = styled(Link)`
    width: 100%;
    padding-top: 2rem;
`

const NotImg = styled.img`
    width: 100%;
    height: auto;
`

const NotFound = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <NotArea>
                <Container>
                    <NotContainer>
                        <NotRow>
                            <TitleNotC>
                                <TitleNot>
                                    404 OOPS !!
                                </TitleNot>
                            </TitleNotC>
                            <TitleNotC>
                                <TextNot>
                                    {t("404")}
                                </TextNot>
                            </TitleNotC>
                            <ButtonNotC to="/">
                                <Button primary>
                                    {t("404B")}
                                </Button>
                            </ButtonNotC>
                        </NotRow>
                        <NotRow>
                            <NotImg src={NotfoundImg} />
                        </NotRow>
                    </NotContainer>
                </Container>
            </NotArea>
        </>
    )
}

export default NotFound