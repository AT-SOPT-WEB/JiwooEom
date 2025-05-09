// Card.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const card = css`
  position: relative;
  background-color: #1e293b;
  color: white;
  border-radius: 1rem;
  margin-top: 3rem;
  padding: 3rem;
  width: 20rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

const closeBtn = (theme) => css`
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  background: none;
  border: none;
  color: white;
  font-size: ${theme.fonts.md};
  cursor: pointer;
  padding: 0;

  &:hover {
    color: red;
  }
`;

const avatarWrapper = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const avatar = css`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
`;

const name = (theme) => css`
  margin-top: 1.5rem;
  font-size: ${theme.fonts.lg};
  font-weight: bold;
  cursor: pointer;
`;

const login = (theme) => css`
  margin: 1rem 0;
  font-size: ${theme.fonts.ssm};
`;

const bio = (theme) => css`
  margin: 1rem 0;
  font-size: ${theme.fonts.sm};
`; 

const followBox = css`
  display: flex;
  justify-content: space-around;
  margin-top: 1.75rem;
`;

const followItem = css`
  background-color: #2d72d9;
  width: 6rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const Card = ({ userInfo, handleClose }) => {
  return (
    <div css={card}>
      <button css={closeBtn} onClick={handleClose}>X</button>
      <div css={avatarWrapper}>
        <img 
          src={userInfo.data.avatar_url}
          alt={`${userInfo.data.login}의 프로필 이미지`}
          css={avatar}
          onClick={() => window.open(userInfo.data.html_url, '_blank')} />
      </div>
      <h2 css={name} onClick={() => window.open(userInfo.data.html_url, '_blank')}>
        {userInfo.data.name || '(Name)'}
      </h2>
      <p css={login}>@{userInfo.data.login}</p>
      <p css={bio}>{userInfo.data.bio || '(Bio)'}</p>
      <div css={followBox}>
        <div css={followItem}>Followers<br />{userInfo.data.followers}</div>
        <div css={followItem}>Following<br />{userInfo.data.following}</div>
      </div>
    </div>
  );
};

export default Card;