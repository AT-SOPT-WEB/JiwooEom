// src/styles/App.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from './styles/theme.css';

export const h1Style = style({
  color: vars.color.primary,
  fontSize: vars.size.xl,
});
