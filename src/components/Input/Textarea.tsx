import { TextareaHTMLAttributes, forwardRef } from 'react';
import styles from './Textarea.module.css';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className: externalClassName, 
    size = 'medium',
    error = false,
    helperText,
    ...props 
  }, ref) => {
    
    const textareaClassNames = [
      styles.textarea,
      styles[size],
      error ? styles.error : '',
      externalClassName
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.textareaWrapper}>
        <textarea ref={ref} className={textareaClassNames} {...props} />
        {helperText && (
          <span className={`${styles.helperText} ${error ? styles.errorText : ''}`}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
