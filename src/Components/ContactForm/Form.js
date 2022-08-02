import React from 'react'
import { Container } from '../../globlalStyles'
import {
    FormColumn,
    FormContainer,
    FormInput,
    FormSection,
    InputContainer,
    TextContainer,
    TextForm,
    TextFormA
} from './Form.elements'

import { useTranslation } from "react-i18next";

const Form = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <FormSection>
                <Container>
                    <FormContainer>
                        <FormColumn>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.name")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.name")}>
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.email")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.email")}>
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.phone")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.phone")}>
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.description")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA placeholder={t("contact.hints.description")} >
                                </TextFormA>
                            </InputContainer>
                        </FormColumn>
                    </FormContainer>
                </Container>
            </FormSection>
        </>
    )
}

export default Form