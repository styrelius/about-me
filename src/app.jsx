import React from 'react'
import styled, { keyframes, css } from 'styled-components/macro'

import { Page } from './components/page'
import { GlobalStyles } from './styles/global-styles'
import { colors } from './styles/styles'
import { mobileScreen } from './styles/media-queries'

const { lavender, salmon } = colors

const ShiftingBackground = keyframes({
  '0%': {
    background: lavender,
  },
  '45%': {
    background: salmon,
  },
  '100%': {
    background: lavender,
  },
})

const APP_PADDING_TOP_BOTTOM = 16

const Background = styled.div({
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  padding: `${APP_PADDING_TOP_BOTTOM}px 32px`,
  animation: css`
    ${ShiftingBackground} 120s infinite linear
  `,

  [mobileScreen]: {
    padding: `${APP_PADDING_TOP_BOTTOM}px 12px`,
  },
})

export function App() {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Page appPaddingTopBottom={APP_PADDING_TOP_BOTTOM} />
      </Background>
    </>
  )
}
