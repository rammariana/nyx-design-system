import { forwardRef, ElementType, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'subtle' | 'icon' | 'danger' | 'outline' | 'icon-ghost';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonRadius = 'default' | 'pill';
type ButtonColorScheme = 'secondary' | 'danger';

export interface ButtonProps<C extends ElementType = 'button'> {
  as?: C;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius; 
  colorScheme?: ButtonColorScheme;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode; 
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}

export const Button = forwardRef<HTMLElement, ButtonProps<any>>(
  ({
    as: Component = 'button',
    variant = 'primary',
    size = 'medium',
    radius = 'default', 
    colorScheme,
    isLoading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    children,
    className: externalClassName = '',
    disabled,
    ...props
  }, ref) => {
    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      styles[radius], 
      variant === 'icon' && colorScheme ? styles[colorScheme] : '',
      fullWidth ? styles.fullWidth : '',
      isLoading ? styles.loading : '',
      externalClassName,
    ].filter(Boolean).join(' ');

    return (
      <Component
        ref={ref}
        className={classNames}
        disabled={isLoading || disabled}
        {...props}
      >
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <span className={isLoading ? styles.contentHidden : ''}>{children}</span>
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        {isLoading && (
          <span className={styles.spinnerWrapper}>
            <span className={styles.spinner} />
          </span>
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';
