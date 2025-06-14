import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: 'rgb(157, 196, 221)',
    point: 'rgb(245, 175, 175)',
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
    gray: 'rgb(170, 170, 170)',
    danger: 'rgb(255, 0, 0)',
  },
  size: {
    xl: '3rem',
    lg: '2.5em',
    md: '2rem',
    sm: '1.8rem',
    xs: '1.5rem',
  },
});
