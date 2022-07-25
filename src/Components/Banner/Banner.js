import React from 'react'
import { BannerSectionMar, BannerTagline, BannerTitle, BannerSectionSer} from './Banner.elements'

const Banner = ({ title, Subtitle }) => {
    if (title === "Services") {
        return (
            <BannerSectionSer>
            <BannerTagline >
                {Subtitle} 
            </BannerTagline>
            <BannerTitle>
                {title}
            </BannerTitle>
        </BannerSectionSer>
        )
        
    } else if (title === "Marketing") {
        return (
            <BannerSectionMar>
            <BannerTagline >
                {Subtitle} 
            </BannerTagline>
            <BannerTitle>
                {title}
            </BannerTitle>
        </BannerSectionMar>
        )
    }
}

export default Banner