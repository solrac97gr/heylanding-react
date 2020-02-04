import React from 'react'
import {AboutUSContainer,Objetive,AboutUsTitle,AboutUsContent,ObjetiveContainer} from './styles'

export const AboutUs = () => {
    return (
        <AboutUSContainer>
            <AboutUsTitle>Sobre nosotros.</AboutUsTitle>
            <AboutUsContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, optio fuga est dignissimos rem, minus omnis ut nemo eos consectetur enim, eligendi unde non? Cupiditate, dolor? Repudiandae corporis quos dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat reiciendis molestiae soluta earum libero placeat facilis quasi deserunt quos incidunt, et amet nobis voluptate iure. Non eius optio aliquam!</AboutUsContent>
            <ObjetiveContainer>
                <Objetive>Misión: Lorem ipsum dolor sit amet</Objetive>
                <Objetive>Visión: Lorem ipsum dolor sit amet</Objetive>
            </ObjetiveContainer>
        </AboutUSContainer>
    )
}
