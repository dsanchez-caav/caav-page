import React from 'react'
import { useTranslation } from 'react-i18next'
import { Banner, CareerDes, CareerTable } from '../../Components';
import { Helmet } from 'react-helmet'
import { BannerCareer, Careeritem1 } from './CareerData';

const Career = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
                <title>CAAV - {t("pagestitles.pageca")} </title>
            </Helmet>
            <Banner {...BannerCareer} />
            <CareerDes {...Careeritem1} />
            <CareerTable />
        </>
    )
}

export default Career