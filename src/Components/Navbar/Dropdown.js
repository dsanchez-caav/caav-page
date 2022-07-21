import React, {useState} from 'react'
import { ServicesDrop, CompanyDrop, languageDrop } from "./Menuitems"
import {
    DropmenuS,
    DropmenuC,
    DropmenuL,
    Dropitem,
    Droplink
} from "./Dropdown.elements"

import { useTranslation } from "react-i18next";

import { useLocation } from 'react-router-dom';

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

export function DropdownL() {
    let location = useLocation();
    const [t, i18n] = useTranslation("global");
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <DropmenuL className={dropdown ? "Drop-click" : "Dropmenu"} onClick={() => setDropdown(!dropdown)} >
                {languageDrop.map(item => {
                    if (item.id === 1) {
                        return (
                            <Dropitem key={item.id}>
                                <Droplink to={location} onClick={()=> i18n.changeLanguage("en") }  >
                                    {t(item.tras)}
                                </Droplink>
                            </Dropitem>
                        )
                    } else {
                        return (
                            <Dropitem key={item.id}>
                                <Droplink to= {location} onClick={()=> i18n.changeLanguage("es") }  >
                                    {t(item.tras)}
                                </Droplink>
                            </Dropitem>
                        )
                    }
                    
                })}
            </DropmenuL>
        </>
    );
};
