import type { ReactNode } from 'react';
import * as styles from './PageContainer.css';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className={`${styles.container} ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default PageContainer;
