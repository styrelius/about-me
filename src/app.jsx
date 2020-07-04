import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

import { Page } from './components/page'
import { GlobalStyles } from './styles/global-styles'
import { colors } from './styles/styles'

const { lavender, salmon } = colors

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
const paddingTopBottom = 16

const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: ${paddingTopBottom}px 24px;
  animation: ${ShiftingBackground} 80s infinite linear;
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
