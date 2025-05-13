import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const button = recipe({
  base: {
    width: '50rem',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: 600,
    textAlign: 'center',
    fontSize: vars.size.xs,
    border: 'none',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
      },
      secondary: {
        backgroundColor: 'transparent',
        color: vars.color.point,
        border: `0.3rem solid ${vars.color.point}`,
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
