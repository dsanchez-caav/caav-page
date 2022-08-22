import React from 'react'
import { Container } from '../../globlalStyles'
import getAllCareer from '../../Context/CareersContexts'

import { CareerSection, Description, Title, Ctable, Ctd, Cth, Cthead, Ctr, Ctbody } from './Admin.elements'



const AdminCareer = () => {

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
                        Portal administrativo
                    </Title>
                    <Description>
                        portal 1
                    </Description>
                    <Ctable>
                        <Cthead>
                            <Ctr>
                                <Cth className='id'>
                                    ID
                                </Cth>
                                <Cth className='name'>
                                    Nombre
                                </Cth>
                                <Cth className='actions'>
                                    Acciones
                                </Cth>
                            </Ctr>
                        </Cthead>
                        <Ctbody>
                            {careersA && careersA.map((career, index) => (
                                <Ctr key={index} className='body'>
                                    <Ctd className='body'> {index + 1} </Ctd>
                                    <Ctd > {career.Name} </Ctd>
                                    <Ctd > B1 B2 </Ctd>
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