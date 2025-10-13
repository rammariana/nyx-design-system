import React, { ReactNode, forwardRef } from 'react';
import styles from './Banner.module.css';

export type BannerVariant = 'dark' | 'light' | 'info' | 'recommendation' | 'subtle';

export interface BannerProps {
  children: ReactNode;
  variant?: BannerVariant;
  className?: string;
  title?: string;
  icon?: ReactNode;
  actions?: ReactNode;
  onClose?: () => void;
  dismissible?: boolean;
  fullWidth?: boolean;
  withBorder?: boolean;
  borderColor?: string;
}

export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({
    children,
    variant = 'dark',
    className = '',
    title,
    icon,
    actions,
    onClose,
    dismissible = true,
    fullWidth = true,
    withBorder = true,
    borderColor,
  }, ref) => {
    const isComplex = Boolean(title || icon || actions);

    const containerClassName = [
      styles.container,
      isComplex ? styles.layoutComplex : styles.layoutSimple,
      styles[variant],
      fullWidth ? styles.fullWidth : '',
      !withBorder ? styles.noBorder : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        event.preventDefault();
        onClose();
      }
    };

    return (
      <div 
        ref={ref}
        className={containerClassName}
        style={borderColor ? { borderColor } : undefined}
        onKeyDown={handleKeyDown}
        role="alert"
        aria-live="polite"
      >
        {isComplex ? (
          <>
            <div className={styles.header}>
              <div className={styles.titleContainer}>
                {icon && <span className={styles.icon}>{icon}</span>}
                {title && <h4 className={styles.title}>{title}</h4>}
              </div>
              <div className={styles.actionsContainer}>
                {actions}
                {dismissible && onClose && (
                  <button 
                    onClick={handleClose} 
                    className={styles.closeButton} 
                    aria-label="Cerrar banner"
                    type="button"
                  >
                    <i className="bi bi-x"></i>
                  </button>
                )}
              </div>
            </div>
            <div className={styles.message}>
              {children}
            </div>
          </>
        ) : (
          <>
            <div className={styles.message}>
              {icon && <span className={styles.icon}>{icon}</span>}
              {children}
            </div>
            {dismissible && onClose && (
              <button 
                onClick={handleClose} 
                className={styles.closeButton} 
                aria-label="Cerrar banner"
                type="button"
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </>
        )}
      </div>
    );
  }
);

Banner.displayName = 'Banner';
