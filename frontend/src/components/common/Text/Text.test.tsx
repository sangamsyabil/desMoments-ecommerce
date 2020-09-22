import { render } from '@testing-library/react';
import React from 'react';
import { Text, TextProps } from './Text';

const mockData: TextProps = {
  variant: 'button',
  color: 'initial',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

test('Text renders correctly', () => {
  const { asFragment } = render(<Text {...mockData}>Mock button</Text>);
  expect(asFragment()).toMatchSnapshot();
});
