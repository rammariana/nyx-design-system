import React, { useState, useRef, useEffect, ReactNode, forwardRef } from 'react';
import styles from './Tooltip.module.css';

// Tipo expandido para posiciones combinadas
export type TooltipPosition = 
  | 'top' 
  | 'bottom' 
  | 'left' 
  | 'right'
  | 'left top'
  | 'left bottom'
  | 'right top'
  | 'right bottom'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

export type TooltipVariant = 'default';

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: TooltipPosition;
  variant?: TooltipVariant;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({
    children,
    content,
    position = 'bottom',
  }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const showTooltip = () => setIsVisible(true);
    const hideTooltip = () => setIsVisible(false);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (
          isVisible &&
          tooltipRef.current && !tooltipRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)
        ) {
          hideTooltip();
        }
      };

      document.addEventListener('mousedown', handleOutsideClick);
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isVisible]);

    // Función para obtener las clases CSS basadas en la posición
    const getPositionClasses = (pos: TooltipPosition): string => {
      // Normalizar la posición (convertir "left bottom" a "left-bottom" para CSS)
      const normalized = pos.replace(/\s+/g, '-');
      return `${styles.popup} ${styles[normalized] || styles[pos] || styles.bottom}`;
    };

    return (
      <div ref={ref} className={styles.container}>
        <div
          ref={triggerRef}
          className={styles.trigger}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          {children}
        </div>
        {isVisible && (
          <div
            ref={tooltipRef}
            className={getPositionClasses(position)}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            role="tooltip"
            aria-hidden="false"
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';