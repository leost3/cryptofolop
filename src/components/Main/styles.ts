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
  padding: 1rem;
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

export const IconsContainer = styled.div`
  display: flex;
  & > * {
    margin-left: 1rem;
  }
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardContainer = styled.div`
  width: 80%;
  margin: 3rem auto 1rem;
  color: #000;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;
  margin-bottom: 1rem;
  /* border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black; */
  border: 1px solid black;
`

export const ColoredBorder = styled.div`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background: orange;
  width: 2%;
  height: 100%;
  height: 10rem;
  border-right: 1px solid black;
`

export const CardWrapper = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  > *:not(:first-child) {
    margin-left: 1rem;
  }
`

export const LightIcon = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: green;
`

export const CryptoIcon = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background: orange;
`

export const CardIconsWrapper = styled.div`
  display: flex;
  > * {
    margin-left: 1rem;
  }
`
