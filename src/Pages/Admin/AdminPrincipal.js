import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Banner, CAdminPrincipal } from '../../Components';
import { UserAuth } from '../../Context/AuthContexts';

const AdminPrincipal = () => {
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");
    const { user } = UserAuth();
    console.log(user)

    return (
        <>
            <Helmet>
                <title>CAAV {t("pagestitles.pageadminadd")} </title>
            </Helmet>
            <Banner title={"Admin"}
                titletras={t("admin.principal.title")}
                Subtitle={t("admin.principal.sutitle")}
                destras={t("admin.principal.des1") + user.displayName + t("admin.principal.des2")}
            />
            <CAdminPrincipal/>
        </>
    )
}

export default AdminPrincipal