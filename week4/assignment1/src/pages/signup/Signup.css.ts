import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const errorMsg = style({
  margin: '0',
  textAlign: 'left',
  fontSize: vars.size.xs,
  color: vars.color.danger,
});

export const moveToLogin = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: vars.size.xs,
    color: vars.color.black,
});

export const memberText = style({
    margin: '0',
});

export const loginBtn = style({
    padding: '0',
    border: 'none',
    backgroundColor: 'transparent',
    color: vars.color.primary,
    fontSize: vars.size.xs,
    fontWeight: 400,
    textDecoration: 'underline',
    cursor: 'pointer',
});