import { css } from '@emotion/react';

export const recentBox = css`
  width: 35rem;
  text-align: left;
  margin-top: 1rem;
`;

export const recentText = (theme) => css`
  font-size: ${theme.fonts.md};
  margin: 0.75rem 0;
  font-weight: 500;
`;

export const recentList = css`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const recentItem = css`
  background-color: #f0f0f0;
  padding: 0.4rem 0.7rem;
  border-radius: 0.75rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

export const recentName = css`
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const recentRemove = css`
  border: none;
  cursor: pointer;
  color: rgb(130, 130, 130);
  padding: 0;

  &:hover {
    color: red;
  }
`;