import { css } from '@emotion/react';

export const formStyle = css`
  width: 35rem;
  margin-top: 3rem;
`;

export const inputStyle = (theme) => css`
  padding: 0.5rem 0.75rem;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  font-size: ${theme.fonts.sm};
`;