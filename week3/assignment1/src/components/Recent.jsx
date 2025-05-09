// Recent.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const recentBox = css`
  width: 35rem;
  text-align: left;
  margin-top: 1rem;
`;

const recentText = (theme) => css`
  font-size: ${theme.fonts.md};
  margin: 0.75rem 0;
  font-weight: 500;
`;

const recentList = css`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const recentItem = css`
  background-color: #f0f0f0;
  padding: 0.4rem 0.7rem;
  border-radius: 0.75rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
`;

const recentName = css`
  cursor: pointer;
  margin-right: 0.5rem;
`;

const recentRemove = css`
  border: none;
  cursor: pointer;
  color:rgb(130, 130, 130);
  padding: 0;

  &:hover {
    color: red;
  }
`;

const Recent = ({ recentUsers, getUserInfo, removeRecentUser }) => {
  if (recentUsers.length === 0) return null;

  return (
    <div css={recentBox}>
      <p css={recentText}>최근검색어</p>
      <div css={recentList}>
        {recentUsers.map(user => (
          <span key={user} css={recentItem}>
            <span
              css={recentName}
              onClick={() => {getUserInfo(user)}}
            >{user}</span>
            <button css={recentRemove} onClick={() => removeRecentUser(user)}>X</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Recent;