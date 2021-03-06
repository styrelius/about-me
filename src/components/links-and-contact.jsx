import React from 'react'
import styled from 'styled-components/macro'

import { Links } from './links'
import { GetInTouch } from './get-in-touch'

const Container = styled.div({
  width: 560,
  maxWidth: '100%',
  height: 240,
  padding: '64px 0',
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
