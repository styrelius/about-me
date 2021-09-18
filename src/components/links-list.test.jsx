import React from 'react'
import { render } from '@testing-library/react'

import { LinksList } from './links-list'

test('renders GitHub link', () => {
  const { getByText } = render(<LinksList />)
  const gitHubLink = getByText(/GitHub/)
  expect(gitHubLink).toBeInTheDocument()
  expect(gitHubLink).toHaveAttribute('href', 'https://github.com/styrelius')
})

test('renders LinkedIn link', () => {
  const { getByText } = render(<LinksList />)
  const linkedInLink = getByText(/LinkedIn/)
  expect(linkedInLink).toBeInTheDocument()
  expect(linkedInLink).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/ellen-styr%C3%A9lius-a55165183/',
  )
})
