/** @jsxImportSource @emotion/react */
import { container } from './BaseballGame.styles';
import Input from '../../components/input/Input';
import Message from '../../components/message/Message';
import List from '../../components/list/List';
import { useBaseballGame } from '../../hooks/useBaseballGame';

const BaseballGame = () => {
  const { input, setInput, history, message, handleGuess } = useBaseballGame();

  return (
    <div css={container}>
      <Input
        input={input}
        setInput={setInput}
        onSubmit={handleGuess}
        placeholder="3자리 숫자를 입력해주세요."
        maxLength="3"
      />
      <Message message={message} />
      <List history={history} />
    </div>
  );
};

export default BaseballGame;