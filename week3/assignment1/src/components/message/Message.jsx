/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { conditionalMsg } from './Message.styles';

const Message = ({ message }) => {
  const theme = useTheme();

  return <p css={conditionalMsg(theme)}>{message}</p>;
};

export default Message;