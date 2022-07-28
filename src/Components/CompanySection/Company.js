import React from 'react'
import { Container } from '../../globlalStyles'
import {
    Companysection,
    Infocontainer,
    ImgContainer,
    TextContainer,
    Companytext,
    Img,
    Companytitle,
    TitleContainer
} from './Company.elements'

import VisImg from '../../Images/Company/Mision.jpg'
import MisImg from '../../Images/Company/Vision.jpg'


import { useTranslation } from 'react-i18next'

const Company = ({ titleA, titleB, desA, desB, altA, altB }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <Companysection>
                <Container>
                    <Infocontainer>
                        <ImgContainer>
                            <Img src={VisImg} alt={t(altA)} />
                        </ImgContainer>
                        <TextContainer>
                            <Companytext>
                                {t(desA)}
                            </Companytext>
                        </TextContainer>
                    </Infocontainer>
                    <Infocontainer>
                        <TextContainer>
                            <Companytext>
                                {t(desB)}
                            </Companytext>
                        </TextContainer>
                        <ImgContainer>
                            <Img src = {MisImg} alt={t(altB)} />
                        </ImgContainer>
                    </Infocontainer>
                </Container>
            </Companysection>
        </>
    )
}

export default Company