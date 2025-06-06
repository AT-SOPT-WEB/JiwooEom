import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { signUp } from '../../services/authService';
import PageContainer from '../../layouts/pageContainer/PageContainer';
import Title from '../../components/title/Title'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import * as styles from './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<'id' | 'password' | 'nickname'>('id');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');

  const handleNext = () => {
    if (step === 'id' && id.trim()) {
      setStep('password');
    } else if (
      step === 'password' && 
      password.trim() && 
      passwordCheck.trim() && 
      password === passwordCheck
    ) {
      setStep('nickname');
    }
  };

  const handleSignup = async () => {
    try {
      await signUp({ loginId: id, password, nickname });
      alert(`${nickname}님 반갑습니다! 회원가입에 성공했어요.`);
      navigate('/login');
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      alert(err.response?.data?.message || '회원가입에 실패했어요.');
    }
  };

  return (
    <PageContainer>
        <Title>회원가입</Title>

        {/* 아이디 입력 단계 */}
        {step === 'id' && (
          <>
            <Input
              label="아이디"
              type="text"
              placeholder="아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            {id.trim().length > 20 &&
              (<p className={styles.errorMsg}>최대 길이는 20자 이하로 입력해주세요.</p>)}
            
            <Button
              onClick={handleNext}
              disabled={
                id.trim().length<8 ||
                id.trim().length>20 || 
                !/^[a-zA-Z0-9]+$/.test(id)
              }>
              다음
            </Button>
          </>
        )}

        {/* 비밀번호 입력 단계 */}
        {step === 'password' && (
          <>
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showIcon
            />
            <Input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />

            {(password.trim().length > 20 || passwordCheck.trim().length > 20) &&
              (<p className={styles.errorMsg}>최대 길이는 20자 이하로 입력해주세요.</p>)}
            {(password !== passwordCheck) &&
              (<p className={styles.errorMsg}>비밀번호가 일치하지 않아요.</p>)}
            
            <Button
              onClick={handleNext}
              disabled={
                !password.trim() || 
                password.trim().length<8 ||
                password.trim().length>20 ||
                !/^[a-zA-Z0-9]+$/.test(password) ||
                !passwordCheck.trim() || 
                password !== passwordCheck
              }>
              다음
            </Button>
          </>
        )}

        {/* 닉네임 입력 단계 */}
        {step === 'nickname' && (
          <>
            <Input
              label="닉네임"
              type="text"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button 
              onClick={handleSignup}
              disabled={
                !nickname.trim() ||
                nickname.trim().length>20 ||
                !/^[a-zA-Z0-9가-힣]+$/.test(nickname)
              }>
              회원가입 하기
            </Button>
          </>
        )}

        <div className={styles.moveToLogin}>
            <p className={styles.memberText}>이미 회원이신가요?</p>
              <Button variant='secondary' onClick={() => navigate('/login')}>
                로그인
              </Button>
        </div>
    </PageContainer>
  )
}

export default Signup