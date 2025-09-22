import React, { useState, useRef, ReactNode, DragEvent } from 'react';
import styles from './Dropzone.module.css';

export interface DropzoneProps {
  onFileAccepted: (file: File) => void;
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'image';
  accept?: string;
  maxSize?: number; // en bytes
  disabled?: boolean;
}

export const Dropzone: React.FC<DropzoneProps> = ({ 
  onFileAccepted, 
  children, 
  className = '',
  variant = 'default',
  accept = '.pdf, .xlsx',
  maxSize = 5 * 1024 * 1024, // 5MB por defecto
  disabled = false
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    setError(null);

    // Validar tipo de archivo
    if (variant === 'image' && !file.type.startsWith('image/')) {
      setError('Por favor selecciona un archivo de imagen válido');
      return false;
    }

    // Validar tamaño
    if (file.size > maxSize) {
      const maxSizeMB = maxSize / (1024 * 1024);
      setError(`El archivo es demasiado grande. Máximo ${maxSizeMB}MB`);
      return false;
    }

    return true;
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (disabled) return;
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onFileAccepted(file);
      }
    }
  };

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (disabled) return;
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onFileAccepted(file);
      }
    }
  };

  const containerClassName = `
    ${styles.container}
    ${isDragActive ? styles.dragActive : ''}
    ${variant === 'image' ? styles.imageVariant : ''}
    ${disabled ? styles.disabled : ''}
    ${className}
  `.trim();

  // Contenido por defecto para variante image
  const defaultImageContent = (
    <div className={styles.imageContent}>
      <i className="bi bi-image" style={{ fontSize: '2rem', color: '#6B7280' }}></i>
      <p className="text-muted mb-2">Arrastra una imagen aquí o haz clic para seleccionar</p>
      <small className="text-muted">JPG, PNG, GIF - Máximo 5MB</small>
    </div>
  );

  return (
    <div
      className={containerClassName}
      onClick={handleClick}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        className={styles.input}
        onChange={handleFileChange}
        accept={variant === 'image' ? 'image/*' : accept}
        disabled={disabled}
      />
      <div className={styles.content}>
        {variant === 'image' && !children ? defaultImageContent : children}
      </div>
      {error && (
        <div className={styles.error}>
          <small className="text-danger">{error}</small>
        </div>
      )}
    </div>
  );
};
