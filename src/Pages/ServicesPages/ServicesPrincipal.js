import React from 'react'
import { Banner, Cards, Contact, Description } from '../../Components'
import { BannerServices, CardsSection, ContactitemsSer, Servicesitem1, Servicesitem2 } from './ServicesData'
import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";


const ServicesPrincipal = () => {

    window.scrollTo(0, 0);

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
            <title>CAAV - {t("pagestitles.pageser")} </title>
            </Helmet>
            <Banner {...BannerServices} />
            <Description {...Servicesitem1} />
            <Description {...Servicesitem2} />
            <Cards {...CardsSection} />
            <Contact {...ContactitemsSer} />
        </>
    )
}

export default ServicesPrincipal