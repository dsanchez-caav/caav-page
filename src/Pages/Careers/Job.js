import React from 'react'
import { Banner } from '../../Components'
import Getcareer from '../../Context/SearchCareer'
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Job = () => {

    let { id } = useParams();
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
            {careers && careers.map((career) => (
                <Banner careerName={career.data().Name} title={"Job"} salary={career.data().Salary} />
            ))}
        </>
    )
}

export default Job