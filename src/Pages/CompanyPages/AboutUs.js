import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    return (
        <>
            <Helmet>
            <title>CAAV - {t("pagestitles.pageabout")} </title>
            </Helmet>
        </>
    )
}

export default AboutUs