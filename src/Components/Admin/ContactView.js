import React, { useState, useRef  } from 'react';
import { Button, Container } from '../../globlalStyles'

import { useTranslation } from "react-i18next";

import { FormSection, FormContainer, FormColumn, TextContainer, InputContainer, TextFormA, FormInput, Description, TitleDiv, Title, ButtonWrapper, NavBtnLink } from './Admin.elements';
import { MdHome } from 'react-icons/md';




const FormView = ({name, email, phone, mess}) => {

    const initialState = {
    user_name: name,
    user_email: email,
    user_phone: phone,
    message: mess
}

    const [t, i18n] = useTranslation("global");


    const [values, setState] = useState(initialState);



    return (
        <>
            <FormSection>
                <Container>
                <TitleDiv>
                        <Title>
                            {t("admin.contact.viewT")}
                        </Title>
                        <ButtonWrapper>
                            <NavBtnLink to="/admin">
                                <Button>
                                    <MdHome color="#F9F9F9" />
                                </Button>
                            </NavBtnLink>
                        </ButtonWrapper>
                    </TitleDiv>
                    <FormContainer>
                        <FormColumn>
                            <TextContainer>
                                <Description>
                                    {t("contact.form.name")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    value={values.user_name} 
                                    disabled
                                />
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("contact.form.email")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    name="user_email"
                                    type="email"
                                    id="user_email"
                                    disabled
                                    value={values.user_email} 
                                />
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("contact.form.phone")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    type="tel"
                                    name="user_phone"
                                    id="user_phone"
                                    disabled
                                    value={values.user_phone} 
                                    />
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("contact.form.description")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA
                                    name="message"
                                    id="message"
                                    type="text"
                                    value={values.message}
                                    disabled
                                />
                            </InputContainer>
                        </FormColumn>
                    </FormContainer>
                </Container>
            </FormSection>
        </>
    )
}

export default FormView

