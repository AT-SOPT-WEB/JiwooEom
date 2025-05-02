// Message.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const conditionalMsg = (theme) => css`
  font-size: ${theme.fonts.md};
  margin-top: 2rem;
  font-weight: 500;
`;

const Message = ({ message }) => {
    return <p css={conditionalMsg}>{message}</p>;
  }
export default Message;