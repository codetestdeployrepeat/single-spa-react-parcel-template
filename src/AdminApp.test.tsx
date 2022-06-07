import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminApp from "./AdminApp";

test('renders admin heading', () => {
  render(<AdminApp />);
  const h1 = screen.getByText(/Admin app/i);
  expect(h1).toBeInTheDocument();
});
