/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { list, listItem } from './List.syles';

const List = ({ history }) => {
  const theme = useTheme();

  return (
    <div css={list}>
      {history.map((record, idx) => (
        <div key={idx} css={listItem(theme)}>
          {record.guess} - {record.message}
        </div>
      ))}
    </div>
  );
};

export default List;