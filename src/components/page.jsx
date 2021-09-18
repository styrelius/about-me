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
  padding: 64px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${mobileScreen} {
    padding: 48px 16px;
  }
`
const TopOfPage = styled.div`
  max-width: 100%;
`

export function Page({ appPaddingTopBottom }) {
  return (
    <Container appPadding={appPaddingTopBottom}>
      <TopOfPage>
        <Header />
        <Presentation />
        <Links />
      </TopOfPage>
      <GetInTouch />
    </Container>
  )
}
