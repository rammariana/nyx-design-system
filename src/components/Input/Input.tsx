import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'pill';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className: externalClassName, 
    icon, 
    iconPosition = 'right', 
    variant = 'default',
    size = 'medium',
    error = false,
    helperText,
    ...props 
  }, ref) => { 
    
    const inputClassNames = [
      styles.input,
      styles[variant],
      styles[size],
      error ? styles.error : '',
      icon ? styles[`inputWithIcon-${iconPosition}`] : '',
    ].filter(Boolean).join(' ');

    const wrapperClassNames = [
      styles.inputWrapper,
      externalClassName
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClassNames}>
        <input className={inputClassNames} ref={ref} {...props} />
        {icon && <span className={styles[`icon-${iconPosition}`]}>{icon}</span>}
        {helperText && (
          <span className={`${styles.helperText} ${error ? styles.errorText : ''}`}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
