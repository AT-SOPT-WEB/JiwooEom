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
  fontWeight: 700,
  color: vars.color.black,
});

export const input = style({
  height: '2rem',
  padding: '1rem',
  border: '0.1rem solid rgb(100, 100, 100)',
  borderRadius: '0.5rem',
  fontSize: vars.size.xs,
  color: vars.color.black,
});
