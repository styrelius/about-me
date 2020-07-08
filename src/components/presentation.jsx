import React from 'react'
import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes } from '../styles/styles'

const Container = styled.section({
  width: 640,
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
        <FirstWords>Hi, I'm Ellen</FirstWords> - developer obsessed with most things UI/UX and a
        Bachelor of Fine Arts. Passionate about clean and simple code. Have been called CSS nerd
        more than once.
      </PresentationText>
      <PresentationText>
        Huge fan of component driven development and of writing tests when they're needed.
      </PresentationText>
    </Container>
  )
}
