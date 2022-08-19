import React from 'react'
import { Banner } from '../../Components'
import { BannerCareer, BannerJob } from './CareerData'

const Job = () => {
    return (
        <>
            <Banner {...BannerJob} />
        </>
    )
}

export default Job