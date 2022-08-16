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
    window.scrollTo(0, 0);
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
    function resetF() {
        window.scrollTo(0, 0);
    } 

    return (
        <>
            <FormSection>
                <Container>
                    <FormContainer>
                        <FormColumn onSubmit={sendEmail} ref={form} id="form">
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.name")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.name")} type="text" name="user_name" id="user_name" required>
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.email")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.email")} name="user_email" type="email" id="user_email" required>
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.phone")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput placeholder={t("contact.hints.phone")} type="tel" name="user_phone" id="user_phone" minLength={5} required>
                                </FormInput>
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.description")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA placeholder={t("contact.hints.description")} name="message" id="message" type="text" maxLength={300} required>
                                </TextFormA>
                            </InputContainer>
                            <ButtonWrapper>
                                <CancelButton type='reset' onClick={resetF}>
                                    {t("contact.form.buttonb")}
                                </CancelButton>
                                <Button type='submit' onClick={resetF}>
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

