import React from 'react'
import styled from 'styled-components/macro'

import { fonts, colors } from '../styles/styles'

const { black, darkGrey } = colors

const Container = styled.section({
  width: '100%',
  padding: '32px 0',
  display: 'flex',
  justifyContent: 'center',
})

const Text = styled.p({
  fontFamily: fonts.playfairDisplay,
  fontSize: 18,
})

const EMail = styled.a({
  fontFamily: fonts.helveticaNeue,
  color: black,
  fontSize: 18,
  textDecoration: 'none',
  borderBottom: '1px solid' + black,
  ':hover, :focus': {
    color: darkGrey,
    borderColor: darkGrey,
    outline: 'none',
  },
})

export function GetInTouch() {
  return (
    <Container>
      <Text>
        Get in touch? <EMail href="mailto:hello@ellenstyrelius.net">hello@ellenstyrelius.net</EMail>
      </Text>
    </Container>
  )
}
