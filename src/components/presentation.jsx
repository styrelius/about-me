import React from 'react'
import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes, linkStyles } from '../styles/styles'

const { helveticaNeue } = fonts

const Container = styled.section({
  width: 560,
  maxWidth: '100%',
  padding: '24px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const PresentationText = styled.div({
  width: '100%',
  padding: '8px 0',
  fontFamily: helveticaNeue,
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

const Link = styled.a({
  ...linkStyles,
})

export function Presentation() {
  return (
    <Container>
      <PresentationText>
        <FirstWords>Hi, I'm Ellen</FirstWords> - web developer obsessed with most things UI/UX.
        Passionate about clean, readable, testable code. I have a Bachelor of Fine Arts, and have
        been called CSS nerd more than once.
        <PresentationText>
          If I get to choose I prefer working with React, TypeScript and some CSS-in-JS solution.
        </PresentationText>
      </PresentationText>
      <PresentationText>
        <FirstWords>Currently: </FirstWords>
        <Link target="_blank" href="https://www.hedvig.com/">
          Hedvig
        </Link>
        , Stockholm
      </PresentationText>
      <PresentationText>
        <FirstWords>Side project: </FirstWords>
        <Link target="_blank" href="https://clay.so/">
          Clay
        </Link>
      </PresentationText>
    </Container>
  )
}
