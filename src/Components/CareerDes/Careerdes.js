import React from 'react'
import { Container } from '../../globlalStyles'
import {
    CareerContainer,
    Des,
    DesContainer,
    Title,
    TitleContainer,
    ListContainer,
    Listtext
} from './Careerdes.elements'
import { useTranslation } from 'react-i18next'

const Careerdes = ({ title, des, item1, item2, item3, item4, item5, title2, des2 }) => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <CareerContainer>
                <Container>
                    <TitleContainer>
                        <Title>
                            {t(title)}
                        </Title>
                    </TitleContainer>
                    <DesContainer>
                        <Des>
                            {t(des)}
                        </Des>
                    </DesContainer>
                    <ListContainer>
                        <Listtext>
                            {t(item1)}
                        </Listtext>
                        <Listtext>
                            {t(item2)}
                        </Listtext>
                        <Listtext>
                            {t(item3)}
                        </Listtext>
                        <Listtext>
                            {t(item4)}
                        </Listtext>
                        <Listtext>
                            {t(item5)}
                        </Listtext>
                    </ListContainer>
                    <TitleContainer>
                        <Title>
                            {t(title2)}
                        </Title>
                        <DesContainer>
                        <Des>
                            {t(des2)}
                        </Des>
                    </DesContainer>
                    </TitleContainer>
                </Container>
            </CareerContainer>
        </>
    )
}

export default Careerdes