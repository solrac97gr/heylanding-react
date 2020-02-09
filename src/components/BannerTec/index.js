import React from 'react'
import {BannerTecContainer,MktTitle,Img} from './styles'
import solver from '../../static/images/solver.svg'


export const BannerTec = () => {
    return (
        <BannerTecContainer>
            <MktTitle>Tu técnico ideal a una llamada de distancia.</MktTitle>
            <Img src={solver} alt=""/>
        </BannerTecContainer>
    )
}
