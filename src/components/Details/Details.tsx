import React, { ReactNode } from 'react';
import { TagComponent, TagVariant } from '../TagComponent';
import styles from './Details.module.css';

export interface DetailsProps {
  summary: ReactNode;
  children: ReactNode;
  variant?: 'card' | 'ghost' | 'ghost-circle-icon' | 'custom-bottom';
  pillText?: string;
  pillVariant?: TagVariant;
  className?: string;
  defaultOpen?: boolean;
  slotRight?: ReactNode;
  customIcon?: ReactNode; // Ej: <i className="bi bi-eye"/>
  iconPosition?: 'left' | 'right'; // Posición del icono
  showBorder?: boolean; // Mostrar borde
  showBackground?: boolean; // Mostrar background
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
  customIcon,
  iconPosition = 'left',
  showBorder = false,
  showBackground = false,
}) => {
  const containerClassName = `${styles.container} ${styles[variant]} ${className}`.trim();

    // Para variante custom-bottom
    const isCustomBottom = variant === 'custom-bottom';
  return (
    <details className={containerClassName} open={defaultOpen}>
      <summary className={styles.summary}>
        <div className={styles.summaryContent}>
          {/* Icono normal (solo si NO es custom-bottom) */}
          {!isCustomBottom && (
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
          )}
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
        {/* Icono personalizado abajo (solo si es custom-bottom) */}
        {isCustomBottom && customIcon && (
          <div className={`${styles.customBottomIcon} ${styles[iconPosition]}`}>
            {customIcon}
          </div>
        )}
      </div>
    </details>
  );
};
