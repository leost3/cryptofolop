import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  background: white;
  border-radius: 1rem;
  margin-bottom: 1rem;
`
type CardWrapperProps = {
  color: string
}

export const CardWrapper = styled.div<CardWrapperProps>`
  border: 1px solid black;
  border-radius: 1rem;
  border-left: 1rem solid ${props => props.color};
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
