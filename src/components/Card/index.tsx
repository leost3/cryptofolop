import React, { PropsWithChildren, ReactNode } from 'react'

import * as S from './styles'

type CardProps = PropsWithChildren<{
  color?: string
  left?: ReactNode
  right?: ReactNode
}>

export function Card(props: CardProps) {
  const { children, left, right, color = '#000' } = props

  return (
    <S.Wrapper>
      <S.CardWrapper color={color}>
        {left}
        {children}
        {right}
      </S.CardWrapper>
    </S.Wrapper>
  )
}
