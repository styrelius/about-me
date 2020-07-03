import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

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

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  animation: ${ShiftingBackground} 16s infinite linear;
`

export function App() {
  return (
    <>
      <GlobalStyles />
      <Page>Ellen Styrélius</Page>)
    </>
  )
}
