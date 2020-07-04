import React from 'react'
import { render } from '@testing-library/react'

import { App } from './app'

test('renders Ellen text', () => {
  const { getByText } = render(<App />)
  const textElement = getByText(/Ellen Styrélius/)
  expect(textElement).toBeInTheDocument()
})
