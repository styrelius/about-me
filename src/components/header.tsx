import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { colors, fonts, fontSizes, spacingBaseValue } from '../styles/styles'

import { PictureOfMe } from './picture-of-me'

const { playfairDisplay, helveticaNeue } = fonts
const { lightGrey } = colors

const Container = styled.section({
  width: '100%',
  paddingBottom: spacingBaseValue * 2,
  display: 'grid',
  gap: spacingBaseValue * 3,
  gridAutoFlow: 'row',
  borderBottom: `1px dotted ${lightGrey}}`,
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
  return (
    <Container>
      <PictureOfMe />
      <HeadingsWrapper>
        <Heading>Ellen Styrélius</Heading>
        <SubHeading>Front-end web developer</SubHeading>
      </HeadingsWrapper>
    </Container>
  )
}
