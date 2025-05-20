/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { header, h1, menubar, menubtn } from './Header.styles';

const Header = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <header css={header(theme)}>
      <h1 css={h1}>💻 깃허브 검색 | 숫자 야구 ⚾&nbsp;</h1>
      <div css={menubar}>
        <button
          onClick={() => handleTabClick('search')}
          css={menubtn(activeTab === 'search', theme)}
        >
          깃허브 검색 🔍
        </button>
        <button
          onClick={() => handleTabClick('game')}
          css={menubtn(activeTab === 'game', theme)}
        >
          숫자 야구 🎰
        </button>
      </div>
    </header>
  );
};

export default Header;