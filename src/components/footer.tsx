import styled from 'styled-components/macro'

import { GetInTouch } from './get-in-touch'
import { LinksList } from './links-list'

const Container = styled.section({
  paddingTop: 56,
  display: 'grid',
  gridAutoFlow: 'row',
  gap: 40,
  justifyContent: 'center',
})

export function Footer() {
  return (
    <Container>
      <GetInTouch />
      <LinksList />
    </Container>
  )
}
