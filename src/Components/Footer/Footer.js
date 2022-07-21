import React from 'react'
import { Link } from 'react-router-dom';
import {
    FooterSection,
    FooterColumn,
    FooterRow,
    FooterWrapper,
    FooterText,
    Phone,
    Mail,
    Location,
    FooterIco,
    FooterLinktext
} from './Footer.elements';
import { Container, Button } from '../../globlalStyles'


const Footer = () => {
    return (
        <>
            <FooterSection>
            <Container>
                <FooterRow>
                        <FooterColumn>
                            <FooterWrapper>
                                <FooterIco to="/">
                                    <FooterLinktext to="/">
                                        <Phone />COL: +57 301-349-6784
                                    </FooterLinktext>
                                </FooterIco>
                                <FooterIco to="/">
                                    <FooterLinktext to="/">
                                        <Phone/>USA: +1 305-998-6797
                                    </FooterLinktext>
                                </FooterIco>
                                <FooterIco to={ {pathname: "https://goo.gl/maps/eRVBsmF1ZK5v21xp9"}} target="_blank">
                                    <FooterLinktext to={ {pathname: "https://goo.gl/maps/eRVBsmF1ZK5v21xp9"}} target="_blank">
                                        <Location/>  Calle 19 Norte 2N-29, 2202A, Santiago de Cali, Valle del Cauca 760046, CO
                                    </FooterLinktext>
                                </FooterIco>
                                <FooterIco to="/">
                                    <FooterLinktext to="/">
                                        <Mail/> info@caav.com.co
                                    </FooterLinktext>
                                </FooterIco>
                        </FooterWrapper>
                    </FooterColumn>
                </FooterRow>
            </Container>
        </FooterSection>        
        </>
    )
}

export default Footer