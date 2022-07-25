import React from 'react'
import { Banner } from '../../Components'
import { BannerServices } from './ServicesData'

const ServicesPrincipal = () => {
    return (
        <>
            <Banner {...BannerServices} />
        </>
    )
}

export default ServicesPrincipal