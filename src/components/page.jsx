import React from 'react'
import styled from 'styled-components/macro'

import { colors } from '../styles/styles'
import { mobileScreen } from '../styles/media-queries'

import { Header } from './header'
import { Presentation } from './presentation'
import { Links } from './links'
import { GetInTouch } from './get-in-touch'

const Container = styled.div`
  background: ${colors.beige};
  width: 100%;
  min-height: calc(100vh - (${({ appPadding }) => appPadding}px * 2));
  padding: 32px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobileScreen} {
    padding: 48px 16px;
  }
`

export function Page({ appPaddingTopBottom }) {
  return (
    <Container appPadding={appPaddingTopBottom}>
      <div>
        <Header />
        <Presentation />
      </div>
      <Links />
      <GetInTouch />
    </Container>
  )
}
