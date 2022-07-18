import React, {useState} from 'react'
import { ServicesDrop, CompanyDrop } from "./Menuitems"
import {
    DropmenuS,
    DropmenuC,
    Dropitem,
    Droplink
} from "./Dropdown.elements"

import { useTranslation } from "react-i18next";

export function DropdownS() {
    const [t, i18n] = useTranslation("global");
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <DropmenuS className={dropdown ? "Drop-click" : "Dropmenu"} onClick={() => setDropdown(!dropdown)} >
                {ServicesDrop.map(item => {
                    return (
                        <Dropitem key={item.id}>
                            <Droplink to={item.path} onClick={() => setDropdown(false)}>
                                {t(item.tras)}
                            </Droplink>
                        </Dropitem>
                    )
                })}
            </DropmenuS>
        </>
    );
};


export function DropdownC() {
    const [t, i18n] = useTranslation("global");
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <DropmenuC className={dropdown ? "Drop-click" : "Dropmenu"} onClick={() => setDropdown(!dropdown)} >
                {CompanyDrop.map(item => {
                    return (
                        <Dropitem key={item.id}>
                            <Droplink to={item.path} onClick={() => setDropdown(false)}>
                                {t(item.tras)}
                            </Droplink>
                        </Dropitem>
                    )
                })}
            </DropmenuC>
        </>
    );
};
