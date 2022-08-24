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
    BannerTaglineA,
    BannerSectionCn,
    BannerSectionCa,
    BannerSectionJo
} from './Banner.elements'

import { useTranslation } from "react-i18next";
import { Container } from '../../globlalStyles';

const Banner = ({ title, Subtitle, titletras, destras, desuni, SubtitleA, SubtitleB, careerName, salary }) => {

    const [t, i18n] = useTranslation("global");

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', maximumFractionDigits: 0,
    });


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
                <BannerSectionAu >
                    <Container>
                        <BannerTagline className="caav">
                            {t(SubtitleA)}
                        </BannerTagline>
                        <BannerTitle className="caav">
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
    } else if (title === "Contact") {
        return (
            <>
                <BannerSectionCn>
                    <Container>
                        <BannerTagline >
                            {t(Subtitle)}
                        </BannerTagline>
                        <BannerTitle>
                            {t(titletras)}
                        </BannerTitle>
                    </Container>
                </BannerSectionCn>
            </>
        )
    } else if (title === "Careers") {
        return (
            <>
                <BannerSectionCa>
                    <Container>
                        <BannerTagline >
                            {t(Subtitle)}
                        </BannerTagline>
                        <BannerTitle>
                            {t(titletras)}
                        </BannerTitle>
                    </Container>
                </BannerSectionCa>
                <BannerSectionDes>
                    <Container>
                        <BannerDes>
                            {t(destras)}
                        </BannerDes>
                    </Container>
                </BannerSectionDes>
            </>
        )
    } else if (title === "Job") {
        return (
            <>
                <BannerSectionJo>
                    <Container>
                        <BannerTitle className='job'>
                            {careerName}
                        </BannerTitle>
                        <BannerTagline className='job'>
                            {formatter.format(salary)}
                        </BannerTagline>
                    </Container>
                </BannerSectionJo>
            </>
        )
    }
}

export default Banner