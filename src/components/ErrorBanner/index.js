import React from 'react'
import {ErrorContainer} from './styles'

export const ErrorBanner = ({error}) => {
    return (
        <ErrorContainer>
            {error}
        </ErrorContainer>
    )
}
