import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.section({
  width: '100%',
  padding: '8px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const PresentationText = styled.p({
  width: 460,
  maxWidth: '100%',
  padding: 4,
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 18,
  fontWeight: 200,
  lineHeight: 1.2,
  letterSpacing: 0.3,
})

const FirstLine = styled.span({
  fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
})

const TechText = styled(PresentationText)({
  fontSize: 14,
})

export function Presentation() {
  return (
    <Container>
      <PresentationText>
        <FirstLine>Hi, I'm Ellen</FirstLine> - developer with a deep interest in most things UI/UX
        and a Bachelor of Fine Arts. Passionate about clean and simple code. Have been called CSS
        nerd more than once.
      </PresentationText>
      <TechText>React, TypeScript, styled components, Node.JS, Jest</TechText>
    </Container>
  )
}
