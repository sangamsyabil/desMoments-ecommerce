import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Text } from '../../components';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { i18n, t } = useTranslation('homeScreenTx');
  const handleLanguage = (lang: string) => i18n.changeLanguage(lang);
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
      <div>
        <Button onClick={() => handleLanguage('en')}>english</Button>
        <Button onClick={() => handleLanguage('fr')}>french</Button>
      </div>
      <div>{t('hello')}</div>
    </>
  );
};

export default Home;
