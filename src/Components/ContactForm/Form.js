import React, { useState, useEffect } from 'react';
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
    TextFormA
} from './Form.elements'
import { useTranslation } from "react-i18next";
//import emailjs from '@emailjs/browser';


const initialState = {
    user_name: "",
    user_email: "",
    user_phone: "",
    message: ""
}

const Form = () => {

    const [t, i18n] = useTranslation("global");
    function resetF() {
        window.scrollTo(0, 0);
    } 

    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { user_name, user_email, user_phone, message } = state;

    const handleInputChange = (e) => { 
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };


    const handleSubmit = (e) => { 
        e.preventDefault();
        if (!user_name || !user_email || !user_phone || !message) {
            alert("Vacio")
        }
    };

    
    return (
        <>
            <FormSection>
                <Container>
                    <FormContainer>
                        <FormColumn onSubmit={handleSubmit} id="form">
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.name")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    placeholder={t("contact.hints.name")}
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    value={user_name} 
                                    onChange={handleInputChange}
                                />
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.email")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    placeholder={t("contact.hints.email")}
                                    name="user_email"
                                    type="email"
                                    id="user_email"
                                    
                                    value={user_email} 
                                    onChange={handleInputChange}
                                />
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.phone")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    placeholder={t("contact.hints.phone")}
                                    type="tel"
                                    name="user_phone"
                                    id="user_phone"
                                    minLength={5}
                                    
                                    value={user_phone} 
                                    onChange={handleInputChange}
                                    />
                            </InputContainer>
                            <TextContainer>
                                <TextForm>
                                    {t("contact.form.description")}
                                </TextForm>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA
                                    placeholder={t("contact.hints.description")}
                                    name="message"
                                    id="message"
                                    type="text"
                                    maxLength={300}
                                    
                                    value={message}
                                    onChange={handleInputChange}
                                    onReset
                                />
                            </InputContainer>
                            <ButtonWrapper>
                                <Button type="reset" className='cancel'>
                                    {t("contact.form.buttonb")}
                                </Button>
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

