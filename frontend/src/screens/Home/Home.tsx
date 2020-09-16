import { Typography } from '@material-ui/core';
import React from 'react';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return <Typography variant='h3'>this is home</Typography>;
};

export default Home;
