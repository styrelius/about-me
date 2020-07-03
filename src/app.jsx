import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

import { GlobalStyles } from './styles/global-styles'
import { colors } from './styles/styles'

const { beige, lavender, salmon } = colors

const ShiftingBackground = keyframes`
  0% {
   background: ${salmon}
   };
   50% {
     background: ${lavender}
   };
   100% {
   background: ${salmon}
   };
`
const backgroundPadding = 24

const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: ${backgroundPadding}px;
  animation: ${ShiftingBackground} 20s infinite linear;
`
const Page = styled.div`
  background: ${beige};
  width: 100%;
  min-height: calc(100vh - (${backgroundPadding}px * 2));
  padding: 16px;
  border-radius: 4px;
`

export function App() {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Page>Ellen Styrélius</Page>
      </Background>
    </>
  )
}
