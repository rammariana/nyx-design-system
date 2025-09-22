import React, { useState, useRef, useEffect, ReactNode, forwardRef } from 'react';
import styles from './Tooltip.module.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariant = 'default';

export interface TooltipProps {
  children: ReactNode; // El elemento que dispara el tooltip
  content: ReactNode;  // El contenido que se muestra dentro del tooltip
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
            className={`${styles.popup} ${styles[position]}`}
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