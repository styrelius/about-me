import React from 'react'
import styled from 'styled-components/macro'

import { fonts, colors } from '../styles/styles'

const { black, darkGrey } = colors

const Container = styled.section({
  width: 800,
  maxWidth: '100%',
  padding: '48px 0',
})

const Header = styled.h4({
  padding: 4,
  fontFamily: fonts.playfairDisplay,
  fontSize: 14,
  fontWeight: 200,
  textTransform: 'uppercase',
})

const Project = styled.div({
  padding: 4,
  fontFamily: fonts.playfairDisplay,
  fontSize: 18,
})

const Link = styled.a({
  color: black,
  textDecoration: 'none',
  borderBottom: '1px solid' + black,
  ':hover, :focus': {
    color: darkGrey,
    borderColor: darkGrey,
    outline: 'none',
  },
})

const Desc = styled.span({
  fontFamily: fonts.helveticaNeue,
})

const highlights = [
  {
    id: 'hl-calbird-refactoring',
    title: 'Calbird',
    url: 'https://calbird.com/',
    date: '2020',
    desc: 'Refactoring code base with React, TypeScript and Ruby on Rails',
  },
  {
    id: 'hl-auth-context',
    title: 'React auth context with hooks and TypeScript',
    url: 'https://github.com/styrelius/calbird-client/blob/master/src/context/auth-context.tsx',
    date: '2020',
  },
  {
    id: 'hl-request-hooks',
    title: 'React hooks for future request package',
    url: 'https://github.com/styrelius/react-request-hooks/blob/master/src/use-query.ts',
    date: '2020',
  },
  {
    id: 'hl-typescript',
    title: 'Starting to use TypeScript',
    date: 'February 2020',
  },
  {
    id: 'hl-vitamin-well',
    title: 'Vitamin Well',
    url: 'https://vitaminwell.flaivymarket.com/',
    date: '2019 / 2020',
    desc:
      'Building first version of B2B webshop for Vitamin Well in Sweden, with Next.js, Redux, Node.js.',
  },
]

export function Highlights() {
  return (
    <Container>
      <Header>Recent Highlights</Header>
      {highlights.map(({ id, title, url, date, desc }) => (
        <Project key={id}>
          {url ? (
            <Link href={url} target="_blank">
              {title}
            </Link>
          ) : (
            title
          )}
          {`, ${date} `}
          {desc && <Desc>- {desc}</Desc>}
        </Project>
      ))}
    </Container>
  )
}
