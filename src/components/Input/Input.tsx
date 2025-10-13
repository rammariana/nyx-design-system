import { InputHTMLAttributes, forwardRef, ReactNode, useState } from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'pill';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  helperText?: string;
  showPasswordToggle?: boolean;
  onPasswordToggle?: (show: boolean) => void;
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
    showPasswordToggle = false,
    onPasswordToggle,
    type = 'text',
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === 'password' || showPasswordToggle;
    
    const handleTogglePassword = () => {
      const newShowPassword = !showPassword;
      setShowPassword(newShowPassword);
      onPasswordToggle?.(newShowPassword);
    };

    const inputType = isPasswordField && showPassword ? 'text' : type;
    
    const passwordIcon = isPasswordField ? (
      <button
        type="button"
        onClick={handleTogglePassword}
        className={styles.passwordToggle}
        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
        tabIndex={-1}
      >
        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
      </button>
    ) : icon;

    const hasIcon = passwordIcon || icon;
    
    const inputClassNames = [
      styles.input,
      styles[variant],
      styles[size],
      error ? styles.error : '',
      hasIcon ? styles[`inputWithIcon-${iconPosition}`] : '',
    ].filter(Boolean).join(' ');

    const wrapperClassNames = [
      styles.inputWrapper,
      externalClassName
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClassNames}>
        <input 
          className={inputClassNames} 
          ref={ref} 
          type={inputType}
          {...props} 
        />
        {hasIcon && (
          <span className={styles[`icon-${iconPosition}`]}>
            {passwordIcon || icon}
          </span>
        )}
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
