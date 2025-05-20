import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const title = style({
  fontSize: vars.size.xl,
  color: vars.color.black,
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '1.5rem',
  marginTop: '0',
});
