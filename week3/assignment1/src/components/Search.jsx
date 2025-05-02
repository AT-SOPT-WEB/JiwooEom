// Search.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import Input from './Input';
import Message from './Message';
import Recent from './Recent';
import Card from './Card';
import Spinner from './Spinner';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Search = () => {
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
  const [recentUsers, setRecentUsers] = useState([]);

  // 페이지 처음 로드될 때 localStorage에서 최근 검색어 가져오기
  useEffect(() => {
    const saved = localStorage.getItem('userList');
    if (saved) {
      setRecentUsers(JSON.parse(saved));
    }
  }, []);

  const saveRecentUser = (user) => {
    if (!user) return;

    // 이미 있는 값이면 중복 저장 안 함
    if (!recentUsers.some(u => u.toLowerCase() === user.toLowerCase())) {
      const updated = [...recentUsers, user];
      if (updated.length > 3) {
        updated.shift(); // 3개 넘으면 가장 오래된 것 삭제
      }
      setRecentUsers(updated);
      localStorage.setItem('userList', JSON.stringify(updated));
    }
  };

  const removeRecentUser = (user) => {
    const updated = recentUsers.filter(u => u !== user);
    setRecentUsers(updated);
    localStorage.setItem('userList', JSON.stringify(updated));
  };

  const getUserInfo = async (user) => {
    setUserInfo({ status: 'pending', data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setUserInfo({ status: 'resolved', data });
      saveRecentUser(user); // 최근 검색어 저장
    } catch {
      setUserInfo({ status: 'rejected', data: null });
    }
  };

  const handleSubmit = () => {
    console.log('검색된 ID:', username);
    if (username.trim() !== '') {
      getUserInfo(username.trim());
      setUsername('');
    }
  };

  const handleClose = () => {
    setUserInfo({ status: 'idle', data: null });
  };

  return (
    <div css={container}>
      <Input 
        input={username}
        setInput={setUsername}
        onSubmit={handleSubmit}
        placeholder="Github 프로필을 검색해보세요."
      />
      <Recent
        recentUsers={recentUsers} 
        getUserInfo={getUserInfo} 
        removeRecentUser={removeRecentUser} 
      />
      {userInfo.status === 'idle' && recentUsers.length === 0 && <Message message='💌 새로운 Github 프로필을 검색해보세요!' />}
      {userInfo.status === 'pending' && <Spinner />}
      {userInfo.status === 'rejected' && <Message message='⚠️ 결과를 찾을 수 없습니다. 다시 시도해 주세요.' />}
      {userInfo.status === 'resolved' && userInfo.data && (
        <Card userInfo={userInfo} handleClose={handleClose} />
      )}
    </div>
  );
};

export default Search;