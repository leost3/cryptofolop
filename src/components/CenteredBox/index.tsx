import { ReactNode } from 'react'

import * as S from './styles'


export function CenteredBox({ children }: { children: ReactNode }) {
  return <S.Box>{children}</S.Box>
}
