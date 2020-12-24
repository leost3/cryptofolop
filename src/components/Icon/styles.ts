import styled from 'styled-components'

type IconProps = {
  size?: string
}

export const Icon = styled.img<IconProps>`
  width: 3rem;
  height: 3rem;

  ${props =>
    props.size === 'small' && {
      width: '3rem',
      height: '3rem'
    }}

  ${props =>
    props.size === 'medium' && {
      width: '6rem',
      height: '12rem'
    }}
      
  ${props =>
    props.size === 'large' && {
      width: '12rem',
      height: '12rem'
    }}
`
