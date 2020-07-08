import React from 'react'
import styled from 'styled-components/macro'

import ellen from '../assets/ellen.jpg'
import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes } from '../styles/styles'

const Container = styled.section({
  padding: '16px 0',
  display: 'flex',
  justifyContent: 'center',
})

const ContentsWrapper = styled.div({
  width: 380,
  maxWidth: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  [mobileScreen]: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})

const HeadingsWrapper = styled.div({
  padding: 8,
})

const Heading = styled.h1({
  fontFamily: fonts.playfairDisplay,
  fontSize: fontSizes.lg,
  fontWeight: 200,
  [mobileScreen]: {
    fontSize: fontSizes.mobileLg,
  },
})

const SubHeading = styled.h2({
  fontFamily: fonts.playfairDisplay,
  fontSize: fontSizes.sm,
  fontWeight: 200,
  textTransform: 'uppercase',
  lineHeight: 2,
  [mobileScreen]: {
    fontSize: fontSizes.sm,
  },
})

const ImageWrapper = styled.div({
  padding: 8,
})

const Image = styled.img({
  height: 100,
  borderRadius: '200% 50%',
})

export function Header() {
  return (
    <Container>
      <ContentsWrapper>
        <ImageWrapper>
          <Image src={ellen} />
        </ImageWrapper>
        <HeadingsWrapper>
          <Heading>Ellen Styrélius</Heading>
          <SubHeading>web developer</SubHeading>
        </HeadingsWrapper>
      </ContentsWrapper>
    </Container>
  )
}
