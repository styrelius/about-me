import React from 'react'
import styled from 'styled-components/macro'

import { Links } from './links'
import { GetInTouch } from './get-in-touch'

const Container = styled.div({
  padding: '48px 16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export function LinksAndContact() {
  return (
    <Container>
      <Links />
      <GetInTouch />
    </Container>
  )
}
