import React from 'react'
import { Banner, Contact, Description } from '../../Components'
import { BannerServices, ContactitemsSer, Servicesitem1, Servicesitem2 } from './ServicesData'
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
            <Contact {...ContactitemsSer} />
        </>
    )
}

export default ServicesPrincipal