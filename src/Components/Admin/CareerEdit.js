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
    ButtonWrapper,
    NavBtnLink
} from './Admin.elements'

import Swal from 'sweetalert2'

import { useTranslation } from 'react-i18next'


import editCareer from '../../Context/EditCareer'

import { useNavigate } from 'react-router-dom';

const CareerEdit = ({id, Name, Des, Sal, Loc}) => {


    const [t, i18n] = useTranslation("global");

    const navigate = useNavigate();

    const initialState = {
        Name: Name,
        Description: Des,
        Salary: Sal,
        Location: Loc
    }


    const [values, setState] = useState(initialState);


    const handleInputChange = e => {
        const { name, value } = e.target;
        setState({ ...values, [name]: value });
    };

    const handleReset = (e) => {
        navigate("/admin/career/table")
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
            timer: 2000,
            showConfirmButton: false,
        })

        e.preventDefault();
        if (values.Description == "" || values.Description.length < 10) {
            ToastE.fire({
                title: (t("admin.careeredit.deserror")),
            })
        } else if (values.Salary == "" || values.Salary < 1000000) {
            ToastE.fire({
                title: (t("admin.careeredit.salerror")),
            })
        } else if (values.Location == "") {
            ToastE.fire({
                title: (t("admin.careeredit.locerror")),
            })
        } else {
            editCareer(id, values)
            navigate("/admin/career/table")
            ToastA.fire({
                title: (t("admin.careeredit.aprove")),
            })

        }


    };

    return (
        <>
            <Container>
                <Title>
                    {t("admin.careeredit.title")}
                </Title>
                <Description>
                    {t("admin.careeredit.dest")}
                </Description>
            </Container>

            <FormSection>
                <Container>

                    <FormContainer>
                        <FormColumn onSubmit={handleSubmit} id="form">
                            <TextContainer>
                                <Description>
                                    {t("admin.careeredit.vname")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    type="text"
                                    name="Name"
                                    placeholder={t("admin.careerform.placename")}
                                    value={values.Name}
                                    contentEditable='false'
                                    disabled
                                />

                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("admin.careeredit.des")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA
                                    placeholder={t("admin.careerform.placedes")}
                                    type="text"
                                    name="Description"
                                    id="des"
                                    onChange={handleInputChange}
                                    value={values.Description}
                                />
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("admin.careeredit.sal")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    placeholder={t("admin.careerform.placesal")}
                                    type="number"
                                    name="Salary"
                                    id="salary"
                                    onChange={handleInputChange}
                                    value={values.Salary}
                                />
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    {t("admin.careeredit.loc")}
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput
                                    placeholder={t("admin.careerform.placeubi")}
                                    type="text"
                                    name="Location"
                                    id="loc"
                                    onChange={handleInputChange}
                                    value={values.Location}
                                />
                            </InputContainer>
                            <ButtonWrapper>
                                <NavBtnLink to="/admin/career/table">
                                <Button type='reset' className='cancel'>
                                    {t("contact.form.buttonb")}
                                </Button>
                                </NavBtnLink>
                                
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

export default CareerEdit