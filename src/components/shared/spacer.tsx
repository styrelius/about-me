import styled from 'styled-components/macro'

type Sizes = Record<Props['size'], number>

const sizes: Sizes = {
  xs: 4,
  sm: 8,
  md: 24,
  lg: 48,
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
