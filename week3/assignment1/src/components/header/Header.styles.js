import { css } from '@emotion/react';

export const header = (theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  text-align: center;
  background-color: ${theme.colors.primary};
  box-sizing: border-box;
`;

export const h1 = css`
  color: white;
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
`;

export const menubar = css`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

export const menubtn = (isActive, theme) => css`
  margin: 0;
  padding: 0.8rem;
  align-items: center;
  font-weight: ${isActive ? '500' : '400'};
  font-size: ${theme.fonts.sm};
  color: white;
  background-color: ${isActive ? theme.colors.point : theme.colors.primary};
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1.5px solid white;
  transition: background-color 0.1s ease-in-out, font-weight 0.1s ease-in-out;
  font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;

  &:hover {
    background-color: ${theme.colors.point};
  }
`;