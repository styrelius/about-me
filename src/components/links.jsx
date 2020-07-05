import React from 'react'
import styled from 'styled-components/macro'

import { fonts, colors } from '../styles/styles'

const { black, darkGrey } = colors

const Container = styled.section({
  width: 480,
  maxWidth: '100%',
  height: 88,
  display: 'flex',
  alignItems: 'center',
})

const Link = styled.a({
  padding: 8,
  fontFamily: fonts.playfairDisplay,
  color: black,
  fontSize: 14,
  textTransform: 'uppercase',
  ':hover, :focus': {
    color: darkGrey,
    outline: 'none',
  },
})

const links = [
  { name: 'GitHub', url: 'https://github.com/styrelius' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ellen-styr%C3%A9lius-a55165183/' },
]

export function Links() {
  return (
    <Container>
      {links.map(({ url, name }) => (
        <Link href={url} target="_blank" key={url}>
          {'> '}
          {name}
        </Link>
      ))}
    </Container>
  )
}
