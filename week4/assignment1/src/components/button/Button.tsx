import type { ButtonHTMLAttributes } from 'react';
import * as styles from './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = ({
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={styles.button({ variant })}
      {...props}
    />
  );
};

export default Button;
