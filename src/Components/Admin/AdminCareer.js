import React from 'react'
import { Container } from '../../globlalStyles'

import { CareerSection, Description, Title, Ctable, Ctd, Cth, Cthead, Ctr, Ctbody } from './Admin.elements'

const AdminCareer = () => {
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
                                    id
                                </Cth>
                                <Cth className='name'>
                                    name
                                </Cth>
                                <Cth className='actions'>
                                    actions
                                </Cth>
                            </Ctr>
                        </Cthead>
                        <Ctbody>
                            <Ctr className='body'>
                                <Ctd className='body'>
                                    id1
                                </Ctd>
                                <Ctd>
                                    name1
                                </Ctd>
                                <Ctd>
                                    action1
                                    action2
                                </Ctd>
                            </Ctr>
                            <Ctr className='body'>
                                <Ctd className='body'>
                                    id1
                                </Ctd>
                                <Ctd>
                                    name1
                                </Ctd>
                                <Ctd>
                                    action1
                                </Ctd>
                            </Ctr>
                            
                        </Ctbody>
                    </Ctable>
                </Container>
            </CareerSection>
        </>
    )
}

export default AdminCareer