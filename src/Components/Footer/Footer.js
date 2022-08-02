import React from 'react'
import {
    FooterSection,
    Contactinfo,
    FooterText,
    IcoContainer,
    InfoContainer,
    LinkContainer,
    Logocontainer,
    InfoRow,
    Phone,
    Mail,
    Location,
    Linkedin,
    Instagram,
    Facebook
} from './Footer.elements';
import { Container } from '../../globlalStyles'

import { useTranslation } from "react-i18next";


const Footer = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <FooterSection>
                <Container>
                    <Logocontainer>
                        {/* Aqui va el logo en un futuro */} 
                    </Logocontainer>
                    <InfoRow>
                        <InfoContainer>
                            <Contactinfo>
                                <IcoContainer href="tel:+13059986797">
                                    <Phone />
                                </IcoContainer>
                                <LinkContainer href="tel:+13059986797">
                                    <FooterText>
                                        USA: +1 (305) 998-6797
                                    </FooterText>
                                </LinkContainer>
                            </Contactinfo>
                            <Contactinfo>
                                <IcoContainer href="tel:+573013496784">
                                    <Phone />
                                </IcoContainer>
                                <LinkContainer href="tel:+573013496784">
                                    <FooterText>
                                        COL: +57 (301) 349-6784
                                    </FooterText>
                                </LinkContainer>
                            </Contactinfo>
                            <Contactinfo>
                                <IcoContainer href="mailto:info@caav.com.co">
                                    <Mail/>
                                </IcoContainer>
                                <LinkContainer >
                                    <FooterText>
                                        info@caav.com.co
                                    </FooterText>
                                </LinkContainer>
                            </Contactinfo>
                            <Contactinfo>
                                <IcoContainer href="https://goo.gl/maps/nobDJAwWm8VpmAkD9" rel='noopener' target='_blank'>
                                <Location/>
                                </IcoContainer>
                                <LinkContainer href="https://goo.gl/maps/nobDJAwWm8VpmAkD9" rel='noopener' target='_blank'>
                                    <FooterText>
                                    {t("footer.office")}
                                    </FooterText>
                                </LinkContainer>
                            </Contactinfo>
                        </InfoContainer>
                        <InfoContainer>
                            <Contactinfo>
                                <FooterText>
                                    {t("footer.media")}
                                </FooterText>
                            </Contactinfo>
                            <Contactinfo>
                                <IcoContainer href="https://www.linkedin.com/company/caav/?originalSubdomain=co" rel='noopener' target='_blank'>
                                    <Linkedin />
                                </IcoContainer>
                                <IcoContainer href="https://www.instagram.com/caav_is/?igshid=YmMyMTA2M2Y%3D" rel='noopener' target='_blank'>
                                    <Instagram />
                                </IcoContainer>
                                <IcoContainer>
                                    <Facebook/>
                                </IcoContainer>
                            </Contactinfo>
                        </InfoContainer>
                    </InfoRow>
                </Container>
            </FooterSection>
        </>
    )
}

export default Footer