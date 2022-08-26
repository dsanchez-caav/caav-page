import React from 'react'
import { useTranslation } from 'react-i18next'
import { AContatctable } from '../../Components'
import { Helmet } from 'react-helmet'

const ConatctTable = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
                <title>CAAV {t("pagestitles.pageadmincon")} </title>
            </Helmet>
            <AContatctable />
        </>
    )
}

export default ConatctTable