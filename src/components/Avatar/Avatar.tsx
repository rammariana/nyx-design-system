import React, { forwardRef } from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  text?: string;
  image?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'circle' | 'square' | 'rounded';
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
  color?: string;
  alt?: string;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({
    text,
    image,
    size = 'medium',
    variant = 'circle',
    isActive = false,
    onClick,
    className,
    backgroundColor,
    color,
    alt,
  }, ref) => {
    const classNames = [
      styles.avatar,
      styles[size],
      styles[variant],
      onClick ? styles.clickable : '',
      isActive ? styles.active : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const style = {
      backgroundColor,
      color,
    };

    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (onClick && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        onClick();
      }
    };

    return (
      <span
        ref={ref}
        className={classNames}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={style}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={alt || (text ? `Avatar de ${text}` : 'Avatar')}
      >
        {image ? (
          <img
            src={image}
            alt={alt || text || 'Avatar'}
            className={styles.image}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && text) {
                parent.textContent = text.toUpperCase();
              }
            }}
          />
        ) : (
          text?.toUpperCase()
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';
