import React from 'react'
import { Container, Overview, Section, Services, Title } from './styles'

const Dasboard = () => {
  return (
    <>
      <Container className="container">
        <Title>Dashboard</Title>
        <Section>
          <Overview></Overview>
          <Services></Services>
        </Section>
      </Container>
    </>
  )
}

export default Dasboard
