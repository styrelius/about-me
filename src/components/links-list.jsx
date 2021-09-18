import React, { Fragment } from 'react'
import styled from 'styled-components/macro'

import { fonts, fontSizes, linkStyles } from '../styles/styles'

const { helveticaNeue } = fonts

const Link = styled.a({
  ...linkStyles,
  fontSize: fontSizes.sm,
  textTransform: 'uppercase',
})

const Divider = styled.span({
  fontFamily: helveticaNeue,
  fontSize: fontSizes.md,
})

const links = [
  { name: 'GitHub', url: 'https://github.com/styrelius' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ellen-styr%C3%A9lius-a55165183/' },
]

export function LinksList() {
  return links.map(({ url, name }, index) => (
    <Fragment key={url}>
      <Link href={url} target="_blank" key={url}>
        {name}
      </Link>
      {index < links.length - 1 && <Divider> | </Divider>}
    </Fragment>
  ))
}
