import { createGlobalStyle } from 'styled-components/macro'

import { colors, fonts } from './styles'

export const GlobalStyles = createGlobalStyle({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: fonts.helveticaNeue,
    color: colors.black,
    fontSize: 16,
    fontWeight: 200,
    minHeight: '100vh',
  },
  html: {
    overflowY: 'scroll',
  },
})
