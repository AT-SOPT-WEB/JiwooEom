// App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Game from './components/Game';

/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const globalStyles = css`
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', 'Apple SD Gothic Neo', 'Segoe UI', sans-serif;
    background-color:rgb(245, 245, 245);
    box-sizing: border-box;
  }
`;

function App() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <>
      <Global styles={globalStyles} />
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
          {activeTab === 'search' && <Search />}
          {activeTab === 'game' && <Game />}
      </main>
    </>
  )
}

export default App
