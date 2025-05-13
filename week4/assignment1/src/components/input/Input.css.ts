// src/shared/components/input/Input.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '50rem',
  gap: '1rem',
});

export const label = style({
  fontSize: vars.size.sm,
  fontWeight: 600,
  color: vars.color.black,
});

export const input = style({
  height: '2rem',
  padding: '0.625rem 1rem',
  borderRadius: '0.375rem',
  fontSize: vars.size.xs,
  color: vars.color.black,
});
