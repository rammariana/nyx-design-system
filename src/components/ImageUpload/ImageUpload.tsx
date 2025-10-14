import React, { useState, useRef, useCallback } from 'react';
import toast from 'react-hot-toast';

interface ImageUploadProps {
  onUpload: (files: File[]) => Promise<void>;
  maxFiles?: number;
  maxSize?: number; // in MB
  acceptedTypes?: string[];
  disabled?: boolean;
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onUpload,
  maxFiles = 10,
  maxSize = 10,
  acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
  disabled = false,
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFiles = useCallback((files: FileList | File[]): File[] => {
    const fileArray = Array.from(files);
    const validFiles: File[] = [];

    if (fileArray.length > maxFiles) {
      toast.error(`Máximo ${maxFiles} archivos permitidos`);
      return [];
    }

    for (const file of fileArray) {
      // Check file type
      if (!acceptedTypes.includes(file.type)) {
        toast.error(`Tipo de archivo no válido: ${file.name}`);
        continue;
      }

      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        toast.error(`Archivo muy grande: ${file.name} (máximo ${maxSize}MB)`);
        continue;
      }

      validFiles.push(file);
    }

    return validFiles;
  }, [maxFiles, maxSize, acceptedTypes]);

  const handleFiles = useCallback(async (files: File[]) => {
    if (files.length === 0) return;

    setIsUploading(true);
    try {
      await onUpload(files);
      toast.success(`${files.length} imagen${files.length > 1 ? 'es' : ''} subida${files.length > 1 ? 's' : ''} correctamente`);
    } catch (error: any) {
      console.error('Error uploading files:', error);
      toast.error('Error al subir las imágenes');
    } finally {
      setIsUploading(false);
    }
  }, [onUpload]);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const validFiles = validateFiles(files);
      if (validFiles.length > 0) {
        handleFiles(validFiles);
      }
    }
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [validateFiles, handleFiles]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const validFiles = validateFiles(files);
      if (validFiles.length > 0) {
        handleFiles(validFiles);
      }
    }
  }, [disabled, validateFiles, handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleClick = useCallback(() => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [disabled]);

  return (
    <div className={`image-upload-container ${className}`}>
      <style>{`
        .image-upload-container {
          position: relative;
        }
        
        .image-upload-dropzone {
          border: 2px dashed #dee2e6;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: #f8f9fa;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .image-upload-dropzone:hover {
          border-color: #007bff;
          background-color: #e3f2fd;
        }
        
        .image-upload-dropzone.dragging {
          border-color: #007bff;
          background-color: #e3f2fd;
          transform: scale(1.02);
        }
        
        .image-upload-dropzone.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .image-upload-dropzone.disabled:hover {
          border-color: #dee2e6;
          background-color: #f8f9fa;
          transform: none;
        }
        
        .image-upload-icon {
          font-size: 2rem;
          color: #6c757d;
          margin-bottom: 8px;
        }
        
        .image-upload-text {
          color: #6c757d;
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        
        .image-upload-hint {
          color: #adb5bd;
          font-size: 0.8rem;
        }
        
        .image-upload-input {
          display: none;
        }
      `}</style>

      <div
        className={`image-upload-dropzone ${isDragging ? 'dragging' : ''} ${disabled ? 'disabled' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        <div className="image-upload-icon">
          <i className="bi bi-cloud-upload"></i>
        </div>
        <div className="image-upload-text">
          {isUploading ? 'Subiendo imágenes...' : 'Arrastra imágenes aquí o haz clic para seleccionar'}
        </div>
        <div className="image-upload-hint">
          Máximo {maxFiles} archivos, {maxSize}MB cada uno
        </div>
        <div className="image-upload-hint">
          Formatos: JPG, PNG, GIF, WebP
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes.join(',')}
        onChange={handleFileInputChange}
        className="image-upload-input"
        disabled={disabled}
      />
    </div>
  );
};

export default ImageUpload;