// Header.jsx

/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const header = (theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 100%;
    text-align: center;
    background-color: ${theme.colors.primary};
    box-sizing: border-box;
`;

const h1 = css`
    color: white;
    font-weight: 700;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
`;

const menubar = css`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
`;

const menubtn = (isActive, theme) => css`
    margin: 0;
    padding: 0.8rem;
    align-items: center;
    font-weight: ${isActive ? '500' : '400'};
    font-size: ${theme.fonts.sm};
    color: white;
    background-color: ${isActive ? theme.colors.point : theme.colors.primary};
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1.5px solid white;
    transition: background-color 0.1s ease-in-out, font-weight 0.1s ease-in-out;
    font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;

    &:hover {
        background-color: ${theme.colors.point};
    }
`;

const Header = ({ activeTab, setActiveTab}) => {
    const theme = useTheme();

    return (
        <header css={header(theme)}>
        <h1 css={h1}>💻 깃허브 검색 | 숫자 야구 ⚾&nbsp;</h1>
        <div className='menubar' css={menubar}>
            <button 
                onClick={() => setActiveTab('search')}
                css={menubtn(activeTab === 'search', theme)}>
                깃허브 검색 🔍
            </button>
            <button
                onClick={() => setActiveTab('game')}
                css={menubtn(activeTab === 'game', theme)}>
                숫자 야구 🎰
            </button>
        </div>
        </header>
    );
};

export default Header;