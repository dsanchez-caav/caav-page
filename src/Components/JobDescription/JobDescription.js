import React from 'react'
import { MdLocationOn, MdOutlineDateRange } from 'react-icons/md'
import { Container } from '../../globlalStyles'
import { DesContainer, Description, JobInfo, Subtitle, Title } from './JobDescription.elements'

const JobDescription = ({ description, location, date }) => {
    return (
        <>
            <DesContainer>
                <Container>
                    <Title>
                        Descripción de la vacante
                    </Title>
                    <Description>
                        {description}
                    </Description>
                    <Subtitle>
                        Requerimientos
                    </Subtitle>
                    <Description className='list'>
                        Bilingüe
                    </Description>
                    <JobInfo>
                        <MdLocationOn />&nbsp;  {location}
                    </JobInfo>
                    <JobInfo>
                        <MdOutlineDateRange />&nbsp;  {date}
                    </JobInfo>
                    <Title>
                        ¿Te interesa la oferta?
                    </Title>
                    <Description>
                        Escríbenos un correo a careers@caav.com.co, incluye tu información de contacto y tu hoja de vida, estaremos en contacto contigo.
                    </Description>
                </Container>
            </DesContainer>
        </>
    )
}

export default JobDescription