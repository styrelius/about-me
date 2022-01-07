import styled from 'styled-components/macro'

import { colors, spacingBaseValue } from '../styles/styles'
import { mobileScreen } from '../styles/media-queries'

import { Header } from './header'
import { Presentation } from './presentation'
import { Footer } from './footer'

export const PAGE_CONTENT_WRAPPER_WIDTH = 560

const Container = styled.div({
  background: colors.beige,
  width: '100%',
  minHeight: '100vh',
  padding: `${spacingBaseValue * 10}px ${spacingBaseValue * 6}px`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [mobileScreen]: {
    padding: `${spacingBaseValue * 6}px ${spacingBaseValue * 3}px`,
  },
})

const ContentWrapper = styled.div({
  width: PAGE_CONTENT_WRAPPER_WIDTH,
  maxWidth: '100%',
  display: 'grid',
  gridTemplateRows: 'auto auto 140px',
  gap: spacingBaseValue * 5,
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
