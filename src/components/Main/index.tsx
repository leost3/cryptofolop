import { Card } from 'components/Card'
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
    <S.Main>
      <S.Header>
        <p>image</p>
        <p>navbar</p>
      </S.Header>
      <S.CryptoSection>
        <div className="flex justify-between mb-10 text-black">
          <div>
            <p>darkMode Icon</p>
          </div>
          <div className="flex space-x-2">
            <div>icon</div>
            <div>icon</div>
          </div>
        </div>
        <div className="text-black px-5 py-10 border border-solid border-black rounded-2xl relative flex justify-between items-center">
          <p className="absolute left-1/2 transform -translate-x-1/2 text-5xl top-5">
            Main Portfolio
          </p>
          <p className="text-5xl">$93000</p>
          <S.IconsContainer>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </S.IconsContainer>
        </div>
        <div className="text-black flex flex-col">
          {coins.map(coin => {
            const { id, image, name, price_change_percentage_24h } = coin

            const increaseOrDecrease =
              price_change_percentage_24h > 0 ? increase : decrease

            const percentageColor =
              price_change_percentage_24h > 0 ? 'bg-green-500' : ' bg-red-500'

            return (
              <Card
                key={id}
                left={
                  <div className="center">
                    <Icon
                      className="p-2"
                      size="medium"
                      src={userHasCoin ? bitcoin_filled : bitcoin_empty}
                    />
                    <Icon size="large" src={image} />
                  </div>
                }
                center={<p className="text-8xl">{name.toUpperCase()}</p>}
                right={
                  <div className="center content-between space-x-4">
                    <div className={`badge ${percentageColor}`}>
                      {`${price_change_percentage_24h.toFixed(2)} %`}
                    </div>

                    <Icon src={increaseOrDecrease} size="medium" />
                    <Icon src={laptop} size="medium" />
                  </div>
                }
              />
            )
          })}
        </div>
      </S.CryptoSection>
    </S.Main>
  )
}
