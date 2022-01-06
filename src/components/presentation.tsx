import React from 'react'
import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes, linkStyles } from '../styles/styles'
import { infoAboutMe, presentation } from '../text/presentation-text'

const { helveticaNeue } = fonts

const Container = styled.section({
  width: '100%',
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
  const { intro, paragraphs } = presentation

  return (
    <Container>
      {paragraphs.map((paragraph, index) => (
        <PresentationTextWrapper key={paragraph}>
          {index === 0 && <FirstWords>{intro + ' '}</FirstWords>}
          <PresentationText>{paragraph}</PresentationText>
        </PresentationTextWrapper>
      ))}
      <Spacer />
      {infoAboutMe.map(({ label, value, location, link }) => (
        <PresentationTextWrapper key={label}>
          <PresentationText>
            <FirstWords>{label + ': '}</FirstWords>
            <Link target="_blank" href={link}>
              {value}
            </Link>
            {location && ', ' + location}
          </PresentationText>
        </PresentationTextWrapper>
      ))}
    </Container>
  )
}
