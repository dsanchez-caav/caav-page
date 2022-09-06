import React from 'react'
import { Container } from '../../globlalStyles'
import { Description, Subtitle, TermContainer, Title } from './Terms.elements.js'
import { useTranslation } from "react-i18next";


const Terms = () => {
    const [t, i18n] = useTranslation("terms");

    return (
        <>
            <TermContainer>
                <Container>
                    <Title>
                        {t("titles.termsuse")}
                    </Title>
                    <Description>
                        {t("terms.termsdes1")}
                    </Description>
                    <Description>
                        {t("terms.termsdes2")}
                    </Description>
                    <Description>
                        {t("terms.termsdes3")}
                    </Description>
                    <Subtitle>
                        {t("terms.termsdes4")}
                    </Subtitle>
                    <Description>
                        {t("terms.termsdes5")}
                    </Description>
                    <Description>
                        {t("terms.termsdes6")}
                    </Description>
                    <Description>
                        {t("terms.termsdes7")}
                    </Description>
                    <Description>
                        {t("terms.termsdes8")}
                    </Description>
                    <Description>
                        {t("terms.termsdes9")}
                    </Description>

                    <Description>
                        {t("terms.copy1")}
                    </Description>
                    <Description>
                        {t("terms.copy2")}
                    </Description>
                    <Description>
                        {t("terms.termsdes11")}
                    </Description>
                    <Description>
                        {t("terms.termsdes10")}
                    </Description>
                </Container>
            </TermContainer>
        </>
    )
}

export default Terms