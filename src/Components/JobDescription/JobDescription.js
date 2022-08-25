import React from 'react'
import { MdLocationOn, MdOutlineDateRange } from 'react-icons/md'
import { Container } from '../../globlalStyles'
import { DesContainer, Description, JobInfo, Subtitle, Title } from './JobDescription.elements'

const JobDescription = ({description, location, date}) => {
    return (
        <>
            <DesContainer>
                <Container>
                    <Title>
                        Descripcion de la vacante
                    </Title>
                    <Description>
                        {description}
                    </Description>
                    <Subtitle>
                        Requerimientos
                    </Subtitle>
                    <Description>
                        Aqui van dos elementos
                    </Description>
                    <Description>
                        Aqui van dos elementos
                    </Description>
                    <JobInfo>
                        <MdLocationOn/>&nbsp;  {location}
                    </JobInfo>
                    <JobInfo>
                        <MdOutlineDateRange/>&nbsp;  {date}
                    </JobInfo>
                </Container>
            </DesContainer>
        </>
    )
}

export default JobDescription