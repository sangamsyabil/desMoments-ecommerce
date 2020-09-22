import { Button as MuiButton, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../../../theme/muiTheme';

export interface ButtonProps {
  onClick?: () => void;
  externalStyle?: string;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  button: {
    textTransform: ({ textTransform }: ButtonProps): any => (textTransform ? textTransform : 'uppercase'),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.light,
    },
  },
}));

const Button: React.FC<ButtonProps> = (props) => {
  const classes = useStyles(props);
  const {
    children,
    onClick,
    externalStyle,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    disabled = false,
  } = props;
  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      className={clsx([classes.button, externalStyle])}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
};

export { Button };
