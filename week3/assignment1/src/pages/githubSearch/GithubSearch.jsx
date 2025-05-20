/** @jsxImportSource @emotion/react */
import { container } from './GithubSearch.styles';
import { useGithubSearch } from '../../hooks/useGithubSearch';
import Input from '../../components/input/Input';
import Message from '../../components/message/Message';
import Recent from '../../components/recent/Recent';
import Card from '../../components/card/Card';
import Spinner from '../../components/spinner/Spinner';

const GithubSearch = () => {
  const {
    username,
    setUsername,
    userInfo,
    recentUsers,
    handleSubmit,
    handleClose,
    getUserInfo,
    removeRecentUser,
  } = useGithubSearch();

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
      {userInfo.status === 'idle' && recentUsers.length === 0 && (
        <Message message="💌 새로운 Github 프로필을 검색해보세요!" />
      )}
      {userInfo.status === 'pending' && <Spinner />}
      {userInfo.status === 'rejected' && (
        <Message message="⚠️ 결과를 찾을 수 없습니다. 다시 시도해 주세요." />
      )}
      {userInfo.status === 'resolved' && userInfo.data && (
        <Card userInfo={userInfo} handleClose={handleClose} />
      )}
    </div>
  );
};

export default GithubSearch;