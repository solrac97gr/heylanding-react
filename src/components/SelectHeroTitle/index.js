import React from 'react'
import {SelectHeroStyle,SelectTitleService} from './styles'

export const SelectHeroTitle = ({title}) => {
    return (
        <SelectHeroStyle>
            <SelectTitleService>{title}</SelectTitleService>
        </SelectHeroStyle>
    )
}
