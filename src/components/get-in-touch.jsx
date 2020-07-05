import React from 'react'
import styled from 'styled-components/macro'

import { fonts, colors } from '../styles/styles'

const { black, darkGrey } = colors

const Container = styled.section({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

const Text = styled.p({
  fontFamily: fonts.playfairDisplay,
})

const EMail = styled.a({
  fontFamily: fonts.helveticaNeue,
  color: black,
  fontSize: 18,
  ':hover, :focus': {
    color: darkGrey,
    outline: 'none',
  },
})

export function GetInTouch() {
  return (
    <Container>
      <Text>
        Get in touch?{' '}
        <EMail href="mailto:ellen.styrelius@gmail.com">ellen.styrelius@gmail.com</EMail>
      </Text>
    </Container>
  )
}
