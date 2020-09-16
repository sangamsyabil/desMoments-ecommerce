import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface LoadingScreenProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  loaderContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const classes: Record<'loaderContainer', string> = useStyles();
  return (
    <div className={classes.loaderContainer}>
      <CircularProgress color='primary' size={200} />
    </div>
  );
};

export { LoadingScreen };
