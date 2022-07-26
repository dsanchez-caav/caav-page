import React from 'react'
import { Banner } from '../../Components'
import { BannerHR } from './ServicesData'
import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";

const HumanService = () => {

    const [t, i18n] = useTranslation("global");


    return (
        
        <>
        <Helmet>
            <title>CAAV - {t("pagestitles.pagehr")} </title>
        </Helmet>
            <Banner {...BannerHR} />
        </>
    )
}

export default HumanService