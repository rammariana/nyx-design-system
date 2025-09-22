import React, { ReactNode } from 'react';
import styles from './SidePanel.module.css';

export interface SidePanelProps {
  children: ReactNode;
  width?: string;
  className?: string;
  position?: 'left' | 'right';
}

export const SidePanel: React.FC<SidePanelProps> = ({
  children,
  width = '50%',
  className = '',
  position = 'right'
}) => {
  return (
    <div
      className={`${styles.sidePanel} ${position === 'left' ? styles.leftPanel : ''} ${className}`}
      style={{ width }}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
