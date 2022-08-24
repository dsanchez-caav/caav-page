import React from 'react'
import { ACareerForm } from '../../Components'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const CareerAdd = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
                <title>CAAV {t("pagestitles.pageadminadd")} </title>
            </Helmet>
            <ACareerForm />
        </>
    )
}

export default CareerAdd