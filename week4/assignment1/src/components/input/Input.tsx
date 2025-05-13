// src/shared/components/input/Input.tsx
import type { ChangeEventHandler, InputHTMLAttributes } from 'react';
import * as styles from './Input.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
        {...rest}
      />
    </div>
  );
};

export default Input;
