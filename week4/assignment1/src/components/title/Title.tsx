import type { ReactNode } from 'react';
import * as styles from './Title.css';

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
