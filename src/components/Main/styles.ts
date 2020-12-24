import styled from 'styled-components'

export const MainWrapper = styled.main`
  color: #ffffff;
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  > * {
    display: inline-block;
  }
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid black;
  padding: 1rem;
`

export const Main = styled.div`
  padding: 2rem;
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #000;
  padding: 1rem 1rem;
`

export const DisplayModeWrapper = styled.div`
  display: flex;
  & > * {
    margin-left: 1rem;
  }
`

export const MainPortfolioContainer = styled.div`
  color: #000;
  border-radius: 1rem;
  padding: 0em 1rem;
  height: 8rem;
  border: 1px solid black;
`

export const StyledInput = styled.input`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  display: block;
`

export const LabelSpan = styled.span`
  position: absolute;
  font-size: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
`

export const TotalSpan = styled.span`
  font-size: 3rem;
`
export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardContainer = styled.section`
  color: #000;
  display: flex;
  flex-direction: column;
`
export const CurrencyImage = styled.img`
  height: 10rem !important;
  width: 10rem !important;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  > *:not(:first-child) {
    margin-left: 1rem;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 1rem;
  }
`
