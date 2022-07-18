import React, {useState} from 'react'
import { ServicesDrop } from "./Menuitems"
import {
    Dropmenu,
    Dropitem,
    Droplink
} from "./Dropdown.elements"

import { useTranslation } from "react-i18next";

function Dropdown() {
    const [t, i18n] = useTranslation("global");
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <Dropmenu onClick={() => setDropdown(!dropdown)}>
                {ServicesDrop.map(item => {
                    return (
                        <Dropitem key={item.id}>
                            <Droplink to={item.path} onClick={() => setDropdown(false)}>
                                {t(item.tras)}
                            </Droplink>
                        </Dropitem>
                    )
                })}
            </Dropmenu>
        </>
    );
};

export default Dropdown