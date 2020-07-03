import React from 'react'
import styled from 'styled-components/macro'

import ellen from '../assets/ellen.jpg'

const Container = styled.section({
  padding: '32px 0',
  display: 'flex',
  justifyContent: 'center',
})

const ContentsWrapper = styled.div({
  width: 400,
  maxWidth: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
})

const HeadingsWrapper = styled.div({
  padding: 8,
})

const Heading = styled.h1({
  fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
  fontSize: 40,
  fontWeight: 200,
})

const SubHeading = styled.h2({
  fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
  fontSize: 24,
  fontWeight: 200,
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
