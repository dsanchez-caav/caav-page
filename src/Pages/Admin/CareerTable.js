import React from 'react'
import { useTranslation } from 'react-i18next'
import { AdminCareer } from '../../Components'
import { Helmet } from 'react-helmet'

const CareerTable = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
                <title>CAAV {t("pagestitles.pageadmintable")} </title>
            </Helmet>
            <AdminCareer />
        </>
    )
}

export default CareerTable