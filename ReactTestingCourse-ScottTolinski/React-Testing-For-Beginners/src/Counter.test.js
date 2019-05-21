import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  const { debug, getByTestId } = render(<Counter />);
  debug(); // outputs Counter dom elements in the terminal
  // Assert that counter-button is a button
  expect(getByTestId('counter-button').tagName).toBe('BUTTON');
  // Assert that counter-button starts at 0
  expect(getByTestId('counter-button').textContent).toBe('0');
});
