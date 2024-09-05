import React from 'react';
import styles from './PageLayout.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: Props) => {
  return (
    <main className={`${styles.pageLayout} mw ${className}`}>{children}</main>
  );
};

export default PageLayout;
