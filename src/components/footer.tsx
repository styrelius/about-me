import styled from 'styled-components/macro'

import { spacingBaseValue } from '../styles/styles'

import { GetInTouch } from './get-in-touch'
import { LinksList } from './links-list'

const Container = styled.section({
  padding: '24px 0',
  display: 'grid',
  gridAutoFlow: 'row',
  gap: spacingBaseValue * 2,
  justifyContent: 'center',
  alignSelf: 'end',
})

export function Footer() {
  return (
    <Container>
      <GetInTouch />
      <LinksList />
    </Container>
  )
}
