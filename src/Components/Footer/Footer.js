import React from 'react'
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
    FooterIcoA,
    Facebook,
    FooterAtext
} from './Footer.elements';
import { Container } from '../../globlalStyles'

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
                        <FooterColumn className='separator'>
                        </FooterColumn>
                        <FooterColumn className='network'>
                                    <FooterText>
                                        {t("footer.media")}
                                    </FooterText>
                        </FooterColumn>
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
                        <FooterColumn className='separator'>
                        </FooterColumn>
                        <FooterColumn className='networkI'>
                            <FooterIcoA href="https://www.instagram.com/caav_is/?igshid=YmMyMTA2M2Y%3D" rel='noopener' target='_blank'>
                                <Instagram />
                            </FooterIcoA>
                            <FooterIcoA href="https://www.linkedin.com/company/caav/?originalSubdomain=co" rel='noopener' target='_blank'>
                                <Linkedin />
                            </FooterIcoA>
                            <FooterIcoA>
                                <Facebook />
                            </FooterIcoA>
                        </FooterColumn>
                    </FooterRow>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIcoA href="https://goo.gl/maps/N4maStp3zAgUWFKm9" rel='noopener' target='_blank'>
                                <Location />
                            </FooterIcoA>
                        </FooterColumn>
                        <FooterColumn className='text'>
                            <FooterAtext href="https://goo.gl/maps/N4maStp3zAgUWFKm9" rel='noopener' target='_blank'>
                                Calle 19 Norte 2N-29, 2202A, Santiago de Cali, Valle del Cauca 760046, CO
                            </FooterAtext>
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