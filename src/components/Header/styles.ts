import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: ${colors.blue};
  height: 140px;
  color: ${colors.white};
  flex-shrink: 0;
`
export const Title = styled.div`
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const Perfil = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`
export const Search = styled.div`
  background-color: ${colors.white};
  width: 427px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 60px;
`
export const Criar = styled.div`
  background-color: ${colors.white};
  text-align: center;
  color: #000;
  width: 144px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 60px;
`
export const Nick = styled.div`
  background-color: ${colors.white};
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 50%;
`
