import { render } from '@testing-library/react';
import React from 'react';
import { Container, ContainerProps } from './Container';

const mockData: ContainerProps = {
  variant: 'button',
  color: 'initial',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

test('Button renders correctly', () => {
  const { asFragment } = render(<Container {...mockData}>Mock button</Container>);
  expect(asFragment()).toMatchSnapshot();
});
