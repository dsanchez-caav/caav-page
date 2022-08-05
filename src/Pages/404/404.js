import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { NotFound } from '../../Components';

const NotFoundP = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
            <title>CAAV - {t("pagestitles.page404")} </title>
            </Helmet>
            <NotFound />
        </>
    )
}

export default NotFoundP