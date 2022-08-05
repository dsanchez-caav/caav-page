import React from 'react'
import { useTranslation } from 'react-i18next'
import { Banner, Company, Contact } from '../../Components';
import { Helmet } from 'react-helmet'
import { BannerCareer } from './CareerData';

const Career = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
            <title>CAAV - {t("pagestitles.pageca")} </title>
            </Helmet>
            <Banner {...BannerCareer} />
        </>
    )
}

export default Career