import React, { ReactNode } from 'react'

type CardProps = {
  left?: ReactNode
  right?: ReactNode
  center?: ReactNode
}

export function Card(props: CardProps) {
  const { center, left, right } = props

  return (
    <div className="mb-8 rounded-xl border-l-8 border-l-red-500 border-l-solid border-solid border-2 border-gray  flex items-center p-4 flex-1 justify-between ">
      {left}
      {center}
      {right}
    </div>
  )
}
