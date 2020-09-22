import React from 'react';
import { Button, Container, Text } from '../../components';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Text variant='h1' color='secondary'>
        This is home
      </Text>
      <Text variant='h1' textTransform='uppercase' fontWeight='bold'>
        This is home
      </Text>
      <Button>this is button</Button>
      <Button variant='outlined'>this is button</Button>
      <Container> this is container</Container>
    </>
  );
};

export default Home;
