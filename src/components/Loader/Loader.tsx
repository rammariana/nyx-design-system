import React, { forwardRef } from "react";
import styles from "./Loader.module.css";

export type LoaderVariant = "spinner" | "dots" | "pulse" | "fullscreen";
export type LoaderSize = "small" | "medium" | "large";

export interface LoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  message?: string;
  progress?: number;
  className?: string;
  color?: string;
  fullScreen?: boolean;
}

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  (
    {
      variant = "spinner",
      size = "medium",
      message,
      progress,
      className = "",
      color,
      fullScreen = false,
    },
    ref
  ) => {
    const containerClassName = [
      fullScreen ? styles.fullscreen : styles.inline,
      styles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const spinnerStyle = color ? { backgroundColor: color } : undefined;

    const renderSpinner = () => {
      switch (variant) {
        case "dots":
          return (
            <div className={styles.dotsContainer}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={styles.dot} style={spinnerStyle} />
              ))}
            </div>
          );

        case "pulse":
          return <div className={styles.pulse} style={spinnerStyle} />;

        case "fullscreen":
          return (
            <div className={styles.orbitContainer}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.slice} />
              ))}
            </div>
          );

        default: // spinner
          return <div className={styles.spinner} style={spinnerStyle} />;
      }
    };

    if (fullScreen) {
      return (
        <div ref={ref} className={containerClassName}>
          {renderSpinner()}
          {message && <p className={styles.message}>{message}</p>}
          {progress !== undefined && (
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                />
              </div>
              <span className={styles.progressText}>{progress}%</span>
            </div>
          )}
        </div>
      );
    }

    return (
      <div ref={ref} className={containerClassName}>
        {renderSpinner()}
        {message && <span className={styles.message}>{message}</span>}
        {progress !== undefined && (
          <span className={styles.progress}>{progress}%</span>
        )}
      </div>
    );
  }
);

Loader.displayName = "Loader";
