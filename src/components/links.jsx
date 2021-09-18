import React, { Fragment } from 'react'
import styled from 'styled-components/macro'

import { colors, fonts, fontSizes } from '../styles/styles'

const { black, darkGrey } = colors
const { helveticaNeue } = fonts

const Link = styled.a({
  fontFamily: helveticaNeue,
  color: black,
  fontSize: fontSizes.sm,
  borderBottom: '1px solid' + black,
  textTransform: 'uppercase',
  textDecoration: 'none',
  ':hover, :focus': {
    color: darkGrey,
    borderColor: darkGrey,
    outline: 'none',
  },
})

const Divider = styled.span({
  fontFamily: helveticaNeue,
  fontSize: fontSizes.md,
})

const links = [
  { name: 'GitHub', url: 'https://github.com/styrelius' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ellen-styr%C3%A9lius-a55165183/' },
]

export function Links() {
  return links.map(({ url, name }, index) => (
    <Fragment key={url}>
      <Link href={url} target="_blank" key={url}>
        {name}
      </Link>
      {index < links.length - 1 && <Divider> | </Divider>}
    </Fragment>
  ))
}
