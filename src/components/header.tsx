import React, { useState } from 'react'
import styled from 'styled-components/macro'

import ellen from '../assets/ellen.jpg'
import { mobileScreen } from '../styles/media-queries'
import { colors, fonts, fontSizes, spacingBaseValue } from '../styles/styles'

const { playfairDisplay, helveticaNeue } = fonts
const { lightGrey } = colors

const IMAGE_SIZE = 96

type ImageContainerProps = {
  hasImageLoaded: boolean
}
const Container = styled.section({
  width: '100%',
  paddingBottom: spacingBaseValue * 2,
  display: 'grid',
  gap: spacingBaseValue * 3,
  gridAutoFlow: 'row',
  borderBottom: `1px dotted ${lightGrey}}`,
})
const ImageContainer = styled.div<ImageContainerProps>(({ hasImageLoaded }) => ({
  opacity: hasImageLoaded ? 1 : 0,
  height: IMAGE_SIZE,
  width: IMAGE_SIZE,
  transition: 'opacity 0.4s ease-out',
}))
const Image = styled.img({
  borderRadius: '200% 50%',
})
const HeadingsWrapper = styled.div({
  display: 'grid',
  gap: spacingBaseValue,
})
const Heading = styled.h1({
  fontFamily: playfairDisplay,
  fontSize: fontSizes.lg,
  fontWeight: 200,
  lineHeight: 1,
  [mobileScreen]: {
    fontSize: fontSizes.mobileLg,
  },
})
const SubHeading = styled.h2({
  fontFamily: helveticaNeue,
  fontSize: fontSizes.md,
  fontWeight: 200,
  lineHeight: 1,
  [mobileScreen]: {
    fontSize: fontSizes.mobileMd,
  },
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
        <SubHeading>Front-end web developer</SubHeading>
      </HeadingsWrapper>
    </Container>
  )
}
