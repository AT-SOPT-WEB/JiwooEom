import * as styles from './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';

// testing - 삭제 예정
const App = () => {
  return (
    <div>
      <h1 className={styles.h1Style}>4주차 과제 초기 세팅</h1>
      <Input
        label="이메일"
        placeholder="이메일을 입력하세요"
        type="email"
        onChange={(e) => console.log(e.target.value)} />
      <Button variant="secondary">로그인</Button>
    </div>
  );
};

export default App;
