import React, { useRef } from 'react';
import { Button, Container } from '../../globlalStyles'
import {
    ButtonWrapper,
    FormColumn,
    FormContainer,
    FormInput,
    FormSection,
    InputContainer,
    TextContainer,
    TextForm,
    TextFormA,
    CancelButton
} from './Form.elements'

import { useTranslation } from "react-i18next";

import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0y5iw8f', 'template_wv3eeru', form.current, '9zEfrRSR762arBP9R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const [t, i18n] = useTranslation("global");


    return (
        <>
            <FormSection>
                <Container>
                    <FormContainer>
                        <FormColumn onSubmit={sendEmail} ref={form}>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.name")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.name")} type="text" name="user_name" required>
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.email")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.email")} name="user_email" type="email">
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.phone")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.phone")} name="user_phone">
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.description")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA placeholder={t("contact.hints.description")} name="message">
                                </TextFormA>
                            </InputContainer>
                            <ButtonWrapper>
                                <CancelButton type='reset'>
                                    {t("contact.form.buttonb")}
                                </CancelButton>
                                <Button type='submit' >
                                    {t("contact.form.buttona")}
                                </Button>
                            </ButtonWrapper>
                        </FormColumn>
                    </FormContainer>
                </Container>
            </FormSection>
        </>
    )
}

export default Form

