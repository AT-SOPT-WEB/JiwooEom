// List.jsx

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const list = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const listItem = (theme) => css`
  background-color: #1e293b;
  color: white;
  border-radius: 1rem;
  padding: 0.5rem;
  width: 20rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  font-size: ${theme.fonts.sm};
`;

const List = ({ history }) => {
    return (
      <div css={list}>
        {history.map((entry, idx) => (
          <div key={idx} css={listItem}>
            {entry.guess} - {entry.feedback}
          </div>
        ))}
      </div>
    );
  }
  
export default List;