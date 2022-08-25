import React, { useState, useRef  } from 'react';
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
import Swal from 'sweetalert2'
import { passMail } from '../../Resource/pass';

import addcontact from '../../Context/AddContact';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const initialState = {
    user_name: "",
    user_email: "",
    user_phone: "",
    message: ""
}

const Form = () => {

    const Aserviceid = passMail.serviceid
    const Atemplateid = passMail.templateid
    const Apublickey = passMail.publickey

    const [t, i18n] = useTranslation("global");

    const navigate = useNavigate();

    const form = useRef();

    function sendEmail() {
        emailjs.sendForm(Aserviceid, Atemplateid, form.current, Apublickey)
    };     


    var date = new Date();

    var careerDate = date.getDate()  + " - " + (date.getMonth()+1) + " /" + date.getFullYear()

    const [values, setState] = useState(initialState);




    const handleInputChange = e => {
        const { name, value } = e.target;
        setState({ ...values, [name]: value, ["Date"]: careerDate });
    };

    const handleReset = (e) => {
        setState(initialState)
        window.scrollTo(0, 0)
    }


    const handleSubmit = (e) => {


        const ToastE = Swal.mixin({
            toast: true,
            position: 'top-right',
            icon: 'error',
            background: '#f27474',
            iconColor: '#F9F9F9',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: false
        })



        const ToastA = Swal.mixin({
            toast: true,
            position: 'top-right',
            icon: 'success',
            background: '#a5dc86',
            iconColor: '#F9F9F9',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: true,
            confirmButtonColor: '#3085d6',


        })

        e.preventDefault();
        if (values.user_name == "") {
            ToastE.fire({
                title: (t("contact.form.nameerror"))
            })

        } else if (values.user_email == "") {
            ToastE.fire({
                title: (t("contact.form.mailerror")),
            })
        } else if (values.user_phone == "" || values.user_phone<5) {
            ToastE.fire({
                title: (t("contact.form.phoneerror")),
            })
        } else if (values.message == "" || values.message > 400) {
            ToastE.fire({
                title: (t("contact.form.messaerror")),
            })
        } else {
            addcontact(values)
            sendEmail()
            ToastA.fire({
                title: (t("contact.form.aprove")),
                confirmButtonText: (t("contact.form.back")),

            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/")
                }
            })

            setState(initialState)

        }
        console.log(values)


    };

    return (
        <>
            <FormSection>
                <Container>
                    <FormContainer>
                        <FormColumn onSubmit={handleSubmit} id="form" ref={form}>
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
                                    value={values.user_name} 
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
                                    
                                    value={values.user_email} 
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
                                    
                                    value={values.user_phone} 
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
                                    value={values.message}
                                    onChange={handleInputChange}
                                    onReset
                                />
                            </InputContainer>
                            <ButtonWrapper>
                                <Button type="reset" className='cancel' onClick={handleReset}>
                                    {t("contact.form.buttonb")}
                                </Button>
                                <Button type='submit'>
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

