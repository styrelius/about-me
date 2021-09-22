import React from 'react'
import styled from 'styled-components/macro'

import { colors } from '../styles/styles'
import { mobileScreen } from '../styles/media-queries'

import { Header } from './header'
import { Presentation } from './presentation'
import { Footer } from './footer'

export const PAGE_CONTENT_WRAPPER_WIDTH = 560

const Container = styled.div`
  background: ${colors.beige};
  width: 100%;
  min-height: 100vh;
  padding: 80px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${mobileScreen} {
    padding: 48px 16px;
  }
`
const ContentWrapper = styled.div({
  width: PAGE_CONTENT_WRAPPER_WIDTH,
  maxWidth: '100%',
})

export function Page() {
  return (
    <Container>
      <ContentWrapper>
        <Header />
        <Presentation />
        <Footer />
      </ContentWrapper>
    </Container>
  )
}
