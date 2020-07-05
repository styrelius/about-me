import React from 'react'
import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { fonts } from '../styles/styles'

const Container = styled.section({
  width: '100%',
  padding: '16px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const PresentationText = styled.p({
  width: 480,
  maxWidth: '100%',
  padding: 4,
  fontFamily: fonts.helveticaNeue,
  fontSize: 18,
  fontWeight: 200,
  lineHeight: 1.2,
  letterSpacing: 0.3,
  [mobileScreen]: {
    fontSize: 16,
  },
})

const FirstWords = styled.span({
  fontFamily: fonts.playfairDisplay,
})

const TechText = styled(PresentationText)({
  fontSize: 14,
  [mobileScreen]: {
    fontSize: 14,
  },
})

export function Presentation() {
  return (
    <Container>
      <PresentationText>
        <FirstWords>Hi, I'm Ellen</FirstWords> - developer with a deep interest in all things UI/UX
        and a Bachelor of Fine Arts. Passionate about clean and simple code. Have been called CSS
        nerd more than once.
      </PresentationText>
      <TechText>
        Right now I'm mainly building things with React and TypeScript, and I think CSS-in-JS
        libraries like styled-components are awesome.
      </TechText>
    </Container>
  )
}
