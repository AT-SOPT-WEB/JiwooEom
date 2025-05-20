import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: vars.color.primary,
  padding: '1rem 1rem',
  color: vars.color.white,
});

export const nav = style({
  display: 'flex',
  gap: '1.5rem',
  height: '2.5rem',
  alignItems: 'left',
  marginLeft: '1rem',
});

export const navButton = style({
  background: 'transparent',
  border: 'none',
  color: vars.color.white,
  fontSize: vars.size.xs,
  fontWeight: 700,
  cursor: 'pointer',
});

export const nickname = style({
  fontSize: vars.size.xs,
  fontWeight: 700,
  alignItems: 'right',
  marginRight: '3rem',
});
