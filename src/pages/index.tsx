import { Main } from 'components/Main'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { Coin } from 'types'

export default function Home({
  coins
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Main {...coins} />
}


export const getStaticProps: GetStaticProps = async () => {
  //TODO: import this url from process.env
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
  const res = await fetch(url)
  const coins: Coin[] = await res.json()

  return {
    props: {
      coins: {
        coins
      }
    }
  }
}
