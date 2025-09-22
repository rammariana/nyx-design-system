import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../../../src/components/Modal';

// Mock ReactDOM.createPortal
vi.mock('react-dom', async () => {
  const actual = await vi.importActual('react-dom');
  return {
    ...actual,
    createPortal: vi.fn((children) => children),
  };
});

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    children: <div>Modal content</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    document.body.innerHTML = '';
  });

  it('renders when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Modal {...defaultProps} title="Test Modal" />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    const footer = <button>Save</button>;
    render(<Modal {...defaultProps} footer={footer} />);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Modal {...defaultProps} size="small" />);
    const modalElement = document.querySelector('[class*="modal"]');
    expect(modalElement).toHaveClass(/small/);

    rerender(<Modal {...defaultProps} size="medium" />);
    expect(modalElement).toHaveClass(/medium/);

    rerender(<Modal {...defaultProps} size="large" />);
    expect(modalElement).toHaveClass(/large/);

    rerender(<Modal {...defaultProps} size="full" />);
    expect(modalElement).toHaveClass(/full/);
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    const closeButton = screen.getByLabelText('Cerrar modal');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} closeOnOverlayClick />);
    
    const overlay = document.querySelector('[class*="overlay"]');
    if (overlay) {
      fireEvent.click(overlay);
      expect(onClose).toHaveBeenCalledTimes(1);
    }
  });

  it('does not call onClose when overlay is clicked and closeOnOverlayClick is false', () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} closeOnOverlayClick={false} />);
    
    const overlay = screen.getByText('Modal content').closest('div')?.parentElement;
    if (overlay) {
      fireEvent.click(overlay);
      expect(onClose).not.toHaveBeenCalled();
    }
  });

  it('does not call onClose when modal content is clicked', () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    const modalContent = screen.getByText('Modal content').closest('div');
    if (modalContent) {
      fireEvent.click(modalContent);
      expect(onClose).not.toHaveBeenCalled();
    }
  });

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when Escape key is pressed and closeOnEscape is false', () => {
    const onClose = vi.fn();
    render(<Modal {...defaultProps} onClose={onClose} closeOnEscape={false} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not show close button when showCloseButton is false', () => {
    render(<Modal {...defaultProps} showCloseButton={false} />);
    expect(screen.queryByLabelText('Cerrar modal')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Modal {...defaultProps} className="custom-modal" />);
    const modalElement = document.querySelector('[class*="modal"]');
    expect(modalElement).toHaveClass('custom-modal');
  });

  it('prevents body scroll when modal is open', () => {
    render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when modal is closed', () => {
    const { rerender } = render(<Modal {...defaultProps} />);
    expect(document.body.style.overflow).toBe('hidden');
    
    rerender(<Modal {...defaultProps} isOpen={false} />);
    expect(document.body.style.overflow).toBe('unset');
  });

  it('creates modal root if it does not exist', () => {
    render(<Modal {...defaultProps} />);
    expect(document.getElementById('modal-root')).toBeInTheDocument();
  });

  it('uses existing modal root if it exists', () => {
    const existingRoot = document.createElement('div');
    existingRoot.id = 'modal-root';
    document.body.appendChild(existingRoot);
    
    render(<Modal {...defaultProps} />);
    expect(document.getElementById('modal-root')).toBe(existingRoot);
  });
});
