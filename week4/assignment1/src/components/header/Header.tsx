import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getMyNickname } from '../../services/userService';
import { useNickname } from '../../contexts/NicknameContext';
import * as styles from './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { nickname, updateGlobalNickname } = useNickname();

  useEffect(() => {
    const fetchNickname = async () => {
      try {
        const userId = Number(localStorage.getItem('userId'));
        if (!userId) return;

        const res = await getMyNickname(userId);
        updateGlobalNickname(res.data.data.nickname);
      } catch (e) {
        console.error(e);
      }
    };
    fetchNickname();
  }, [updateGlobalNickname]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button className={styles.navButton} onClick={() => navigate('/mypage/info')}>내 정보</button>
        <button className={styles.navButton} onClick={() => navigate('/mypage/search')}>SOPT 회원 조회하기</button>
        <button className={styles.navButton} onClick={handleLogout}>로그아웃</button>
      </nav>
      <div className={styles.nickname}>👤 {nickname}</div>
    </header>
  );
};

export default Header;