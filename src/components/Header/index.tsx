import React from 'react'
import { Criar, HeaderContainer, Nick, Perfil, Search, Title } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Kades360</Title>
      <Search></Search>
      <Perfil>
        <Criar></Criar>
        <Nick></Nick>
      </Perfil>
    </HeaderContainer>
  )
}

export default Header
