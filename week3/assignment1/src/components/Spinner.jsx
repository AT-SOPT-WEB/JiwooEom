// Spinner.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const spinner = css`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #2d72d9;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 1s linear infinite;
  margin-top: 5rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Spinner = () => {
    return <div css={spinner}></div>;
  };

export default Spinner