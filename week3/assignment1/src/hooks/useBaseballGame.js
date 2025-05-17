import { useCallback, useEffect, useState } from 'react';

export const useBaseballGame = () => {
  const [secretNumber, setSecretNumber] = useState([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const CORRECT_ANSWER_MESSAGE = '3 스트라이크 0 볼';
  const OUT_MESSAGE = 'OUT 🥲';

  const generateNumber = () => {
    const digits = [];
    while (digits.length < 3) {
      const n = Math.floor(Math.random() * 10);
      if (!digits.includes(n)) digits.push(n);
    }
    return digits;
  };

  const getResultMessage = (strikes, balls) => {
  return strikes === 0 && balls === 0
    ? OUT_MESSAGE
    : `${strikes} 스트라이크 ${balls} 볼`;
};

  const checkGuess = (secret, guess) => {
    let strikes = 0, balls = 0;
    guess.forEach((digit, idx) => {
      if (digit === secret[idx]) strikes++;
      else if (secret.includes(digit)) balls++;
    });
    return getResultMessage(strikes, balls);
  };

  const startNewGame = useCallback(() => {
    const newNumber = generateNumber();
    setSecretNumber(newNumber);
    console.log('숫자:', newNumber.join(''));
    setHistory([]);
    setMessage('▶️ 새로운 게임을 시작하세요!');
    setIsGameOver(false);
  }, []);

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
    const resultMsg = checkGuess(secretNumber, guessArray);
    const newHistory = [...history, { guess: input, message: resultMsg }];
    setHistory(newHistory);
    setMessage(resultMsg);

    if (resultMsg === CORRECT_ANSWER_MESSAGE) {
      setMessage('🎉 정답입니다! 3초 뒤에 새로운 게임이 시작됩니다.');
      setIsGameOver(true);
      setTimeout(() => startNewGame(), 3000);
    } else if (newHistory.length >= 10) {
      setMessage('💥 게임 오버! 10번을 넘겨서 실패하였습니다. 게임이 5초 후 초기화됩니다.');
      setIsGameOver(true);
      setTimeout(() => startNewGame(), 5000);
    }

    setInput('');
  };

  return {
    input,
    setInput,
    history,
    message,
    handleGuess,
  };
};