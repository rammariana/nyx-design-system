import React from 'react';

interface ImageLightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onImageSelect: (index: number) => void;
  onUploadImages?: (files: File[]) => Promise<void>;
  isUploading?: boolean;
  showUploadButton?: boolean;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  onImageSelect,
  onUploadImages,
  isUploading = false,
  showUploadButton = false
}) => {
  if (!isOpen) return null;

  const handleFileUpload = () => {
    if (!onUploadImages) return;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        await onUploadImages(Array.from(files));
      }
    };
    input.click();
  };

  return (
    <>
      <style>{`
        .lightbox-overlay { 
          position: fixed; 
          inset: 0; 
          background: rgba(0,0,0,0.7); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          z-index: 1050; 
        }
        .lightbox-content { 
          background: #fff; 
          border: 1px solid #e9ecef; 
          border-radius: 10px; 
          padding: 12px; 
          max-width: 95vw; 
          max-height: 90vh; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          position: relative; 
        }
        .btn-close-lightbox { 
          position: absolute; 
          top: 8px; 
          right: 10px; 
          background: transparent; 
          border: none; 
          font-size: 24px; 
          line-height: 1; 
          cursor: pointer; 
          color: #6c757d; 
        }
        .lightbox-main { 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          width: 100%; 
        }
        .lightbox-thumbs { 
          margin-top: 8px; 
          width: 100%; 
          display: flex; 
          overflow-x: auto; 
          padding-top: 4px; 
        }
        .lightbox-upload-section {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #e9ecef;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
      `}</style>

      <div className="lightbox-overlay" onClick={onClose}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button className="btn-close-lightbox" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
          <div className="lightbox-main">
            {images.length > 0 ? (
              <img
                src={images[currentIndex]}
                alt="Vista"
                style={{ 
                  maxWidth: '90vw', 
                  maxHeight: '70vh', 
                  objectFit: 'contain', 
                  borderRadius: 8 
                }}
              />
            ) : (
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px', color: '#6c757d' }}>
                <i className="bi bi-image" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                <h5>No hay imágenes</h5>
                <p className="text-muted">Sube imágenes para esta partida</p>
              </div>
            )}
            {/* Navigation arrows - only show if there are images */}
            {images.length > 1 && (
              <>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  style={{ 
                    position: 'absolute', 
                    left: 10, 
                    top: '50%', 
                    transform: 'translateY(-50%)' 
                  }}
                  onClick={onPrevious}
                  aria-label="Anterior"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  style={{ 
                    position: 'absolute', 
                    right: 10, 
                    top: '50%', 
                    transform: 'translateY(-50%)' 
                  }}
                  onClick={onNext}
                  aria-label="Siguiente"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </>
            )}
          </div>
          {/* Thumbnails - only show if there are images */}
          {images.length > 0 && (
            <div className="lightbox-thumbs">
              {images.map((url, i) => (
                <img
                  key={`thumb-${i}`}
                  src={url}
                  alt={`thumb-${i}`}
                  onClick={() => onImageSelect(i)}
                  style={{ 
                    width: 56, 
                    height: 56, 
                    objectFit: 'cover', 
                    borderRadius: 6, 
                    border: i === currentIndex ? '2px solid #0d6efd' : '1px solid #e9ecef', 
                    cursor: 'pointer', 
                    marginRight: 6 
                  }}
                />
              ))}
            </div>
          )}

          {/* Upload Section */}
          {showUploadButton && onUploadImages && (
            <div className="lightbox-upload-section">
              <button
                className="btn btn-primary btn-sm"
                onClick={handleFileUpload}
                disabled={isUploading}
                style={{ fontSize: '0.9rem' }}
              >
                {isUploading ? (
                  <>
                    <i className="bi bi-hourglass-split me-1"></i>
                    Subiendo...
                  </>
                ) : (
                  <>
                    <i className="bi bi-cloud-upload me-1"></i>
                    Subir más imágenes
                  </>
                )}
              </button>
              <small className="text-muted">
                JPG, PNG, GIF, WebP (máx. 10MB)
              </small>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
