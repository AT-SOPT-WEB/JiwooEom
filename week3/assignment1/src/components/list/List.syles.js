import { css } from '@emotion/react';

export const list = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const listItem = (theme) => css`
  background-color: #1e293b;
  color: white;
  border-radius: 1rem;
  padding: 0.5rem;
  width: 20rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  font-size: ${theme.fonts.sm};
`;