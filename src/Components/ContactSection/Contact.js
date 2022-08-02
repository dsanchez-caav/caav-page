import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globlalStyles'
import {
    ContactSection,
    Contacttitle,
    Textcont,
    Titlecont,
    Buttoncont,
    Contacttext
} from './Contact.elements'
import { useTranslation } from 'react-i18next'


const Contact = ({ Ctitle, Cdescription, Cbutton }) => {

    const [t, i18n] = useTranslation("global");

    return (
        <ContactSection>
            <Container>
                <Titlecont>
                    <Contacttitle>
                        {t(Ctitle)}
                    </Contacttitle>
                </Titlecont>
                <Textcont>
                    <Contacttext>
                        {t(Cdescription)}
                    </Contacttext>
                </Textcont>
                <Buttoncont>
                    <Link to="/Contact">
                        <Button  fontBig primary>
                            {t(Cbutton)}
                        </Button>
                    </Link>
                </Buttoncont>
            </Container>
        </ContactSection>
        
    )
}

export default Contact