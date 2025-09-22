import React, { ChangeEvent, FormEvent, ReactNode, forwardRef } from 'react';
import styles from './QueryBox.module.css';
import { Button } from '../Button';
import { Loader } from '../Loader';

export type QueryBoxModel = 'pro' | 'fast';
export type QueryBoxSize = 'small' | 'medium' | 'large';

export interface AttachedFile {
  name: string;
  size: number;
  type: 'image' | 'pdf' | 'document';
  previewUrl?: string;
}

export interface QueryBoxProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onAttachPdf?: () => void;
  onAttachImage?: () => void;
  onToggleModel?: () => void;
  isLoading?: boolean;
  loadingMessage?: string;
  model?: QueryBoxModel;
  placeholder?: string;
  attachedFiles?: AttachedFile[];
  onRemoveFile?: (index: number, type: AttachedFile['type']) => void;
  size?: QueryBoxSize;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  showAttachments?: boolean;
  showModelToggle?: boolean;
  submitButtonText?: string;
  cancelButtonText?: string;
  'data-testid'?: string;
}

export const QueryBox = forwardRef<HTMLFormElement, QueryBoxProps>(
  ({
    value,
    onChange,
    onSubmit,
    onAttachPdf,
    onAttachImage,
    onToggleModel,
    isLoading = false,
    loadingMessage = 'Procesando...',
    model = 'fast',
    placeholder = 'Escribe tu consulta aquí...',
    attachedFiles = [],
    onRemoveFile,
    size = 'medium',
    disabled = false,
    className,
    maxLength,
    showAttachments = true,
    showModelToggle = true,
    submitButtonText,
    cancelButtonText,
    'data-testid': dataTestId,
  }, ref) => {
    const containerClassName = [
      styles.container,
      styles[size],
      isLoading ? styles.loading : '',
      model === 'pro' ? styles.proBorder : '',
      disabled ? styles.disabled : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      if (!disabled && !isLoading && (value.trim() || attachedFiles.length > 0)) {
        onSubmit(event);
      }
    };

    const handleToggleModel = () => {
      if (!disabled && !isLoading && onToggleModel) {
        onToggleModel();
      }
    };

    const formatFileSize = (bytes: number): string => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const getFileIcon = (type: AttachedFile['type']): ReactNode => {
      switch (type) {
        case 'image':
          return <i className="bi bi-image" />;
        case 'pdf':
          return <i className="bi bi-file-earmark-pdf" />;
        case 'document':
          return <i className="bi bi-file-earmark-text" />;
        default:
          return <i className="bi bi-file" />;
      }
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={containerClassName}
        data-testid={dataTestId || "query-box-form"}
      >
        {showAttachments && attachedFiles.length > 0 && (
          <div className={styles.attachmentsContainer}>
            {attachedFiles.map((file, index) => (
              <div key={`${file.name}-${index}`} className={styles.attachmentPill}>
                {file.type === 'image' && file.previewUrl && (
                  <img 
                    src={file.previewUrl} 
                    alt={file.name} 
                    className={styles.attachmentPreview}
                  />
                )}
                {file.type !== 'image' && (
                  <span className={styles.fileIcon}>
                    {getFileIcon(file.type)}
                  </span>
                )}
                <div className={styles.fileInfo}>
                  <span className={styles.fileName}>
                    {file.name.length > 20 ? `${file.name.substring(0, 20)}...` : file.name}
                  </span>
                  <span className={styles.fileSize}>
                    {formatFileSize(file.size)}
                  </span>
                </div>
                {onRemoveFile && (
                  <Button
                    type="button"
                    variant="icon"
                    size="small"
                    className={styles.removeAttachmentBtn}
                    onClick={() => onRemoveFile(index, file.type)}
                    data-testid="remove-file-button"
                    aria-label={`Eliminar ${file.name}`}
                  >
                    <i className="bi bi-x" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}

        <textarea
          className={styles.textArea}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || isLoading}
          maxLength={maxLength}
          data-testid="query-textarea"
          rows={size === 'small' ? 3 : size === 'large' ? 6 : 4}
        />

        {maxLength && (
          <div className={styles.characterCount}>
            {value.length}/{maxLength}
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.actions}>
            {isLoading ? (
              <Loader 
                variant="dots" 
                size="small" 
                message={loadingMessage}
              />
            ) : (
              <>
                {onAttachPdf && (
                  <Button 
                    variant="icon" 
                    type="button" 
                    onClick={onAttachPdf}
                    disabled={disabled}
                    data-testid="attach-pdf-button"
                    aria-label="Adjuntar PDF"
                  >
                    <i className="bi bi-file-earmark-pdf" />
                  </Button>
                )}
                {onAttachImage && (
                  <Button 
                    variant="icon" 
                    type="button" 
                    onClick={onAttachImage}
                    disabled={disabled}
                    data-testid="attach-image-button"
                    aria-label="Adjuntar imagen"
                  >
                    <i className="bi bi-image" />
                  </Button>
                )}
              </>
            )}
          </div>

          <div className={styles.submitSection}>
            {showModelToggle && onToggleModel && (
              <div className={styles.modelToggle}>
                <span 
                  className={`${styles.modelLabel} ${model === 'fast' ? styles.active : ''}`}
                  onClick={handleToggleModel}
                >
                  Fast
                </span>
                <div className={styles.toggleSwitch}>
                  <div 
                    className={`${styles.toggleSlider} ${model === 'pro' ? styles.proActive : ''}`}
                  />
                </div>
                <span 
                  className={`${styles.modelLabel} ${model === 'pro' ? styles.active : ''}`}
                  onClick={handleToggleModel}
                >
                  Pro
                </span>
              </div>
            )}
            
            <Button
              type="submit"
              className={`${styles.submitButton} ${isLoading ? styles.cancelButton : styles[model]}`}
              disabled={disabled || (!isLoading && !value.trim() && attachedFiles.length === 0)}
              variant={isLoading ? "danger" : "primary"}
              data-testid="submit-button"
            >
              {isLoading ? (
                <>
                  <i className="bi bi-stop-circle" data-testid="cancel-icon" />
                  {cancelButtonText && <span>{cancelButtonText}</span>}
                </>
              ) : (
                <>
                  <i className="bi bi-arrow-up" data-testid="send-icon" />
                  {submitButtonText && <span>{submitButtonText}</span>}
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    );
  }
);

QueryBox.displayName = 'QueryBox';
