/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { formStyle, inputStyle } from './Input.styles';

const Input = ({ input, setInput, onSubmit, placeholder, maxLength }) => {
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} css={formStyle}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="off"
        css={inputStyle(theme)}
      />
    </form>
  );
};

export default Input;