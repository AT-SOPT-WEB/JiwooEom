import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMyNickname } from '../../services/userService';
import { useNickname } from '../../contexts/NicknameContext';
import * as styles from './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const navigate = useNavigate();
  const { nickname, updateGlobalNickname } = useNickname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <button
        className={styles.menuToggle}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
      {isMenuOpen ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
        <button className={styles.navButton} onClick={() => navigate('/mypage/info')}>내 정보</button>
        <button className={styles.navButton} onClick={() => navigate('/mypage/search')}>SOPT 회원 조회하기</button>
        <button className={styles.navButton} onClick={handleLogout}>로그아웃</button>
      </nav>
      <div className={styles.nickname}><FontAwesomeIcon icon={faUser} /> {nickname}</div>
    </header>
  );
};

export default Header;