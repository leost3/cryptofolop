import styled from 'styled-components'

export const Main = styled.main.attrs({
  className: 'text-white w-full h-full'
})`
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
  & {
    > * {
      font-family: 'Bangers', cursive;
    }
  }
`

export const Header = styled.header.attrs({
  className:
    'p-9 text-red-500 items-center border-b-2 border-b-solid border-black flex justify-between'
})``

export const CryptoSection = styled.section.attrs({
  className: 'p-10'
})`
  & {
    > * {
      margin-bottom: 2rem;
    }
  }
`

export const IconsContainer = styled.div.attrs({
  className: 'flex items-center'
})`
  & {
    > * {
      margin-left: 1rem;
    }
  }
`
