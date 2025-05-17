import { css } from '@emotion/react';

export const card = css`
  position: relative;
  background-color: #1e293b;
  color: white;
  border-radius: 1rem;
  margin-top: 3rem;
  padding: 3rem;
  width: 20rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

export const closeBtn = (theme) => css`
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  background: none;
  border: none;
  color: white;
  font-size: ${theme.fonts.md};
  cursor: pointer;
  padding: 0;

  &:hover {
    color: red;
  }
`;

export const avatarWrapper = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const avatar = css`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
`;

export const name = (theme) => css`
  margin-top: 1.5rem;
  font-size: ${theme.fonts.lg};
  font-weight: bold;
  cursor: pointer;
`;

export const login = (theme) => css`
  margin: 1rem 0;
  font-size: ${theme.fonts.ssm};
`;

export const bio = (theme) => css`
  margin: 1rem 0;
  font-size: ${theme.fonts.sm};
`;

export const followBox = css`
  display: flex;
  justify-content: space-around;
  margin-top: 1.75rem;
`;

export const followItem = css`
  background-color: #2d72d9;
  width: 6rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;