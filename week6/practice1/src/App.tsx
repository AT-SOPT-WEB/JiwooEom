import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const getUsers = async () => {
  const response = await axios.get('https://api.atsopt-seminar4.site/api/v1/users');
  return response.data.data;
};

function App() {
  const queryClient = useQueryClient();
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    enabled: shouldFetch,
  });

  const handleClick = async () => {
    setShouldFetch(true);
    await queryClient.refetchQueries({ queryKey: ['users'] });
  };

  return (
    <>
      <h1>유저 목록</h1>
      <button onClick={handleClick}>데이터 가져오기</button>

      {shouldFetch && isPending && <span>Loading...</span>}
      {shouldFetch && isError && <span>Error: {error.message}</span>}

      {data?.nicknameList.map((nickname: string, index: number) => (
        <div key={index}>
          <h2>{nickname}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
