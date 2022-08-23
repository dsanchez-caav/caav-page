import React from 'react'
import {  Container } from '../../globlalStyles'
import getAllCareer from '../../Context/CareersContexts'
import {deleteCareer} from '../../Context/DeleteCareer'

import { CareerSection, Description, Title, Ctable, Ctd, Cth, Cthead, Ctr, Ctbody, ActionButton } from './Admin.elements'

import { useTranslation } from "react-i18next";



import { AiOutlineDelete } from "react-icons/ai";


const AdminCareer = () => {


    const handleDelete = (e, carrerid) => {
        e.preventDefault();
        deleteCareer(carrerid);

    }


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
                                <Cth className='actions'>
                                {t("admin.careertable.acc")}
                                </Cth>
                            </Ctr>
                        </Cthead>
                        <Ctbody>
                            {careersA && careersA.map((career, index) => (
                                <Ctr key={index} className='body'>
                                    <Ctd className='body'> {index +1} </Ctd>
                                    <Ctd > {career.data().Name} </Ctd>
                                    
                                    <Ctd >
                                        <ActionButton className='delete' onClick={handleDelete(career.id)}  >
                                            {career.id}
                                        <AiOutlineDelete />
                                        </ActionButton>
                                        <ActionButton>
                                            <AiOutlineDelete />
                                        </ActionButton>
                                    
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

export default AdminCareer