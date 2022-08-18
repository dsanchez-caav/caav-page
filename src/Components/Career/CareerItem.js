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

const CareerItem = () => {

    const [t, i18n] = useTranslation("global");
    return (
        <>
            <Item>
                <ItemConatainer>
                    <ItemRow className='left'>
                        <ItemColumn>
                            <TitleConatiner>
                                <Title>
                                    Account executive 
                                </Title>
                            </TitleConatiner>
                            <TitleConatiner>
                                <Title className='money'>
                                    $1'000.000
                                </Title>
                            </TitleConatiner>
                        </ItemColumn>
                        <ItemColumn>
                            <TextConatiner>
                                <Text>
                                    Bilingue
                                </Text>
                            </TextConatiner>
                        </ItemColumn>
                    </ItemRow>
                    <ItemRow className='right'>
                        <ItemColumn className='button'>
                            <ButtonContainer>
                                <Link to='/' >
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