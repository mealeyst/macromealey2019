import React from 'react'
import styled from 'styled-components'
export default {
  oxford: '#293242',
  periwinkle: '#9DA2AE',
  greySky: '#A4A3A1',
  ashBlonde: '#B3A188',
  gold: '#BD921A',
  black: '#2D2D2B',
  white: '#F6F6F0'
}

export const BaseColorSwatch = ({className, name}) => {
  return (
    <div className={className}>
      <i />
      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
    </div>
  )
}

export const ColorSwatch = styled(BaseColorSwatch)`
  i {
    display: block;
    background-color: ${props => props.color};
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 0.7rem;
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4);
    margin-bottom: 0.5rem;
  }
  > span {
    ${props => props.theme.fontSize('18px')}
    color: ${props => props.theme.colors.black};
    ${props => props.theme.fonts.raleway}
  }
`
