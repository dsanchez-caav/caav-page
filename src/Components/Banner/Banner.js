import React from 'react'
import {
    BannerSectionMar,
    BannerTagline,
    BannerTitle,
    BannerSectionSer,
    BannerSectionHr,
    BannerSectionDes,
    BannerDes
} from './Banner.elements'

import { useTranslation } from "react-i18next";

const Banner = ({ title, Subtitle, titletras, destras, desuni }) => {

    const [t, i18n] = useTranslation("global");
    
    if (title === "Services") {
        return (
            <BannerSectionSer>
            <BannerTagline >
                {Subtitle} 
            </BannerTagline>
            <BannerTitle>
                {t(titletras)} 
            </BannerTitle>
        </BannerSectionSer>
        )
        
    } else if (title === "Marketing") {
        return (

            <>
                <BannerSectionMar>
                    <BannerTagline >
                        {Subtitle} 
                    </BannerTagline>
                    <BannerTitle>
                        {t(titletras)} 
                    </BannerTitle>
                </BannerSectionMar>
                <BannerSectionDes>
                <BannerDes>
                        {t(destras)} 
                    </BannerDes>
                </BannerSectionDes>  
            </>
        )
    } else if (title === "Human Resources") {
        return (
            <>
                <BannerSectionHr>
                    <BannerTagline >
                        {Subtitle} 
                    </BannerTagline>
                    <BannerTitle>
                        {t(titletras)} 
                    </BannerTitle>
                </BannerSectionHr>
                <BannerSectionDes>
                <BannerDes>
                        {t(desuni)} 
                    </BannerDes>
                </BannerSectionDes>  
            </>
    
        )
    }
}

export default Banner