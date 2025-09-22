import { SelectHTMLAttributes, forwardRef, ReactNode } from 'react';
import styles from './Select.module.css';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export type SelectVariant = 'default' | 'subtle' | 'pill' | 'compact';
export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  label?: string;
  variant?: SelectVariant;
  size?: SelectSize;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  icon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({
    options,
    label,
    variant = 'default',
    size = 'medium',
    error = false,
    helperText,
    placeholder,
    icon,
    className,
    fullWidth = true,
    disabled,
    ...props
  }, ref) => {
    const wrapperClassName = [
      styles.wrapper,
      fullWidth ? styles.fullWidth : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const selectContainerClassName = [
      styles.selectContainer,
      styles[variant],
      styles[size],
      error ? styles.error : '',
      disabled ? styles.disabled : '',
    ]
      .filter(Boolean)
      .join(' ');

    const selectClassName = [
      styles.select,
      error ? styles.error : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClassName}>
        {label && (
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
        )}
        <div className={selectContainerClassName}>
          <select
            ref={ref}
            className={selectClassName}
            disabled={disabled}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className={styles.icon}>
            {icon || (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        {helperText && (
          <span className={error ? styles.errorText : styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
