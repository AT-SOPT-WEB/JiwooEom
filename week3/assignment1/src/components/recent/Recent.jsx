/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import {
  recentBox,
  recentText,
  recentList,
  recentItem,
  recentName,
  recentRemove,
} from './Recent.syles';

const Recent = ({ recentUsers, getUserInfo, removeRecentUser }) => {
  const theme = useTheme();

  if (recentUsers.length === 0) return null;

  return (
    <div css={recentBox}>
      <p css={recentText(theme)}>최근검색어</p>
      <div css={recentList}>
        {recentUsers.map((user) => (
          <span key={user} css={recentItem}>
            <span css={recentName} onClick={() => getUserInfo(user)}>
              {user}
            </span>
            <button css={recentRemove} onClick={() => removeRecentUser(user)}>
              X
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Recent;