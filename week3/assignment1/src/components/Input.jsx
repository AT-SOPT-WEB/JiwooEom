// Input.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const formStyle = css`
  width: 35rem;
  margin-top: 3rem;
`;

const inputStyle = (theme) => css`
  padding: 0.5rem 0.75rem;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  font-size: ${theme.fonts.sm};
`;

const Input = ({ input, setInput, onSubmit, placeholder, maxLength }) => {

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
        css={inputStyle}
      />
    </form>
  );
};

export default Input;