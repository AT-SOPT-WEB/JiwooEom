import { useState } from 'react';
import { AxiosError } from 'axios';
import { searchMembers } from '../../services/memberService';
import PageContainer from '../../layouts/pageContainer/PageContainer';
import Title from '../../components/title/Title'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header';
import * as styles from './Search.css';


const Search = () => {
  const [search, setSearch] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [nicknameList, setNicknameList] = useState<string[]>([]);
  const userId = Number(localStorage.getItem('userId'));

  const handleSearch = async () => {
  try {
    const res = await searchMembers(userId, search.trim());
    setNicknameList(res.data.data.nicknameList);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    alert(err.response?.data?.message || '회원 검색에 실패했습니다.');
  } finally {
    setIsSearched(true);
  }
}; 

  return (
    <>
        <Header />
        <PageContainer>
            <Title>SOPT 회원 조회하기</Title>
            <Input
                label="닉네임"
                type="text"
                placeholder="검색할 닉네임을 입력하세요"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={handleSearch}>확인</Button>

            {nicknameList.length > 0 && (
            <ul className={styles.nicknameResult}>
              {nicknameList.map((name, index) => (
                  <li key={index}>{name}</li>
              ))}
            </ul>
            )}

            {nicknameList.length === 0 && isSearched && (
              <p className={styles.nicknameResult}>검색 결과가 없습니다.</p>
            )}
        </PageContainer>
    </>
  )
}

export default Search