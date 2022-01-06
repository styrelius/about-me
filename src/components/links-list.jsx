import { Fragment } from 'react'
import styled from 'styled-components/macro'

import { colors, fonts, fontSizes, linkStyles } from '../styles/styles'

import { Spacer } from './shared/spacer'

const { helveticaNeue } = fonts
const { darkGrey } = colors

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

const Link = styled.a({
  ...linkStyles,
  fontSize: fontSizes.sm,
})

const Divider = styled.span({
  fontFamily: helveticaNeue,
  fontSize: fontSizes.md,
  color: darkGrey,
})

const links = [
  { name: 'GitHub', url: 'https://github.com/styrelius' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ellen-styr%C3%A9lius-a55165183/' },
]

export function LinksList() {
  return (
    <Container>
      {links.map(({ url, name }, index) => (
        <Fragment key={url}>
          <Link href={url} target="_blank">
            {name}
          </Link>
          {index < links.length - 1 && (
            <>
              <Spacer size="sm" />
              <Divider>|</Divider>
              <Spacer size="sm" />
            </>
          )}
        </Fragment>
      ))}
    </Container>
  )
}
