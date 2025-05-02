// Search.jsx

import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const searchContainerStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    height: 2.5rem;
`;

const inputStyle = css`
  border-radius: 0.375rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  width: 20rem;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

const buttonStyle = css`
  border-radius: 0.375rem;
  background-color: #3b82f6;
  padding: 0.5rem 1rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #2563eb;
  }
`;

const Search = ({ search, handleSearchChange, handleSearch }) => {
  return (
    <div css={searchContainerStyle}>
      <input
        type='text'
        value={search}
        onChange={handleSearchChange}
        placeholder='검색어를 입력하세요'
        css={inputStyle}
      />
      <button onClick={handleSearch} css={buttonStyle}>검색</button>
    </div>
  );
};

export default Search;