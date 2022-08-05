import React from 'react'
import { Banner, Contact, Show } from '../../Components'
import { BannerHR, Contactitemshr, Showitemshr } from './ServicesData'
import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";

const HumanService = () => {

    const [t, i18n] = useTranslation("global");
    window.scrollTo(0, 0);

    return (
        <>
            <Helmet>
                <title>CAAV - {t("pagestitles.pagehr")} </title>
            </Helmet>
            <Banner {...BannerHR} />
            <Show {...Showitemshr} />
            <Contact {...Contactitemshr} />
        </>
    )
}

export default HumanService