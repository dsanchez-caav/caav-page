import React from 'react'
import { Container, Button } from '../../globlalStyles'
import {
    InfoSec,
    InfoColumn,
    InfoRow,
    TextWrapper,
    TexTitle,
    TexDesc,
    Serlist,
    Serlink
} from './InfoSection.elements'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


const InfoSection = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow >
                        <InfoColumn>
                            <TextWrapper>
                                <TexTitle>
                                    {t("info_home.des.title")}
                                </TexTitle>
                                <TexDesc>
                                    {t("info_home.des.text")}
                                </TexDesc>
                                <Link to="/Services" >
                                    <Button primary fontBig>
                                        {t("info_home.des.button")}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <TextWrapper>
                                <Serlink to="/">
                                    {t("info_home.info.title_hr")}
                                </Serlink>
                                <Serlist>
                                    {t("info_home.info.ser_hr1")}
                                </Serlist>
                                <Serlist>
                                    {t("info_home.info.ser_hr2")}
                                </Serlist>
                                <Serlist>
                                    {t("info_home.info.ser_hr3")}
                                </Serlist>
                                <Serlink to="/Marketing" className='mk'>
                                    {t("info_home.info.title_mk")}
                                </Serlink>
                                <Serlist className='mk'>
                                    {t("info_home.info.ser_mk1")}
                                </Serlist>
                                <Serlist className='mk'>
                                    {t("info_home.info.ser_mk2")}
                                </Serlist>
                                <Serlist className='mk'>
                                    {t("info_home.info.ser_mk3")}
                                </Serlist>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection