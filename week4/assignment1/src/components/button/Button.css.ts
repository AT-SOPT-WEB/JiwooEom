import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const button = recipe({
  base: {
    width: '50rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: vars.size.xs,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',

    selectors: {
      '&:disabled': {
        backgroundColor: vars.color.gray, 
        color: vars.color.white,         
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },

  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
      },
      secondary: {
        padding: '0',
        border: 'none',
        backgroundColor: 'transparent',
        color: vars.color.primary,
        fontSize: vars.size.xs,
        fontWeight: 400,
        textDecoration: 'underline',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
