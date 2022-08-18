import React from 'react'
import { Container } from '../../globlalStyles'
import CareerItem from './CareerItem'
import { TableContainer } from './CareerTable.elements'

const CareerTable = () => {
    return (
        <>
            <TableContainer>
                <Container>
                    <CareerItem />
                </Container>
            </TableContainer>
        </>
    )
}

export default CareerTable