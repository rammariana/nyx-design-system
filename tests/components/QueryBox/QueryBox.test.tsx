import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryBox } from '../../../src/components/QueryBox';

const mockAttachedFiles = [
  {
    name: 'test-image.jpg',
    size: 1024000,
    type: 'image' as const,
    previewUrl: 'https://example.com/image.jpg',
  },
  {
    name: 'test-document.pdf',
    size: 2048000,
    type: 'pdf' as const,
  },
];

describe('QueryBox', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
    onSubmit: vi.fn(),
  };

  it('renders with default props', () => {
    render(<QueryBox {...defaultProps} />);
    
    expect(screen.getByTestId('query-box-form')).toBeInTheDocument();
    expect(screen.getByTestId('query-textarea')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('renders with value', () => {
    render(<QueryBox {...defaultProps} value="Test query" />);
    
    const textarea = screen.getByTestId('query-textarea');
    expect(textarea).toHaveValue('Test query');
  });

  it('renders with placeholder', () => {
    render(<QueryBox {...defaultProps} placeholder="Enter your query" />);
    
    const textarea = screen.getByTestId('query-textarea');
    expect(textarea).toHaveAttribute('placeholder', 'Enter your query');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<QueryBox {...defaultProps} size="small" />);
    let container = document.querySelector('[class*="container"]');
    expect(container).toHaveClass(/small/);

    rerender(<QueryBox {...defaultProps} size="medium" />);
    container = document.querySelector('[class*="container"]');
    expect(container).toHaveClass(/medium/);

    rerender(<QueryBox {...defaultProps} size="large" />);
    container = document.querySelector('[class*="container"]');
    expect(container).toHaveClass(/large/);
  });

  it('renders with different models', () => {
    const { rerender } = render(<QueryBox {...defaultProps} model="fast" />);
    let container = document.querySelector('[class*="container"]');
    expect(container).not.toHaveClass(/proBorder/);

    rerender(<QueryBox {...defaultProps} model="pro" />);
    container = document.querySelector('[class*="container"]');
    expect(container).toHaveClass(/proBorder/);
  });

  it('renders with attached files', () => {
    render(<QueryBox {...defaultProps} attachedFiles={mockAttachedFiles} />);
    
    expect(screen.getByText('test-image.jpg')).toBeInTheDocument();
    expect(screen.getByText('test-document.pdf')).toBeInTheDocument();
    expect(screen.getByText('1000 KB')).toBeInTheDocument();
    expect(screen.getByText('1.95 MB')).toBeInTheDocument();
  });

  it('renders with loading state', () => {
    render(<QueryBox {...defaultProps} isLoading loadingMessage="Processing..." />);
    
    const container = document.querySelector('[class*="container"]');
    expect(container).toHaveClass(/loading/);
    
    const textarea = screen.getByTestId('query-textarea');
    expect(textarea).toBeDisabled();
  });

  it('renders as disabled', () => {
    render(<QueryBox {...defaultProps} disabled />);
    
    const container = document.querySelector('[class*="container"]');
    expect(container).toHaveClass(/disabled/);
    
    const textarea = screen.getByTestId('query-textarea');
    expect(textarea).toBeDisabled();
  });

  it('handles textarea change', () => {
    const onChange = vi.fn();
    render(<QueryBox {...defaultProps} onChange={onChange} />);
    
    const textarea = screen.getByTestId('query-textarea');
    fireEvent.change(textarea, { target: { value: 'New query' } });
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('handles form submission', () => {
    const onSubmit = vi.fn();
    render(<QueryBox {...defaultProps} value="Test query" onSubmit={onSubmit} />);
    
    const form = screen.getByTestId('query-box-form');
    fireEvent.submit(form);
    
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('disables submit button when no value and no files', () => {
    render(<QueryBox {...defaultProps} />);
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when has value', () => {
    render(<QueryBox {...defaultProps} value="Test query" />);
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).not.toBeDisabled();
  });

  it('enables submit button when has attached files', () => {
    render(<QueryBox {...defaultProps} attachedFiles={mockAttachedFiles} />);
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).not.toBeDisabled();
  });

  it('renders with maxLength and character count', () => {
    render(<QueryBox {...defaultProps} value="Test" maxLength={100} />);
    
    const textarea = screen.getByTestId('query-textarea');
    expect(textarea).toHaveAttribute('maxLength', '100');
    
    expect(screen.getByText('4/100')).toBeInTheDocument();
  });

  it('renders attachment buttons when handlers provided', () => {
    const onAttachPdf = vi.fn();
    const onAttachImage = vi.fn();
    
    render(
      <QueryBox 
        {...defaultProps} 
        onAttachPdf={onAttachPdf}
        onAttachImage={onAttachImage}
      />
    );
    
    expect(screen.getByTestId('attach-pdf-button')).toBeInTheDocument();
    expect(screen.getByTestId('attach-image-button')).toBeInTheDocument();
  });

  it('handles attachment button clicks', () => {
    const onAttachPdf = vi.fn();
    const onAttachImage = vi.fn();
    
    render(
      <QueryBox 
        {...defaultProps} 
        onAttachPdf={onAttachPdf}
        onAttachImage={onAttachImage}
      />
    );
    
    fireEvent.click(screen.getByTestId('attach-pdf-button'));
    expect(onAttachPdf).toHaveBeenCalledTimes(1);
    
    fireEvent.click(screen.getByTestId('attach-image-button'));
    expect(onAttachImage).toHaveBeenCalledTimes(1);
  });

  it('renders model toggle when handler provided', () => {
    const onToggleModel = vi.fn();
    
    render(<QueryBox {...defaultProps} onToggleModel={onToggleModel} />);
    
    expect(screen.getByText('Fast')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('handles model toggle', () => {
    const onToggleModel = vi.fn();
    
    render(<QueryBox {...defaultProps} onToggleModel={onToggleModel} />);
    
    fireEvent.click(screen.getByText('Pro'));
    expect(onToggleModel).toHaveBeenCalledTimes(1);
  });

  it('does not toggle model when loading', () => {
    const onToggleModel = vi.fn();
    
    render(<QueryBox {...defaultProps} onToggleModel={onToggleModel} isLoading />);
    
    fireEvent.click(screen.getByText('Pro'));
    expect(onToggleModel).not.toHaveBeenCalled();
  });

  it('renders remove file buttons when handler provided', () => {
    const onRemoveFile = vi.fn();
    
    render(
      <QueryBox 
        {...defaultProps} 
        attachedFiles={mockAttachedFiles}
        onRemoveFile={onRemoveFile}
      />
    );
    
    const removeButtons = screen.getAllByTestId('remove-file-button');
    expect(removeButtons).toHaveLength(2);
  });

  it('handles file removal', () => {
    const onRemoveFile = vi.fn();
    
    render(
      <QueryBox 
        {...defaultProps} 
        attachedFiles={mockAttachedFiles}
        onRemoveFile={onRemoveFile}
      />
    );
    
    const removeButtons = screen.getAllByTestId('remove-file-button');
    fireEvent.click(removeButtons[0]);
    
    expect(onRemoveFile).toHaveBeenCalledWith(0, 'image');
  });

  it('renders with custom className', () => {
    render(<QueryBox {...defaultProps} className="custom-querybox" />);
    
    const container = document.querySelector('[class*="custom-querybox"]');
    expect(container).toBeInTheDocument();
  });

  it('renders with custom test id', () => {
    render(<QueryBox {...defaultProps} data-testid="custom-querybox" />);
    
    expect(screen.getByTestId('custom-querybox')).toBeInTheDocument();
  });

  it('renders submit button with icon when not loading', () => {
    render(<QueryBox {...defaultProps} />);
    
    expect(screen.getByTestId('send-icon')).toBeInTheDocument();
  });

  it('renders cancel button with icon when loading', () => {
    render(<QueryBox {...defaultProps} isLoading />);
    
    expect(screen.getByTestId('cancel-icon')).toBeInTheDocument();
  });

  it('hides attachments when showAttachments is false', () => {
    render(
      <QueryBox 
        {...defaultProps} 
        attachedFiles={mockAttachedFiles}
        showAttachments={false}
      />
    );
    
    expect(screen.queryByText('test-image.jpg')).not.toBeInTheDocument();
  });

  it('hides model toggle when showModelToggle is false', () => {
    const onToggleModel = vi.fn();
    
    render(
      <QueryBox 
        {...defaultProps} 
        onToggleModel={onToggleModel}
        showModelToggle={false}
      />
    );
    
    expect(screen.queryByText('Fast')).not.toBeInTheDocument();
    expect(screen.queryByText('Pro')).not.toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<QueryBox {...defaultProps} ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('renders with proper accessibility attributes', () => {
    render(<QueryBox {...defaultProps} />);
    
    const textarea = screen.getByTestId('query-textarea');
    expect(textarea).toHaveAttribute('data-testid', 'query-textarea');
    
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toHaveAttribute('data-testid', 'submit-button');
  });
});
