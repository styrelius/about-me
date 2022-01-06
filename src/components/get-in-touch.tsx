import React from 'react'
import styled from 'styled-components/macro'

import { fonts, fontSizes, linkStyles } from '../styles/styles'
import { mobileScreen } from '../styles/media-queries'

const Text = styled.p({
  fontFamily: fonts.playfairDisplay,
  fontSize: fontSizes.md,
})

const EMail = styled.a({
  ...linkStyles,
  fontSize: fontSizes.md,
  [mobileScreen]: {
    fontSize: fontSizes.mobileMd,
  },
})

export function GetInTouch() {
  return (
    <Text>
      Get in touch? <EMail href="mailto:hello@ellenstyrelius.net">hello@ellenstyrelius.net</EMail>
    </Text>
  )
}
