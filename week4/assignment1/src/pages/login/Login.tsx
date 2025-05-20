import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { signIn } from '../../services/authService';
import PageContainer from '../../layouts/pageContainer/PageContainer';
import Title from '../../components/title/Title';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await signIn(id, password);
      const userId = res.data.data.userId;
      localStorage.setItem('userId', userId);
      navigate('/mypage/info');
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        alert(err.response?.data.message || '로그인 중 에러가 발생했습니다.');
}
  };

  return (
    <PageContainer>
      <Title>로그인</Title>
      <Input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} disabled={!id || !password}>
        로그인
      </Button>
      <Button variant='secondary' onClick={() => navigate('/signup')}>
        회원가입
      </Button>
    </PageContainer>
  );
};

export default Login;
