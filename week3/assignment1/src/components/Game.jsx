// Game.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useCallback } from 'react';
import Input from './Input';
import Message from './Message';
import List from './List';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Game = () => {
  const [secretNumber, setSecretNumber] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);

  const generateNumber = () => {
    const digits = [];
    while (digits.length < 3) {
      const n = Math.floor(Math.random() * 10);
      if (!digits.includes(n)) digits.push(n);
    }
    return digits;
  }

  const startNewGame = useCallback(() => {
    const newNumber = generateNumber();
    setSecretNumber(newNumber);
    console.log('숫자:', newNumber.join(''));
    setHistory([]);
    setMessage('▶️ 새로운 게임을 시작하세요!');
    setIsGameOver(false);
  },[]);

  // 첫 로드 시 게임 시작
  // 개발 모드에서 useEffect가 의도적으로 두 번 실행됨 -> 배포 환경에서는 한 번만 실행됨
  useEffect(() => {
    startNewGame();
  }, [startNewGame]);


  const handleGuess = () => {
    if (isGameOver) return;

    if (!/^\d{3}$/.test(input) || new Set(input).size !== 3) {
        setMessage('⚠️ 서로 다른 숫자 3자리를 입력해주세요!');
        setInput('');
        return;
    }

    const guessArray = input.split('').map(Number);
    const feedback = checkGuess(secretNumber, guessArray);
    const newHistory = [...history, { guess: input, feedback }];
    setHistory(newHistory);
    setMessage(feedback);

    if (feedback === '3 스트라이크 0 볼') {
      setMessage('🎉 정답입니다! 3초 뒤에 새로운 게임이 시작됩니다.');
      setIsGameOver(true);
      setTimeout(() => {
        startNewGame();
      }, 3000); // 3초 후 재시작
    }
    else if (newHistory.length >= 10) {
      setMessage('💥 게임 오버! 10번을 넘겨서 실패하였습니다. 게임이 5초 후 초기화됩니다.');
      setIsGameOver(true);
      setTimeout(() => {
        startNewGame();
      }, 5000); // 5초 후 재시작
    }

    setInput('');
  }

  const checkGuess = (secret, guess) => {
    let strikes = 0, balls = 0;
    guess.forEach((digit, idx) => {
      if (digit === secret[idx]) strikes++;
      else if (secret.includes(digit)) balls++;
    });
    return strikes === 0 && balls === 0 ? 'OUT 🥲' : `${strikes} 스트라이크 ${balls} 볼`;
  }

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
}

export default Game;