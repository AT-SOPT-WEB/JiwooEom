import { useState } from 'react';
import { AxiosError } from 'axios';
import { updateNickname } from '../../services/userService';
import { useNickname } from '../../contexts/NicknameContext';
import PageContainer from '../../layouts/pageContainer/PageContainer';
import Title from '../../components/title/Title'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header';

const Info = () => {
  const [nickname, setNickname] = useState('');
  const { updateGlobalNickname } = useNickname();

  const handleSave = async () => {
    const userId = Number(localStorage.getItem('userId'));

    try {
      await updateNickname(userId, nickname);
      updateGlobalNickname(nickname);
      alert(`닉네임이 ${nickname}(으)로 변경되었습니다.`);
    } catch (error) {
          const err = error as AxiosError<{ message: string }>;
          alert(err.response?.data?.message || '닉네임 수정에 실패했습니다.');
        }
    
    setNickname('');
  };

  return (
    <>
        <Header />
        <PageContainer>
            <Title>내 정보 수정하기</Title>
            <Input
                label="새 닉네임"
                type="text"
                placeholder="새 닉네임을 입력하세요."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <Button onClick={handleSave}>저장</Button>
        </PageContainer>
    </>
  )
}

export default Info