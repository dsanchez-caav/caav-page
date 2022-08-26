import React from 'react'
import { AEditCareer } from '../../Components'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Getcareer from '../../Context/SearchCareer'

const CareerEdit = () => {
    let { id } = useParams();
    window.scrollTo(0, 0);
    const [t, i18n] = useTranslation("global");

    const [careers, setCareer] = React.useState([]);

    function ActualizarCareer(id) {
        Getcareer(id).then((careers) => {
            setCareer(careers);
        });
    }

    React.useEffect(() => {
        ActualizarCareer(id);
    }, []);


    return (
        <>
            <Helmet>
                <title>CAAV {t("pagestitles.pageeditcareer")} </title>
            </Helmet>
            {careers && careers.map((career) => (
                <>
                    <AEditCareer Name={career.data().Name} id={career.id} Des={career.data().Description} Loc={career.data().Location} Sal={career.data().Salary} />
                </>
            ))}

        </>
    )
}

export default CareerEdit