import React from "react";
import { Container } from "../../globlalStyles";
import {
    DesSection,
    DesContainer,
    TitleContainer,
    TitleText,
    TextContainer,
    TextDes
} from "./SerDescription.elements";
import { useTranslation } from "react-i18next";

const SerDescription = ({ start, title, des }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <DesSection>
                <Container>
                    <DesContainer start={start}>
                        <TitleContainer  >
                            <TitleText>
                                {t(title)}
                            </TitleText>
                        </TitleContainer>
                        <TextContainer>
                            <TextDes>
                                {t(des)}
                            </TextDes>
                        </TextContainer>
                    </DesContainer>
                </Container>
            </DesSection>
        </>
    )
}

export default SerDescription