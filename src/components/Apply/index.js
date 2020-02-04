import React from 'react'
import {ApplyContainer,BenefitContainer,Benefit,Centered,ButtonCTA,ApplyTitle} from './styles'

export const Apply = () => {
    return (
        <ApplyContainer>
            <BenefitContainer>
                <ApplyTitle>¿Por qué ser un solver?</ApplyTitle>
                <Benefit>» Presencia digital.</Benefit>
                <Benefit>» Más oportunidades con clientes.</Benefit>
                <Benefit>» Red de contactos.</Benefit>
            </BenefitContainer>
            <Centered><ButtonCTA to="/">Aplicar como Solver</ButtonCTA></Centered>
        </ApplyContainer>
    )
}
