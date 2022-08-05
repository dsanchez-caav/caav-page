import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Banner, Form } from '../../Components';
import { BannerCo } from './CompanyData';

const ContactUs = () => {
  window.scrollTo(0, 0);
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Helmet>
        <title>CAAV - {t("pagestitles.pagecontact")} </title>
      </Helmet>
      <Banner {...BannerCo} />
      <Form />
    </>
  )
}

export default ContactUs