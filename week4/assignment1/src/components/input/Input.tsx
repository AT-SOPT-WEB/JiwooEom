import { useState } from 'react';
import type { ChangeEventHandler, InputHTMLAttributes } from 'react';
import * as styles from './Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  showIcon?: boolean;
}

const Input = ({
  label,
  placeholder,
  type = 'text',
  value,
  showIcon,
  onChange,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputWrapper}>
        <input
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
          {...rest}
        />
        {isPassword && showIcon && (
          <span className={styles.icon} onClick={toggleShowPassword}>
            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
