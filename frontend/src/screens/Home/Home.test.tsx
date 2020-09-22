import { render } from '@testing-library/react';
import React from 'react';
import Home from './Home';

test('Text renders correctly', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
