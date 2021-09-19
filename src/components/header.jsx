import React from 'react'
import styled from 'styled-components/macro'

import ellen from '../assets/ellen.jpg'
import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes } from '../styles/styles'

const { playfairDisplay, helveticaNeue } = fonts

const Container = styled.section({
  padding: '16px 0',
})

const Content = styled.div(({ headerContentWidth }) => ({
  width: headerContentWidth,
  maxWidth: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  [mobileScreen]: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
}))

const HeadingsWrapper = styled.div({
  padding: 8,
})

const Heading = styled.h1({
  fontFamily: playfairDisplay,
  fontSize: fontSizes.lg,
  fontWeight: 200,
  [mobileScreen]: {
    fontSize: fontSizes.mobileLg,
  },
})

const SubHeading = styled.h2({
  fontFamily: helveticaNeue,
  fontSize: fontSizes.sm,
  fontWeight: 200,
  textTransform: 'uppercase',
  lineHeight: 2,
  [mobileScreen]: {
    fontSize: fontSizes.mobileSm,
  },
})

const ImageWrapper = styled.div({
  padding: 8,
})

const Image = styled.img({
  height: 100,
  borderRadius: '200% 50%',
})

export function Header({ pageContentWrapperWidth }) {
  const headerContentWidth = (pageContentWrapperWidth / 3) * 2

  return (
    <Container>
      <Content headerContentWidth={headerContentWidth}>
        <ImageWrapper>
          <Image src={ellen} />
        </ImageWrapper>
        <HeadingsWrapper>
          <Heading>Ellen Styrélius</Heading>
          <SubHeading>front-end web developer</SubHeading>
        </HeadingsWrapper>
      </Content>
    </Container>
  )
}
