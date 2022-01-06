import React from 'react'
import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes, linkStyles } from '../styles/styles'

const { helveticaNeue } = fonts

const Container = styled.section({
  width: '100%',
  padding: '24px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
const PresentationTextWrapper = styled.div({
  width: '100%',
  padding: '8px 0',
})
const PresentationText = styled.p({
  display: 'inline',
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
const Spacer = styled.div({
  height: 24,
})
const Link = styled.a({
  ...linkStyles,
})

export function Presentation() {
  return (
    <Container>
      <PresentationTextWrapper>
        <FirstWords>Hi, I'm Ellen </FirstWords>
        <PresentationText>
          - web developer obsessed with most things UX. Passionate about clean, readable, testable
          code, and elegant user-friendly interfaces. I also have a Bachelor of Fine Arts.
        </PresentationText>
      </PresentationTextWrapper>
      <PresentationTextWrapper>
        <PresentationText>
          Fan of typed systems and encapsulated components, who really enjoys figuring out how to
          build scalable front-end architecture.
        </PresentationText>
      </PresentationTextWrapper>
      <PresentationTextWrapper>
        <PresentationText>
          When I don't write code I like to spend my time drawing, sewing, going to exhibitions or
          having dinner with friends.
        </PresentationText>
      </PresentationTextWrapper>
      <Spacer />
      <PresentationTextWrapper>
        <PresentationText>
          <FirstWords>Currently: </FirstWords>
          <Link target="_blank" href="https://www.hedvig.com/">
            Hedvig
          </Link>
          , Stockholm
        </PresentationText>
      </PresentationTextWrapper>
      <PresentationTextWrapper>
        <PresentationText>
          <FirstWords>Side project: </FirstWords>
          <Link target="_blank" href="https://clay.so/">
            Clay
          </Link>
        </PresentationText>
      </PresentationTextWrapper>
    </Container>
  )
}
