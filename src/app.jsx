import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

import { GlobalStyles } from './styles/global-styles'
import { colors } from './styles/styles'
import { Header } from './components/header'
import { Presentation } from './components/presentation'

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
const bgPaddingTopBottom = 16

const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: ${bgPaddingTopBottom}px 24px;
  animation: ${ShiftingBackground} 80s infinite linear;
`
const Page = styled.div`
  background: ${beige};
  width: 100%;
  min-height: calc(100vh - (${bgPaddingTopBottom}px * 2));
  padding: 32px 16px;
`

export function App() {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Page>
          <Header />
          <Presentation />
        </Page>
      </Background>
    </>
  )
}
