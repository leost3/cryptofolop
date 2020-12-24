import { Card } from 'components/Card'
import { CenteredBox } from 'components/CenteredBox'
import { Icon } from 'components/Icon'
import React from 'react'
import { Coin } from 'types'

import {
  bitcoin_empty,
  bitcoin_filled,
  decrease,
  increase,
  laptop,
} from '../../../utils/iconsPath'
import * as S from './styles'

type MainProps = {
  coins: Coin[]
}
export const Main = (props: MainProps) => {
  const { coins } = props

  // TODO: get this from api
  const userHasCoin = false

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
          {coins.map(coin => {
            const { id, image, name, price_change_percentage_24h } = coin

            const increaseOrDecrease =
              price_change_percentage_24h > 0 ? increase : decrease

            const percentageColor =
              price_change_percentage_24h > 0 ? 'green' : 'red'

            return (
              <Card
                key={id}
                left={
                  <CenteredBox>
                    <Icon
                      size="medium"
                      src={userHasCoin ? bitcoin_filled : bitcoin_empty}
                    />
                    <Icon size="large" src={image} />
                    <span>{name}</span>
                  </CenteredBox>
                }
                right={
                  <CenteredBox>
                    <span
                      style={{
                        color: percentageColor
                      }}
                    >
                      {price_change_percentage_24h}
                    </span>

                    <Icon src={increaseOrDecrease} size="medium" />
                    <Icon src={laptop} size="medium" />
                  </CenteredBox>
                }
              />
            )
          })}
        </S.CardContainer>
      </S.Main>
    </S.MainWrapper>
  )
}
