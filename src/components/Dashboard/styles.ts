import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
`
export const Section = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
`

export const Overview = styled.div`
  width: 782px;
  height: 446px;
  background-color: ${colors.blue};
  border-radius: 18px;
`
export const Services = styled.div`
  width: 530px;
  height: 446px;
  background-color: ${colors.blue};
  border-radius: 18px;
`
export const Title = styled.div`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
