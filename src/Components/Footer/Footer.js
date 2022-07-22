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
                        <FooterColumn className='ico'>
                            <FooterIco to="/">
                                <Phone />
                            </FooterIco>
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLinktext to="/">
                                COL: +57 301-349-6784
                            </FooterLinktext>
                        </FooterColumn>
                    </FooterRow>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIco to="/">
                                <Phone />
                            </FooterIco>
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLinktext to="/">
                                USA: +1 305-998-6797
                            </FooterLinktext>
                        </FooterColumn>
                    </FooterRow>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIco to="/">
                                <Location />
                            </FooterIco>
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLinktext to="/">
                                Calle 19 Norte 2N-29, 2202A, Santiago de Cali, Valle del Cauca 760046, CO
                            </FooterLinktext>
                        </FooterColumn>
                    </FooterRow>
                    <FooterRow>
                        <FooterColumn className='ico'>
                            <FooterIco to="/">
                                <Mail/>
                            </FooterIco>
                        </FooterColumn>
                        <FooterColumn>
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