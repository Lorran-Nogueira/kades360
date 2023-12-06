import styled from 'styled-components'
import { colors } from '../../styles'

export const SideComponent = styled.aside`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 20px 18px;
  max-width: 320px;
  width: 100%;
`
export const Container = styled.div`
  position: fixed;
  top: 140px;
  left: 0;
  width: 320px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  z-index: 0;
`
export const Home = styled.div`
  background-color: ${colors.white};
  width: 284px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 60px;
`
