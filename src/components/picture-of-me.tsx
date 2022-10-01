import { useState } from 'react'
import styled from 'styled-components/macro'

import ellen from '../assets/ellen.jpg'

const IMAGE_SIZE = 96

type ImageContainerProps = {
  hasImageLoaded: boolean
}

const ImageContainer = styled.div<ImageContainerProps>(({ hasImageLoaded }) => ({
  opacity: hasImageLoaded ? 1 : 0,
  height: IMAGE_SIZE,
  width: IMAGE_SIZE,
  transition: 'opacity 0.6s ease-out',
}))
const Image = styled.img({
  borderRadius: '200% 50%',
})

export const PictureOfMe = () => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false)

  return (
    <ImageContainer hasImageLoaded={hasImageLoaded}>
      <Image
        src={ellen}
        alt="Ellen waving"
        onLoad={() => setHasImageLoaded(true)}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
      />
    </ImageContainer>
  )
}
