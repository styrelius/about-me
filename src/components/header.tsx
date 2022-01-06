import React, { useState } from 'react'
import styled from 'styled-components/macro'

import ellen from '../assets/ellen.jpg'
import { mobileScreen } from '../styles/media-queries'
import { fonts, fontSizes } from '../styles/styles'

const { playfairDisplay, helveticaNeue } = fonts

type ImageContainerProps = {
  hasImageLoaded: boolean
}

const Container = styled.section({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'start',
  [mobileScreen]: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})
const HeadingsWrapper = styled.div({
  padding: '0 16px',
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

const IMAGE_SIZE = 96

const ImageContainer = styled.div<ImageContainerProps>(({ hasImageLoaded }) => ({
  opacity: hasImageLoaded ? 1 : 0,
  height: IMAGE_SIZE,
  width: IMAGE_SIZE,
  transition: 'opacity 1s ease-in-out',
}))
const Image = styled.img({
  borderRadius: '200% 50%',
})

export function Header() {
  const [hasImageLoaded, setHasImageLoaded] = useState(false)

  return (
    <Container>
      <ImageContainer hasImageLoaded={hasImageLoaded}>
        <Image
          src={ellen}
          alt="Ellen waving"
          onLoad={() => setHasImageLoaded(true)}
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
        />
      </ImageContainer>
      <HeadingsWrapper>
        <Heading>Ellen Styrélius</Heading>
        <SubHeading>front-end web developer</SubHeading>
      </HeadingsWrapper>
    </Container>
  )
}
