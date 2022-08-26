import React from 'react'
import { Button, Container } from '../../globlalStyles'
import getAllContacts from '../../Context/ContactContexts'
import { deleteContact } from '../../Context/DeleteContact'
import { CareerSection, Description, Title, Ctable, Ctd, Cth, Cthead, Ctr, Ctbody, ActionButton, ButtonWrapper, Addsection, NavBtnLink, TitleDiv } from './Admin.elements'
import { useTranslation } from "react-i18next";
import { MdDelete, MdRemoveRedEye, MdHome } from "react-icons/md";
import Swal from 'sweetalert2'


const AdminContact = () => {


    const [t, i18n] = useTranslation("global");

    const [contactsA, setContacts] = React.useState([]);

    function ActualizarContatcs() {
        getAllContacts().then((contactsA) => {
            setContacts(contactsA);
        });
    }

    React.useEffect(() => {
        ActualizarContatcs();
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
                    <TitleDiv>
                        <Title>
                            {t("admin.contact.title")}
                        </Title>
                        <ButtonWrapper>
                            <NavBtnLink to="/admin">
                                <Button>
                                    <MdHome color="#F9F9F9" />
                                </Button>
                            </NavBtnLink>
                        </ButtonWrapper>
                    </TitleDiv>
                    <Description>
                        {t("admin.contact.des")}
                    </Description>
                    <Ctable>
                        <Cthead>
                            <Ctr>
                                <Cth className='id'>
                                    {t("admin.contact.id")}
                                </Cth>
                                <Cth className='contactname'>
                                    {t("admin.contact.name")}
                                </Cth>
                                <Cth className='sal'>
                                    {t("admin.contact.email")}
                                </Cth>
                                <Cth className='actions'>
                                    {t("admin.contact.acc")}
                                </Cth>
                            </Ctr>
                        </Cthead>
                        <Ctbody>
                            {contactsA && contactsA.map((contact, index) => (
                                <Ctr key={index} className='body'>
                                    <Ctd className='body'> {index + 1} </Ctd>
                                    <Ctd > {contact.data().user_name} </Ctd>
                                    <Ctd > {contact.data().user_email} </Ctd>
                                    <Ctd >
                                        <ButtonWrapper className='table'>
                                            <ActionButton className='delete' onClick={() => {
                                                deleteContact(contact).then(
                                                    ActualizarContatcs(),
                                                    ToastE.fire({
                                                        title: (t("admin.contact.del"))
                                                    })
                                                )
                                            }}>
                                                <MdDelete />
                                            </ActionButton>
                                        </ButtonWrapper>
                                        <ButtonWrapper className='table'>
                                            <NavBtnLink to={"/admin/contact/view/" + (contact.id)}>
                                                <ActionButton >
                                                    <MdRemoveRedEye />
                                                </ActionButton>
                                            </NavBtnLink>
                                        </ButtonWrapper>
                                    </Ctd>
                                </Ctr>
                            ))}
                        </Ctbody>
                    </Ctable>
                </Container>
            </CareerSection>
        </>
    )
}

export default AdminContact