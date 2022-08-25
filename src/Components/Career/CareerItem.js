import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../globlalStyles'

import {
    Item,
    ButtonContainer,
    ItemColumn,
    ItemConatainer,
    ItemRow,
    TextConatiner,
    Title,
    Text,
    TitleConatiner
} from './CareerItem.elements'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const CareerItem = ({ careerName, salary, carrerid }) => {


    
    const [t, i18n] = useTranslation("global");
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', maximumFractionDigits: 0,
    });

    return (
        <>
            <Item>
                <ItemConatainer>
                    <ItemRow className='left'>
                        <ItemColumn>
                            <TitleConatiner>
                                {window.innerWidth < 960 ? <Title>
                                    {careerName} 
                                </Title> : <Title>
                                    {careerName} &nbsp;
                                </Title>}
                            </TitleConatiner>
                            <TitleConatiner>
                                <Title className='money'>
                                    {formatter.format(salary)}
                                </Title>
                            </TitleConatiner>
                        </ItemColumn>
                        <ItemColumn>
                            <TextConatiner>
                                <Text>
                                    {t("career.req")}
                                </Text>
                            </TextConatiner>
                        </ItemColumn>
                    </ItemRow>
                    <ItemRow className='right'>
                        <ItemColumn className='button'>
                            <ButtonContainer>
                                <Link to={'/job/' + carrerid} >
                                    <Button complete >
                                        {t("career.buttoninfo")}
                                    </Button>
                                </Link>
                            </ButtonContainer>
                        </ItemColumn>
                    </ItemRow>
                </ItemConatainer>
            </Item>
        </>
    )
}

export default CareerItem