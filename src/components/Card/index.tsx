import React, { ReactNode } from 'react'

import * as S from './styles'


type CardProps = {
  left?: ReactNode
  right?: ReactNode
  center?: ReactNode
  className?: string
}

export function Card(props: CardProps) {
  const { center, left, right, className } = props

  return (
    <S.Card className={className}>
      {left}
      {center}
      {right}
    </S.Card>
  )
}
