import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const nicknameResult = style({
  marginTop: '1rem',
  fontSize: vars.size.xs, 
  color: vars.color.black,
  listStyleType: 'circle',
});
