import { Card } from 'components/Card'
import { Icon } from 'components/Icon'
import React from 'react'
import { Coin } from 'types'

import {
  bitcoin,
  bitcoin_empty,
  bitcoin_filled,
  decrease,
  dollar,
  grid,
  increase,
  laptop,
  list,
  money,
  moon,
  sun,
} from '../../../utils/iconsPath'
import * as S from './styles'

type MainProps = {
  coins: Coin[]
}
export const Main = (props: MainProps) => {
  const { coins } = props

  // TODO: get this from api
  const userHasCoin = false

  const global = {
    mode: 'dark',
    display: 'list'
  }

  return (
    <S.Main>
      <S.CryptoSection>
        <div className="flex justify-between mb-10 text-black">
          <div>
            <Icon src={global.mode === 'dark' ? sun : moon} />
          </div>
          <div className="flex">
            <Icon src={global.display ? grid : list} />
          </div>
        </div>
        <div className="text-black bg-white py-10 shadow-lg relative flex flex-col items-center space-y-5 ">
          <p className="text-5xl top-5">Main Portfolio</p>
          <p className="text-8xl flex items-center ">
            <Icon size="medium" src={dollar} />
            93000
          </p>
          <S.IconsContainer>
            <Icon src={bitcoin} />
            {/* TPDP: replace ny toggle component */}
            <p>toggle component</p>
            <Icon src={money} />
          </S.IconsContainer>
        </div>
        <div className="text-black flex flex-col">
          {coins.map(coin => {
            const {
              id,
              image,
              name,
              current_price,
              price_change_percentage_24h
            } = coin

            const increaseOrDecrease =
              price_change_percentage_24h > 0 ? increase : decrease

            const percentageColor =
              price_change_percentage_24h > 0 ? 'bg-green-500' : ' bg-red-500'

            return (
              <Card
                className="shadow-md bg-white"
                key={id}
                left={
                  <div className="center space-y-6 flex flex-col">
                    <Icon
                      className="p-2"
                      src={userHasCoin ? bitcoin_filled : bitcoin_empty}
                    />
                    <Icon size="large" src={image} />
                    <p className="text-4xl">{name.toUpperCase()}</p>
                  </div>
                }
                center={
                  <div className="py-20">
                    <p className="text-6xl  sm:text-8xl">{`$ ${current_price.toFixed(
                      2
                    )}`}</p>
                  </div>
                }
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
