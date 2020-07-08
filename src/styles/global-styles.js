import { createGlobalStyle } from 'styled-components/macro'

import { colors, fonts, fontSizes } from './styles'

export const GlobalStyles = createGlobalStyle({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: fonts.helveticaNeue,
    color: colors.black,
    fontSize: fontSizes.md,
    fontWeight: 200,
    minHeight: '100vh',
  },
  html: {
    overflowY: 'scroll',
  },
})
