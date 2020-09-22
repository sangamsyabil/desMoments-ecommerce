import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { CustomTheme } from '../../../theme/muiTheme';

export interface TextProps {
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
  fontWeight?: 'bold' | 'normal';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  text: {
    fontWeight: ({ fontWeight }: TextProps): any => (fontWeight ? fontWeight : 'normal'),
    textTransform: ({ textTransform }: TextProps): any => (textTransform ? textTransform : 'lowercase'),
  },
}));

const Text: React.FC<TextProps> = (props) => {
  const classes = useStyles(props);
  const { externalStyle, children, variant, color } = props;
  return (
    <Typography variant={variant} color={color} className={clsx([classes.text, externalStyle])}>
      {children}
    </Typography>
  );
};

export { Text };
