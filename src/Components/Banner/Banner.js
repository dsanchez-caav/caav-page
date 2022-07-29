import React from 'react'
import {
    BannerSectionMar,
    BannerTagline,
    BannerTitle,
    BannerSectionSer,
    BannerSectionHr,
    BannerSectionDes,
    BannerDes,
    BannerSectionAu,
    BannerTaglineA
} from './Banner.elements'

import { useTranslation } from "react-i18next";
import { Container } from '../../globlalStyles';

const Banner = ({ title, Subtitle, titletras, destras, desuni, SubtitleA, SubtitleB }) => {

    const [t, i18n] = useTranslation("global");
    
    if (title === "Services") {
        return (
            <>
                <BannerSectionSer>
                    <Container>
                        <BannerTagline >
                        {Subtitle}
                        </BannerTagline>
                        <BannerTitle>
                            {t(titletras)}
                        </BannerTitle>
                    </Container>
                </BannerSectionSer>
            </>
        )
        
    } else if (title === "Marketing") {
        return (
            <>
                <BannerSectionMar>
                    <Container>
                        <BannerTagline >
                            {Subtitle}
                        </BannerTagline>
                        <BannerTitle>
                            {t(titletras)}
                        </BannerTitle>
                    </Container>
                </BannerSectionMar>
                <BannerSectionDes>
                    <Container>
                        <BannerDes>
                            {t(destras)}
                        </BannerDes>
                    </Container>
                </BannerSectionDes>
            </>
        )
    } else if (title === "Human Resources") {
        return (
            <>
                <BannerSectionHr>
                    <Container>
                        <BannerTagline >
                            {Subtitle}
                        </BannerTagline>
                        <BannerTitle>
                            {t(titletras)}
                        </BannerTitle>
                    </Container>
                </BannerSectionHr>
                <BannerSectionDes>
                    <Container>
                        <BannerDes>
                            {t(desuni)}
                        </BannerDes>
                    </Container>
                </BannerSectionDes>
            </>
        )
    } else if (title === "About Us") {
        return (
            <>
                <BannerSectionAu>
                <Container>
                <BannerTagline >
                        {t(SubtitleA)}
                    </BannerTagline>
                    <BannerTitle className='caav'>
                        {t(titletras)}
                    </BannerTitle>
                    <BannerTaglineA >
                        {t(SubtitleB)}
                    </BannerTaglineA>
                </Container>
                </BannerSectionAu>
                <BannerSectionDes>
                    <Container>
                        <BannerDes>
                            {t(destras)}
                        </BannerDes>
                    </Container>
                </BannerSectionDes>
            </>
        )
    }else if (title === "Contact") {
        return (
            <>
                <BannerSectionAu>
                <Container>
                <BannerTagline >
                        {t(SubtitleA)}
                    </BannerTagline>
                    <BannerTitle className='caav'>
                        {t(titletras)}
                    </BannerTitle>
                    <BannerTaglineA >
                        {t(SubtitleB)}
                    </BannerTaglineA>
                </Container>
                </BannerSectionAu>
                <BannerSectionDes>
                    <Container>
                        <BannerDes>
                            {t(destras)}
                        </BannerDes>
                    </Container>
                </BannerSectionDes>
            </>
        )
    }
}

export default Banner