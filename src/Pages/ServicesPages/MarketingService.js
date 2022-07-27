import React from 'react'
import { Banner, Show, Contact } from '../../Components'
import { BannerMarketing, ShowitemsMar,ContactitemsMar } from './ServicesData'
import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";


const MarketingService = () => {
    
    window.scrollTo(0, 0);
    
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
            <title>CAAV - {t("pagestitles.pagemar")} </title>
            </Helmet>
            <Banner {...BannerMarketing} />
            <Show {...ShowitemsMar} />
            <Contact {...ContactitemsMar} />
        </>
    )
}

export default MarketingService