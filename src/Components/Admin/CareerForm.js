import React, { useState } from 'react'
import { Container, Button } from '../../globlalStyles'
import {
    Title,
    Description,
    FormContainer,
    FormColumn,
    FormSection,
    FormInput,
    InputContainer,
    TextContainer,
    TextFormA,
    ButtonWrapper
} from './Admin.elements'

import Swal from 'sweetalert2'

import { useTranslation } from 'react-i18next'

import addCareer from '../../Context/AddCareer'

import { useNavigate } from 'react-router-dom';

const CareerForm = () => {


    const [t, i18n] = useTranslation("global");

    const navigate = useNavigate();

    const initialState = {
        Name: "",
        Description: "",
        Salary: ""

    }

    const [values, setState] = useState(initialState);




    const handleInputChange = e => {
        const { name, value } = e.target;
        setState({ ...values, [name]: value });
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
        if (values.Name == "") {
            ToastE.fire({
                title: (t("admin.careerform.nameerror"))
            })

        } else if (values.Description == "" || values.Description.length < 10) {
            ToastE.fire({
                title: (t("admin.careerform.deserror")),
            })
        } else if (values.Salary == "" || values.Salary < 1000000) {
            ToastE.fire({
                title: (t("admin.careerform.salerror")),
            })
        } else {
            addCareer(values)
            ToastA.fire({
                title: (t("admin.careerform.aprove")),
                confirmButtonText: (t("admin.careerform.back")),

            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/admin/career/table")
                }
            })

            setState(initialState)

        }
        console.log(values)


    };

    return (
        <>
            <Container>
                <Title>
                    {t("admin.careerform.title")}
                </Title>
                <Description>
                    {t("admin.careerform.dest")}
                </Description>
            </Container>

            <FormSection>
                <Container>

                    <FormContainer>
                        <FormColumn onSubmit={handleSubmit} id="form">
                            <TextContainer>
                                <Description>
                                    {t("admin.careerform.vname")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    type="text"
                                    name="Name"
                                    onChange={handleInputChange}
                                    value={values.Name}
                                />
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("admin.careerform.des")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA

                                    type="text"
                                    name="Description"
                                    id="des"
                                    onChange={handleInputChange}
                                    value={values.Description}
                                />
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("admin.careerform.sal")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput

                                    type="number"
                                    name="Salary"
                                    id="salary"
                                    onChange={handleInputChange}
                                    value={values.Salary}
                                />
                            </InputContainer>
                            <ButtonWrapper>
                                <Button type='reset' onClick={handleReset} className='cancel'>
                                    {t("contact.form.buttonb")}
                                </Button>
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

export default CareerForm