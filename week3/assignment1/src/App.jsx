import { useState } from 'react';
import Header from './components/header/Header';
import GithubSearch from './pages/githubSearch/GithubSearch';
import BaseballGame from './pages/baseballGame/BaseballGame';

/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles';

function App() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <>
      <Global styles={globalStyles} />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'search' && <GithubSearch />}
        {activeTab === 'game' && <BaseballGame />}
      </main>
    </>
  );
}

export default App;