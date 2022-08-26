import React from 'react'
import { Container } from '../../globlalStyles'
import { CareerSection, NavBtnLink, AdminColumn, AdminCard, CardRow, CardTitle, Ctitle, Icontainer } from './Admin.elements'
import { useTranslation } from 'react-i18next'

const AdminPrincipal = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <>
            <CareerSection>
                <Container>
                    <AdminColumn>
                        <AdminCard>
                            <NavBtnLink to="/admin/contact/table">
                                <CardRow>
                                    <Ctitle>
                                        <CardTitle>
                                            {t("admin.principal.card1")}
                                        </CardTitle>
                                    </Ctitle>
                                </CardRow>
                            </NavBtnLink>
                        </AdminCard>
                        <AdminCard>
                            <NavBtnLink to="/admin/career/table">
                                <CardRow>
                                    <Ctitle>
                                        <CardTitle>
                                            {t("admin.principal.card2")}
                                        </CardTitle>
                                    </Ctitle>
                                </CardRow>
                            </NavBtnLink>
                        </AdminCard>
                    </AdminColumn>
                </Container>
            </CareerSection>
        </>
    )
}

export default AdminPrincipal