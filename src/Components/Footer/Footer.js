import React from 'react'
import { Link } from 'react-router-dom';
import {
    FooterSection,
    FooterColumn,
    FooterRow,
    FooterText,
    Phone,
    Mail,
    Location,
    Instagram,
    Linkedin,
    FooterIco,
    FooterLinktext,
    FooterIcoA
} from './Footer.elements';
import { Container, Button } from '../../globlalStyles'

import { useTranslation } from "react-i18next";


const Footer = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <FooterSection>
                <Container>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIco to="/">
                                <Phone />
                            </FooterIco>
                        </FooterColumn>
                        <FooterColumn className='text'>
                            <FooterLinktext to="/">
                                COL: +57 301-349-6784
                            </FooterLinktext>
                        </FooterColumn>
                            <FooterRow>
                                <FooterText>
                                {t("footer.media")}
                                </FooterText>
                            </FooterRow>
                    </FooterRow>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIco to="/">
                                <Phone />
                            </FooterIco>
                        </FooterColumn>
                        <FooterColumn className='text'>
                            <FooterLinktext to="/">
                                USA: +1 305-998-6797
                            </FooterLinktext>
                        </FooterColumn>
                            <FooterRow>
                                <FooterIcoA>
                                    <Instagram />
                                </FooterIcoA>
                                <FooterIcoA>
                                    <Linkedin />
                                </FooterIcoA>
                                <FooterIcoA>
                                    <Phone />
                                </FooterIcoA>
                            </FooterRow>
                    </FooterRow>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIcoA href="https://goo.gl/maps/N4maStp3zAgUWFKm9" rel='noopener' target='_blank'>
                                <Location />
                            </FooterIcoA>
                        </FooterColumn>
                        <FooterColumn className='text'>
                            <FooterLinktext to="/">
                                Calle 19 Norte 2N-29, 2202A, Santiago de Cali, Valle del Cauca 760046, CO
                            </FooterLinktext>
                        </FooterColumn>
                    </FooterRow>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIcoA to="/">
                                <Mail/>
                            </FooterIcoA>
                        </FooterColumn>
                        <FooterColumn className='text'>
                            <FooterLinktext to="/">
                                info@caav.com.co
                            </FooterLinktext>
                        </FooterColumn>
                    </FooterRow>
            </Container>
        </FooterSection>        
        </>
    )
}

export default Footer