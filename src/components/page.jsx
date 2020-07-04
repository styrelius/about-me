import React from 'react'
import styled from 'styled-components/macro'

import { colors } from '../styles/styles'

import { Header } from './header'
import { Presentation } from './presentation'
import { Links } from './links'

const Container = styled.div`
  background: ${colors.beige};
  width: 100%;
  min-height: calc(100vh - (${({ appPadding }) => appPadding}px * 2));
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export function Page({ appPaddingTopBottom }) {
  return (
    <Container appPadding={appPaddingTopBottom}>
      <div>
        <Header />
        <Presentation />
      </div>
      <Links />
    </Container>
  )
}
