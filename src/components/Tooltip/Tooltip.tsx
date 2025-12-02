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

    // ✅ Función para obtener las clases CSS basadas en la posición
    const getPositionClasses = (pos: TooltipPosition): string => {
      // Normalizar la posición (convertir "left bottom" a "left-bottom" para CSS)
      const normalized = pos.replace(/\s+/g, '-');
      return `${styles.popup} ${styles[normalized] || styles[pos] || styles.bottom}`;
    };

    // ✅ Función para obtener estilos inline dinámicos
    const getPositionStyles = (pos: TooltipPosition): React.CSSProperties => {
      const parts = pos.split(' ');
      
      // Si es una posición simple, no necesitamos estilos inline
      if (parts.length === 1) {
        return {};
      }

      // Posición combinada: calcular estilos dinámicamente
      const [primary, secondary] = parts;
      const styles: React.CSSProperties = {};

      // Posicionamiento horizontal
      if (primary === 'left') {
        styles.right = 'calc(100% + 10px)';
      } else if (primary === 'right') {
        styles.left = 'calc(100% + 10px)';
      }

      // Posicionamiento vertical
      if (primary === 'top') {
        styles.bottom = 'calc(100% + 10px)';
      } else if (primary === 'bottom') {
        styles.top = 'calc(100% + 10px)';
      }

      // Ajustes secundarios
      if (secondary === 'top') {
        styles.top = '0';
        styles.bottom = 'auto';
      } else if (secondary === 'bottom') {
        styles.bottom = '0';
        styles.top = 'auto';
      } else if (secondary === 'left') {
        styles.left = '0';
        styles.right = 'auto';
      } else if (secondary === 'right') {
        styles.right = '0';
        styles.left = 'auto';
      }

      // Transform para centrar
      if (primary === 'left' || primary === 'right') {
        if (secondary === 'top') {
          styles.transform = 'translateY(0)';
        } else if (secondary === 'bottom') {
          styles.transform = 'translateY(-100%)';
        } else {
          styles.transform = 'translateY(-50%)';
        }
      } else {
        if (secondary === 'left') {
          styles.transform = 'translateX(0)';
        } else if (secondary === 'right') {
          styles.transform = 'translateX(-100%)';
        } else {
          styles.transform = 'translateX(-50%)';
        }
      }

      return styles;
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
            style={getPositionStyles(position)}
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