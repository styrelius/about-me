import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Ellen text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Ellen/);
  expect(textElement).toBeInTheDocument();
});
