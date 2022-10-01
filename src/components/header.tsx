import styled from 'styled-components/macro'

import { mobileScreen } from '../styles/media-queries'
import { colors, fonts, fontSizes, spacingBaseValue } from '../styles/styles'

import { PictureOfMe } from './picture-of-me'

const { playfairDisplay, helveticaNeue } = fonts
const { lightGrey } = colors

const Container = styled.section({
  width: '100%',
  paddingBottom: spacingBaseValue,
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px dotted ${lightGrey}}`,
})
const HeadingsWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: spacingBaseValue,
  justifyContent: 'flex-start',
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
      <HeadingsWrapper>
        <Heading>Ellen Styrélius</Heading>
        <SubHeading>Front-end web developer</SubHeading>
      </HeadingsWrapper>
      <PictureOfMe />
    </Container>
  )
}
