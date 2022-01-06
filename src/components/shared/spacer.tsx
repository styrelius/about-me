import styled from 'styled-components/macro'

import { spacingBaseValue } from '../../styles/styles'

type Sizes = Record<Props['size'], number>

const sizes: Sizes = {
  xs: spacingBaseValue / 2,
  sm: spacingBaseValue,
  md: spacingBaseValue * 3,
  lg: spacingBaseValue * 6,
}

type Props = {
  size: 'xs' | 'sm' | 'md' | 'lg'
  factor?: number
  axis?: 'horizontal' | 'vertical'
}

export const Spacer = styled.div<Props>(({ size, factor = 1, axis = 'horizontal' }) => ({
  ...(axis === 'horizontal' && {
    height: 0,
    width: sizes[size] * factor,
  }),
  ...(axis === 'vertical' && {
    height: sizes[size] * factor,
    width: 0,
  }),
}))
