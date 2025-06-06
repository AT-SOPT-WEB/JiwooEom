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

export const inputWrapper = style({
  position: 'relative',
  width: '100%',
});

export const input = style({
  width: '100%',
  padding: '1rem 3rem 1rem 1rem',
  border: '0.1rem solid rgb(100, 100, 100)',
  borderRadius: '0.5rem',
  fontSize: vars.size.xs,
  color: vars.color.black,
  boxSizing: 'border-box',
});

export const icon = style({
  position: 'absolute',
  top: '50%',
  right: '1rem',
  transform: 'translateY(-50%)',
  fontSize: vars.size.xs,
  color: vars.color.black,
  cursor: 'pointer',
});
