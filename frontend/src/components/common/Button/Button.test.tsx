import { render } from '@testing-library/react';
import React from 'react';
import { Button, ButtonProps } from './Button';

const mockData: ButtonProps = {
  onClick: jest.fn(),
  variant: 'text',
  color: 'default',
  size: 'large',
  disabled: false,
  textTransform: 'uppercase',
};

test('Button renders correctly', () => {
  const { asFragment } = render(<Button {...mockData}>Mock button</Button>);
  expect(asFragment()).toMatchSnapshot();
});
