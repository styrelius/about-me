import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

import { Page } from './components/page'
import { GlobalStyles } from './styles/global-styles'
import { colors } from './styles/styles'
import { mobileScreen } from './styles/media-queries'

const { lavender, salmon } = colors

const ShiftingBackground = keyframes`
  0% {
   background: ${lavender}
   };
   50% {
     background: ${salmon}
   };
   100% {
   background: ${lavender}
   };
`
const paddingTopBottom = 16

const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: ${paddingTopBottom}px 32px;
  animation: ${ShiftingBackground} 120s infinite linear;
  ${mobileScreen} {
    padding: ${paddingTopBottom}px 12px;
  }
`

export function App() {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Page appPaddingTopBottom={paddingTopBottom} />
      </Background>
    </>
  )
}
