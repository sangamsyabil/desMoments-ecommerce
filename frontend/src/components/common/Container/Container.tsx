import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../../../theme/muiTheme';
import { Text } from '../Text/Text';

export interface ContainerProps {
  fontWeight?: 'bold' | 'normal';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  externalStyle?: string;
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'srOnly'
    | undefined;
  color?: 'inherit' | 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | undefined;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  container: {
    borderColor: theme.palette.primary.main,
    borderWidth: 1.5,
    borderStyle: 'solid',
    textAlign: 'center',
    padding: theme.spacing(0.7),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 'fit-content',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.light,
    },
  },
}));

const Container: React.FC<ContainerProps> = ({
  children,
  textTransform,
  fontWeight,
  externalStyle,
  color,
  variant,
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx([classes.container, externalStyle])}>
      <Text color={color} variant={variant} textTransform={textTransform} fontWeight={fontWeight}>
        {children}
      </Text>
    </Box>
  );
};

export { Container };
