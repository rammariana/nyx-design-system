import React from "react";
import styles from "./ScrollableContainer.module.css";

export type ScrollDirection = "x" | "y";

export interface ScrollableContainerProps {
  direction?: ScrollDirection;
  children: React.ReactNode;
  className?: string;
}

export const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  direction = "y",
  children,
  className = "",
}) => {
  const scrollClass =
    direction === "x" ? styles.scrollX : styles.scrollY;

  return (
    <div className={`${scrollClass} ${className}`}>
      {children}
    </div>
  );
};
