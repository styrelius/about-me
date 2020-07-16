import React from 'react'
import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes } from '../styles/styles'

const Container = styled.section({
  width: 560,
  maxWidth: '100%',
  padding: '24px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const PresentationText = styled.p({
  width: '100%',
  padding: '4px 0',
  fontFamily: fonts.helveticaNeue,
  fontSize: fontSizes.md,
  fontWeight: 200,
  lineHeight: 1.2,
  letterSpacing: 0.3,
  [mobileScreen]: {
    fontSize: fontSizes.mobileMd,
  },
})

const FirstWords = styled.span({
  fontFamily: fonts.playfairDisplay,
})

export function Presentation() {
  return (
    <Container>
      <PresentationText>
        <FirstWords>Hi, I'm Ellen</FirstWords> - developer obsessed with most things UI/UX.
        Passionate about clean, readable, testable code. I have a Bachelor of Fine Arts, and have
        been called CSS nerd more than once.
      </PresentationText>
    </Container>
  )
}
