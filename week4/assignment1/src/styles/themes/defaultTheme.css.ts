import { createTheme } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const defaultTheme = createTheme(vars, {
  colors: {
    primary: 'rgb(157, 196, 221)',
    point: 'rgb(245, 175, 175)',
  },
  fonts: {
    xl: '2rem',
    lg: '1.5rem',
    md: '1.2rem',
    sm: '1rem',
    xs: '0.875rem',
  },
});
