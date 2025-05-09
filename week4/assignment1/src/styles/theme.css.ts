import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  colors: {
    primary: null,
    point: null,
  },
  fonts: {
    xl: null,
    lg: null,
    md: null,
    sm: null,
    xs: null,
  },
});
