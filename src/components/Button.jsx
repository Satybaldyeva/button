import React from 'react'
import {styled} from 'styled-components'


export const Button = ({children, onClick, background}) => {
  return (
    <StyledButton onClick={onClick} backgtound={background}>{children}</StyledButton>
  )
}


const BACKGROUND_VARIANTS = {
    outlined: {
        default: 'white',
        hover: 'white',
        active: 'blue',
        disablet: 'white',
    },
    contained: {
        default: 'rgb(30 79 151)',
        hover: 'rgb(0 126 149)',
        active: 'blue',
        disablet: 'grey',
    },
    danger: {
        default: 'rgb(255 113 109)',
        hover: 'rgb(255 72 102)',
        active: 'rgb(244 0 58)',
        disablet: 'grey',
    },
    warning: {
        default: 'rgb(255 198 133)',
        hover: 'rgb(214 157 123)',
        active: 'rgb(220 105 0)',
        disablet: 'grey',
    },
}

const getBackgroundColor=(props)=>{
    const currentVariant = BACKGROUND_VARIANTS[props.background || 'outlined']
    return css `
        background-color: ${currentVariant.default};
        &:active:not(:disabled){
            background-color: ${currentVariant.active};
        }
        &:hover:not(:disabled){
            background-color: ${currentVariant.hover};
        }

    `
}

const StyledButton = styled('button') `

    width: 180px;
    height: 100px;
    border: none;
   
    background: ${getBackgroundColor}
`