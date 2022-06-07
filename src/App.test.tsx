import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sample heading', () => {
  render(<App />);
  const h1 = screen.getByText(/It Works/i);
  expect(h1).toBeInTheDocument();
});
