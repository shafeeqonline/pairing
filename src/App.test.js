import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Colour label (arguably not a very useful test :D)', () => {
  render(<App />);
  expect(screen.getByText('Colour:')).toBeInTheDocument();
});