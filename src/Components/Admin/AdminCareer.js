import React from 'react'
import { Button, Container } from '../../globlalStyles'
import getAllCareer from '../../Context/CareersContexts'
import { deleteCareer } from '../../Context/DeleteCareer'
import { CareerSection, Description, Title, Ctable, Ctd, Cth, Cthead, Ctr, Ctbody, ActionButton, ButtonWrapper, Addsection, NavBtnLink } from './Admin.elements'
import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from 'sweetalert2'


const AdminCareer = () => {

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', maximumFractionDigits: 0,
    });

    const [t, i18n] = useTranslation("global");

    const [careersA, setCareers] = React.useState([]);

    function ActualizarCareers() {
        getAllCareer().then((careersA) => {
            setCareers(careersA);
        });
    }

    React.useEffect(() => {
        ActualizarCareers();
    }, []);

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

    return (
        <>
            <CareerSection>
                <Container>
                    <Title>
                        {t("admin.careertable.title")}
                    </Title>
                    <Description>
                        {t("admin.careertable.des")}
                    </Description>
                    <Ctable>
                        <Cthead>
                            <Ctr>
                                <Cth className='id'>
                                    {t("admin.careertable.id")}
                                </Cth>
                                <Cth className='name'>
                                    {t("admin.careertable.name")}
                                </Cth>
                                <Cth className='sal'>
                                    {t("admin.careertable.sal")}
                                </Cth>
                                <Cth className='actions'>
                                    {t("admin.careertable.acc")}
                                </Cth>
                            </Ctr>
                        </Cthead>
                        <Ctbody>
                            {careersA && careersA.map((career, index) => (
                                <Ctr key={index} className='body'>
                                    <Ctd className='body'> {index + 1} </Ctd>
                                    <Ctd > {career.data().Name} </Ctd>
                                    <Ctd > {formatter.format(career.data().Salary)} </Ctd>
                                    <Ctd >
                                        <ButtonWrapper className='table'>
                                            <ActionButton className='delete' onClick={() => {
                                                deleteCareer(career); ActualizarCareers(); ToastE.fire({
                                                    title: (t("admin.careertable.del"))
                                                })
                                            }}>
                                                <MdDelete />
                                            </ActionButton>
                                        </ButtonWrapper>
                                        <ButtonWrapper className='table'>
                                            <ActionButton>
                                                <MdEdit />
                                            </ActionButton>
                                        </ButtonWrapper>
                                    </Ctd>
                                </Ctr>
                            ))}
                        </Ctbody>
                    </Ctable>

                    <Addsection>
                        <NavBtnLink to="/admin/career/create">
                            <Button>
                                Añadir
                            </Button>
                        </NavBtnLink>


                    </Addsection>

                </Container>
            </CareerSection>
        </>
    )
}

export default AdminCareer