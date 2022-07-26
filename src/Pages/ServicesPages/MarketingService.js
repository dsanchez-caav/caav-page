import React from 'react'
import { Banner, Show } from '../../Components'
import { BannerMarketing, ShowitemsMar } from './ServicesData'
import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";


const MarketingService = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
            <title>CAAV - {t("pagestitles.pagemar")} </title>
            </Helmet>
            <Banner {...BannerMarketing} />
            <Show {...ShowitemsMar} />
        </>
    )
}

export default MarketingService