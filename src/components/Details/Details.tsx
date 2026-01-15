import React, { ReactNode, useState, useEffect, useRef } from "react";
import { TagComponent, TagVariant } from "../TagComponent";
import { Tooltip } from "../Tooltip";
import styles from "./Details.module.css";

export interface DetailsProps {
  summary: ReactNode;
  children: ReactNode;
  variant?: "card" | "ghost" | "ghost-circle-icon" | "custom-bottom";
  pillText?: string;
  pillVariant?: TagVariant;
  className?: string;
  defaultOpen?: boolean;
  slotRight?: ReactNode;
  customIcon?: ReactNode; // Ej: <i className="bi bi-eye"/>
  iconPosition?: "left" | "right"; // Posición del icono
  showBorder?: boolean; // Mostrar borde
  showBackground?: boolean; // Mostrar background
  // Nuevas props para tooltip
  showIconTooltip?: boolean;
  iconTooltipText?: string; // Texto cuando está cerrado
  iconTooltipTextOpen?: string; // Texto cuando está abierto (opcional)
}

export const Details: React.FC<DetailsProps> = ({
  summary,
  children,
  variant = "card",
  pillText,
  pillVariant,
  className = "",
  defaultOpen = false,
  slotRight,
  customIcon,
  iconPosition = "left",
  showBorder = false,
  showBackground = false,
  showIconTooltip = false,
  iconTooltipText = "Expandir detalles",
  iconTooltipTextOpen = "Cerrar detalles",
}) => {
  const containerClassName =
    `${styles.container} ${styles[variant]} ${className}`.trim();
  const isCustomBottom = variant === "custom-bottom";

  // Estado para detectar si está abierto
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Detectar cambios en el estado open del elemento details
  useEffect(() => {
    const detailsElement = detailsRef.current;
    if (!detailsElement) return;

    const handleToggle = () => {
      setIsOpen(detailsElement.open);
    };

    // Establecer estado inicial
    setIsOpen(detailsElement.open);

    // Escuchar cambios
    detailsElement.addEventListener("toggle", handleToggle);

    return () => {
      detailsElement.removeEventListener("toggle", handleToggle);
    };
  }, []);

  // Renderizar el icono con o sin tooltip
  const renderIcon = () => {
    if (isCustomBottom) return null;

    const iconElement = (
      <div className={styles.icon}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </div>
    );

    if (showIconTooltip) {
      return (
        <Tooltip
          content={isOpen ? iconTooltipTextOpen : iconTooltipText}
          position="right"
        >
          {iconElement}
        </Tooltip>
      );
    }

    return iconElement;
  };

  return (
    <details ref={detailsRef} className={containerClassName} open={defaultOpen}>
      <summary className={styles.summary}>
        <div className={styles.summaryContent}>
          {renderIcon()}
          <span className={styles.summaryText}>{summary}</span>
        </div>
        {slotRight
          ? slotRight
          : pillText &&
            pillVariant && (
              <TagComponent hasDot={false} variant={pillVariant} size="small">
                {pillText}
              </TagComponent>
            )}
      </summary>
      <div className={styles.content}>
        {children}
        {isCustomBottom && customIcon && (
          <div className={`${styles.customBottomIcon} ${styles[iconPosition]}`}>
            {customIcon}
          </div>
        )}
      </div>
    </details>
  );
};
