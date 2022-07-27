import React from 'react';
import { Hero, InfoSection } from '../../Components';
import { Helmet } from 'react-helmet'
import { useTranslation } from "react-i18next";


const Home = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <Helmet>
            <title>CAAV - {t("pagestitles.pagehome")} </title>
            </Helmet>
            <Hero />
            <InfoSection />
        </>
    );
};

export default Home;