import React from 'react'
import { useTranslation } from 'react-i18next'
import { Banner, Company, Contact } from '../../Components';
import { BannerAu, CompanyInfo, Contactitemsau } from './CompanyData';
import { Helmet } from 'react-helmet'

const AboutUs = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
                <title>CAAV - {t("pagestitles.pageabout")} </title>
            </Helmet>
            <Banner {...BannerAu} />
            <Company {...CompanyInfo} />
            <Contact {...Contactitemsau} />
        </>
    )
}

export default AboutUs