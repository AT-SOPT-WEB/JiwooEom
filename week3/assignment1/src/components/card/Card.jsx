/** @jsxImportSource @emotion/react */
import {
  card,
  closeBtn,
  avatarWrapper,
  avatar,
  name,
  login,
  bio,
  followBox,
  followItem,
} from './Card.styles';

const openProfile = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Card = ({ userInfo, handleClose }) => {
  return (
    <div css={card}>
      <button css={closeBtn} onClick={handleClose}>X</button>
      <div css={avatarWrapper}>
        <img 
          src={userInfo.data.avatar_url}
          alt={`${userInfo.data.login}의 프로필 이미지`}
          css={avatar}
          onClick={() => openProfile(userInfo.data.html_url)} />
      </div>
      <h2 css={name} onClick={() => openProfile(userInfo.data.html_url)}>
        {userInfo.data.name || '(Name)'}
      </h2>
      <p css={login}>@{userInfo.data.login}</p>
      <p css={bio}>{userInfo.data.bio || ''}</p>
      <div css={followBox}>
        <div css={followItem}>Followers<br />{userInfo.data.followers}</div>
        <div css={followItem}>Following<br />{userInfo.data.following}</div>
      </div>
    </div>
  );
};

export default Card;