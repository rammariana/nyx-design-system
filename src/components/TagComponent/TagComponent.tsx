import React, { ReactNode, forwardRef } from 'react';
import styles from './TagComponent.module.css';

export type TagVariant = 
  | 'verified' 
  | 'new' 
  | 'new_item' 
  | 'found' 
  | 'pending' 
  | 'error' 
  | 'info' 
  | 'criteria' 
  | 'recommendations' 
  | 'success' 
  | 'danger' 
  | 'warning' 
  | 'high_success' 
  | 'gray' 
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'outline';

export type TagSize = 'small' | 'medium' | 'large';

export interface TagComponentProps {
  children: ReactNode;
  variant: TagVariant;
  size?: TagSize;
  className?: string;
  onClick?: () => void;
  hasDot?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  'data-testid'?: string;
}

export const TagComponent = forwardRef<HTMLDivElement | HTMLButtonElement, TagComponentProps>(
  ({
    children,
    variant,
    size = 'medium',
    className,
    onClick,
    hasDot = true,
    disabled = false,
    fullWidth = false,
    'data-testid': dataTestId,
  }, ref) => {
    const Tag = onClick ? 'button' : 'div';
    
    const combinedClassName = [
      styles.pill,
      styles[variant],
      styles[size],
      onClick ? styles.clickable : '',
      disabled ? styles.disabled : '',
      fullWidth ? styles.fullWidth : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const tagProps = {
      ref: ref as any,
      className: combinedClassName,
      onClick: disabled ? undefined : onClick,
      disabled: disabled && onClick ? true : undefined,
      'data-testid': dataTestId,
      ...(onClick && {
        type: 'button' as const,
        role: 'button',
        tabIndex: disabled ? -1 : 0,
      }),
    };

    return (
      <Tag {...tagProps}>
        {hasDot && <span className={styles.dot} />}
        <span className={styles.text}>{children}</span>
      </Tag>
    );
  }
);

TagComponent.displayName = 'TagComponent';
