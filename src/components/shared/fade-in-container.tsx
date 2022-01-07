import styled, { keyframes, css } from 'styled-components/macro'

type Props = {
  durationInMs?: number
  positionShift?: number
}

const getFadeInAnimation = ({ durationInMs, positionShift }: Props) => {
  const fadeInWithSlide = keyframes`
    from {
      opactiy: 0;
      transform: translate(0, ${positionShift}px);
    }
    to {
      opacity: 1;
      transform: translate(0);
    }
  `
  const fadeIn = keyframes`
    from {
      opactiy: 0;
    }
    to {
      opacity: 1;
    }
  `
  const duration = durationInMs ? durationInMs : 600

  return css`
    animation: ${positionShift ? fadeInWithSlide : fadeIn} ${duration}ms ease-out;
  `
}

export const FadeInContainer = styled.div<Props>`
  ${({ durationInMs, positionShift }) => getFadeInAnimation({ durationInMs, positionShift })}
`
