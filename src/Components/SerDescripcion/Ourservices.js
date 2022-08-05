import React from 'react'
import { Container } from '../../globlalStyles'
import {
    OurContainer,
    TitleContainer,
    OurTitle,
    CardRow,
    CardTitle,
    ServiceCard,
    ServicesColumn,
    CtitleCont,
    MarkIco,
    Icontainer,
    CLink,
    HRIco
} from './Ourservices.elements'
import { useTranslation } from "react-i18next";



const Ourservices = ({ title, ctitle1, ctitle2 }) => {

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <OurContainer>
                <Container>
                    <TitleContainer>
                        <OurTitle>
                            {t(title)}
                        </OurTitle>
                    </TitleContainer>
                    <ServicesColumn>  
                        <ServiceCard>
                        <CLink to="/Marketing">
                                <CardRow>
                                    <CtitleCont>
                                        <CardTitle>
                                            {t(ctitle1)}
                                        </CardTitle>
                                    </CtitleCont>
                                    <Icontainer>
                                        <MarkIco />
                                    </Icontainer>
                                </CardRow>
                                </CLink>
                        </ServiceCard>
                        <ServiceCard>
                        <CLink to="/Human-Resources">
                                <CardRow>
                                    <CtitleCont>
                                        <CardTitle>
                                            {t(ctitle2)}
                                        </CardTitle>
                                    </CtitleCont>
                                    <Icontainer>
                                        <HRIco />
                                    </Icontainer>
                                </CardRow>
                                </CLink>
                            </ServiceCard>
                    </ServicesColumn>
                </Container>
            </OurContainer>
        </>
    )
}

export default Ourservices