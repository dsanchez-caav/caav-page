import React from 'react'
import { Container } from '../../globlalStyles'
import CareerItem from './CareerItem'
import { TableContainer } from './CareerTable.elements'
import getAllCareer from '../../Context/CareersContexts'

const CareerTable = () => {

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
            <TableContainer>
                <Container>
                    {careersA && careersA.map((career, index) => (
                        <CareerItem key={index} careerName={career.data().Name} salary={career.data().Salary}  carrerid={career.id} />
                    ))}
                </Container>
            </TableContainer>
        </>
    )
}

export default CareerTable