import React from 'react'
import { Container } from '../../globlalStyles'
import { InfoSec, InfoColumn, InfoRow, TextWrapper } from './InfoSection.elements'

const InfoSection = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow >
                        <InfoColumn>
                            <TextWrapper>
                                holi
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection