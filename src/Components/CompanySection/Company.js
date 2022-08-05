import React from 'react'
import { Container } from '../../globlalStyles'
import {
    Companysection,
    Infocontainer,
    ImgContainer,
    TextContainer,
    Companytext,
    Companytitle,
    TitleContainer
} from './Company.elements'

import { useTranslation } from 'react-i18next'

const Company = ({ titleA, titleB, desA, desB, altA, altB, }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <Companysection>
                <Container>
                    <Infocontainer>
                        <ImgContainer className="vis">
                            <TitleContainer>
                                <Companytitle>
                                    {t(titleA)}
                                </Companytitle>
                            </TitleContainer>
                        </ImgContainer>
                        <TextContainer>
                            <Companytext>
                                {t(desA)}
                            </Companytext>
                        </TextContainer>
                    </Infocontainer>
                    <Infocontainer>
                        <ImgContainer className="mis">
                            <TitleContainer>
                                <Companytitle>
                                    {t(titleB)}
                                </Companytitle>
                            </TitleContainer>
                        </ImgContainer>
                        <TextContainer>
                            <Companytext>
                                {t(desB)}
                            </Companytext>
                        </TextContainer>
                    </Infocontainer>
                </Container>
            </Companysection>
        </>
    )
}

export default Company