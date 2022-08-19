import React from 'react'
import { Container } from '../../globlalStyles'
import {
    Title,
    Description,
    FormContainer,
    FormColumn,
    FormSection,
    FormInput,
    InputContainer,
    TextContainer,
    TextFormA
} from './Admin.elements'

const CareerForm = () => {
    return (
        <>
            <FormSection>
                <Container>
                    <Title>
                        Portal administrativo
                    </Title>
                    <Description>
                        portal 1
                    </Description>
                    <FormContainer>
                        <FormColumn>
                            <TextContainer>
                                <Description>
                                    holi
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput/>
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    holi2
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <TextFormA/>
                            </InputContainer>
                            <TextContainer>
                                <Description>
                                    holi
                                </Description>
                            </TextContainer>
                            <InputContainer>
                                <FormInput/>
                            </InputContainer>
                        </FormColumn>
                    </FormContainer>
                </Container>
                
            </FormSection>
        </>
    )
}

export default CareerForm