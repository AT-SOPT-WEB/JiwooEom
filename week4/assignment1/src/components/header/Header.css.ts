import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '3.5rem',
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

  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
      position: 'fixed',
      top: '3.6rem',
      left: 0,
      right: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: vars.color.primary,
      padding: '2rem 1rem',
      width: '100%',
      gap: '1.5rem',
      height: 'auto',
    },
  },
});

export const showMenu = style({
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'flex',
    },
  },
});

export const menuToggle = style({
  display: 'none',
  fontSize: '1.5rem',
  background: 'none',
  border: 'none',
  color: vars.color.white,
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 768px)': {
      display: 'block',
    },
  },
});

export const navButton = style({
  background: 'transparent',
  border: 'none',
  color: vars.color.white,
  fontSize: vars.size.xs,
  fontWeight: 700,
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',

  selectors: {
    '&:hover': {
      color: vars.color.black,
    },
  },
});

export const nickname = style({
  fontSize: vars.size.xs,
  fontWeight: 700,
  marginRight: '3rem',
});
