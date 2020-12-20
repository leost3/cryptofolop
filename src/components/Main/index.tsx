import React from 'react'

import * as S from './styles'


export const Main = () => {
  return (
    <S.MainWrapper>
      <S.Header>
        <p>image</p>
        <p>navbar</p>
      </S.Header>
      <S.Main>
        <S.IconsWrapper>
          <div>
            <p>darkMode Icon</p>
          </div>
          <S.DisplayModeWrapper>
            <div>icon</div>
            <div>icon</div>
          </S.DisplayModeWrapper>
        </S.IconsWrapper>
        <S.MainPortfolioContainer>
          <S.LabelSpan>Main Portfolio</S.LabelSpan>
          <S.Container>
            <S.TotalSpan>$93000</S.TotalSpan>
            <S.IconsContainer>
              <p>icon</p>
              <p>icon</p>
              <p>icon</p>
            </S.IconsContainer>
          </S.Container>
        </S.MainPortfolioContainer>
        <S.StyledInput />
        <S.CardContainer>
          <S.Wrapper>
            <S.ColoredBorder />
            <S.CardWrapper>
              <S.LeftWrapper>
                <S.LightIcon />
                <S.CryptoIcon />
                <span>Bitcoin</span>
                <span>4%</span>
              </S.LeftWrapper>
              <S.CardIconsWrapper>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
              </S.CardIconsWrapper>
            </S.CardWrapper>
          </S.Wrapper>

          <S.Wrapper>
            <S.ColoredBorder />
            <S.CardWrapper>
              <S.LeftWrapper>
                <S.LightIcon />
                <S.CryptoIcon />
                <span>Bitcoin</span>
                <span>4%</span>
              </S.LeftWrapper>
              <S.CardIconsWrapper>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
              </S.CardIconsWrapper>
            </S.CardWrapper>
          </S.Wrapper>

          <S.Wrapper>
            <S.ColoredBorder />
            <S.CardWrapper>
              <S.LeftWrapper>
                <S.LightIcon />
                <S.CryptoIcon />
                <span>Bitcoin</span>
                <span>4%</span>
              </S.LeftWrapper>
              <S.CardIconsWrapper>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
              </S.CardIconsWrapper>
            </S.CardWrapper>
          </S.Wrapper>

          <S.Wrapper>
            <S.ColoredBorder />
            <S.CardWrapper>
              <S.LeftWrapper>
                <S.LightIcon />
                <S.CryptoIcon />
                <span>Bitcoin</span>
                <span>4%</span>
              </S.LeftWrapper>
              <S.CardIconsWrapper>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
              </S.CardIconsWrapper>
            </S.CardWrapper>
          </S.Wrapper>
        </S.CardContainer>
      </S.Main>
    </S.MainWrapper>
  )
}
