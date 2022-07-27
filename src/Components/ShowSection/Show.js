import React from 'react'
import {    
    ShowSection,
    ShowColumns,
    ShowCard,
    ShowRows,
    Titlecont,
    Texttitle,
    Textcont,
    Textdes
} from './Show.elements'
import { Container } from '../../globlalStyles'

import { useTranslation } from "react-i18next";


const Show = ({ titletrasC1,
    destrasC1,
    list1C1,
    list2C1,
    list3C1,
    titletrasC2,
    destrasC2,
    list1C2,
    list2C2,
    list3C2,
    titletrasC3,
    destrasC3,
    list1C3,
    list2C3,
    list3C3}) => {

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <ShowSection>
                <Container>
                    <ShowColumns>
                        <ShowCard>
                            <ShowRows>
                                <Titlecont>
                                    <Texttitle>
                                        {t(titletrasC1)}
                                    </Texttitle>
                                </Titlecont>
                                <Textcont>
                                    <Textdes>
                                        {t(destrasC1)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list1C1)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list2C1)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list3C1)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='separator'>
                                </Textcont>
                            </ShowRows>
                        </ShowCard>
                        <ShowCard>
                            <ShowRows>
                                <Titlecont>
                                    <Texttitle>
                                        {t(titletrasC2)}
                                    </Texttitle>
                                </Titlecont>
                                <Textcont>
                                    <Textdes>
                                        {t(destrasC2)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list1C2)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list2C2)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list3C2)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='separator'>
                                </Textcont>
                            </ShowRows>
                        </ShowCard>
                        <ShowCard>
                            <ShowRows>
                                <Titlecont>
                                    <Texttitle>
                                        {t(titletrasC3)}
                                    </Texttitle>
                                </Titlecont>
                                <Textcont>
                                    <Textdes>
                                        {t(destrasC3)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list1C3)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list2C3)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='list'>
                                    <Textdes>
                                        {t(list3C3)}
                                    </Textdes>
                                </Textcont>
                                <Textcont className='separator'>
                                </Textcont>
                            </ShowRows>
                        </ShowCard>
                    </ShowColumns>
                </Container>
            </ShowSection>
        </>
    )
}

export default Show