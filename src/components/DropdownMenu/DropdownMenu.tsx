import React, { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './DropdownMenu.module.css';

export type MenuPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

export interface DropdownMenuProps {
  /** Un render prop que recibe el estado 'isOpen' y devuelve el elemento disparador. */
  trigger: (isOpen: boolean) => ReactNode;
  children: ReactNode;
  position?: MenuPosition;
  width?: string; 
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
  position = 'bottom-right',
  width, // Agregar esta línea
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Llamamos a la función trigger para obtener el elemento, pasándole el estado actual
  const triggerElement = trigger(isOpen);

  const handleTriggerClick = (e: React.MouseEvent) => {
    // Si el botón original ya tenía un onClick, lo respetamos
    if ((triggerElement as any).props.onClick) {
      (triggerElement as any).props.onClick(e);
    }
    setIsOpen(prev => !prev); // Luego ejecutamos nuestra lógica
  };

  // Clonamos el elemento para inyectarle nuestro onClick
  const triggerWithClick = React.cloneElement(triggerElement as React.ReactElement, {
    onClick: handleTriggerClick,
  });

  // Efecto para cerrar el menú
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuClassName = `${styles.menu} ${styles[position]} ${width ? styles.customWidth : ''}`;
  const menuStyle = {
    ...(position === 'bottom-left' || position === 'top-left' ? { marginLeft: '0' } : {}),
    ...(width ? { '--custom-width': width } : {})
  };

  return (
    <div ref={containerRef} className={styles.container}>
      {triggerWithClick}
      {isOpen && <div className={menuClassName} style={menuStyle}>{children}Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>}
    </div>
  );
};
