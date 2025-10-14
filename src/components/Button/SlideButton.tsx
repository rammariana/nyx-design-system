import React from 'react';
import styles from './Button.module.css';

export type SlideButtonVariant = 'default' | 'dark' | 'darkInverse' | 'outline' | 'gradient' | 'compact' | 'compactDark' | 'compactCustom';

export interface SlideButtonProps {
  activeState: boolean;
  onToggle: () => void;
  leftLabel?: string; 
  rightLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  variant?: SlideButtonVariant;
  showCircle?: boolean;
  showText?: boolean; 
  customColor?: string; 
}

export const SlideButton: React.FC<SlideButtonProps> = ({
  activeState,
  onToggle,
  leftLabel = 'Active', 
  rightLabel = 'Inactive', 
  leftIcon,
  rightIcon,
  className = '',
  variant = 'default',
  showCircle = false,
  showText = true,  
  customColor,
}) => {
  console.log('SlideButton - activeState:', activeState, 'leftLabel:', leftLabel, 'rightLabel:', rightLabel);
  if (variant === 'compactCustom') {
    return (
      <div className={styles.compactToggleContainer}>
        {showCircle && (
          <i 
            className="bi bi-circle-fill"
            style={{ 
              color: activeState ? (customColor || '#333333') : '#6B7280',
              fontSize: '1rem'
            }}
          />
        )}
        
        {showText && (
          <span 
            className={styles.compactToggleText}
            style={{ 
              color: activeState ? (customColor || '#333333') : '#6B7280',
              fontWeight: activeState ? 600 : 500,
              fontSize: '0.875rem'
            }}
          >
            {activeState ? rightLabel : leftLabel}
          </span>
        )}
        
        <div
          className={styles.compactToggleSwitchCustom}
          onClick={onToggle}
          data-testid="slide-button-toggle"
          style={{ backgroundColor: activeState ? (customColor || '#333333') : '#E5E7EB' }}
        >
          <div className={`${styles.compactToggleThumb} ${activeState ? styles.compactToggleThumbActive : styles.compactToggleThumbInactive}`} />
        </div>
      </div>
    );
  }

  // Para las otras variantes compact:
  if (variant === 'compact') {
    return (
      <div className={styles.compactToggleContainer}>
        {showCircle && (
          <i className={`bi bi-circle-fill ${activeState ? styles.compactToggleCircleActive : styles.compactToggleCircleInactive}`}></i>
        )}
        
        <span className={`${styles.compactToggleText} ${activeState ? styles.compactToggleTextActive : styles.compactToggleTextInactive}`}>
          {activeState ? rightLabel : leftLabel}
        </span>
        <div
          className={`${styles.compactToggleSwitch} ${activeState ? styles.compactToggleSwitchActive : styles.compactToggleSwitchInactive}`}
          onClick={onToggle}
          data-testid="slide-button-toggle"
          style={variant === 'compact' && customColor ? { 
            backgroundColor: activeState ? customColor : '#E5E7EB' 
          } : undefined}
        >
          <div className={`${styles.compactToggleThumb} ${activeState ? styles.compactToggleThumbActive : styles.compactToggleThumbInactive}`} />
        </div>
      </div>
    );
  }

  const variantClass = variant === 'gradient' ? styles.slideContainerGradient : 
                    variant === 'dark' ? styles.slideContainerDark :
                    variant === 'outline' ? styles.slideContainerOutline : '';

  console.log('Variant:', variant, 'Generated class:', `slideContainer${variant.charAt(0).toUpperCase() + variant.slice(1)}`, 'Class exists:', !!styles[`slideContainer${variant.charAt(0).toUpperCase() + variant.slice(1)}`]);

  return (
    <button
      type="button"
      className={`${styles.slideContainer} ${variantClass} ${className}`}
      onClick={onToggle}
      data-testid="slide-button"
    >
      <div className={`${styles.slider} ${variantClass} ${activeState ? styles.slideLeft : styles.slideRight}`}></div>
      <div className={styles.labelsContainer}>
        <span className={activeState ? styles.activeLabel : styles.inactiveLabel}>
          {leftLabel}
          {leftIcon}
        </span>
        <span className={!activeState ? styles.activeLabel : styles.inactiveLabel}>
          {rightLabel}
          {rightIcon}
        </span>
      </div>
    </button>
  );
};
