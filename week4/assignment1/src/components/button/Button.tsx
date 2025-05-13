import type { ButtonHTMLAttributes } from 'react';
import * as styles from './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = ({
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={styles.button({ variant, fullWidth })}
      {...props}
    />
  );
};

export default Button;
