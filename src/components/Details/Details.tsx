import React, { ReactNode } from 'react';
import { TagComponent, TagVariant } from '../TagComponent';
import styles from './Details.module.css';

export interface DetailsProps {
  summary: ReactNode;
  children: ReactNode;
  variant?: 'card' | 'ghost' | 'ghost-circle-icon';
  pillText?: string;
  pillVariant?: TagVariant;
  className?: string;
  defaultOpen?: boolean;
  slotRight?: ReactNode;
}

export const Details: React.FC<DetailsProps> = ({
  summary,
  children,
  variant = 'card',
  pillText,
  pillVariant,
  className = '',
  defaultOpen = false,
  slotRight,
}) => {
  const containerClassName = `${styles.container} ${styles[variant]} ${className}`.trim();

  return (
    <details className={containerClassName} open={defaultOpen}>
      <summary className={styles.summary}>
        <div className={styles.summaryContent}>
          <div className={styles.icon}>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </div>
          <span className={styles.summaryText}>{summary}</span>
        </div>
        {slotRight ? slotRight : (
          pillText && pillVariant && (
            <TagComponent hasDot={false} variant={pillVariant} size="small">
              {pillText}
            </TagComponent>
          )
        )}
      </summary>
      <div className={styles.content}>
        {children}
      </div>
    </details>
  );
};
