import React from 'react'
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";


const CookieConsentC = () => {
    const [t, i18n] = useTranslation("global");

    return (
        <CookieConsent
            buttonText={t("cookie.button")}
            style={{ background: "#F0F0F0", color: "#262728", boxShadow:"0px -10px 30px rgba(0, 0, 0, 0.1)"}}
            buttonStyle={{ background: "#54DAE4", borderRadius:"10px", padding:"8px" }}>
            
            {t("cookie.text")}
        </CookieConsent>
    )
}

export default CookieConsentC