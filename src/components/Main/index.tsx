import * as S from './styles'

export const Main = ({
  title = 'React with NextJS',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Atom image of React in a Pink Badge" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="developer in front of a screen with code"
    />
  </S.Wrapper>
)
