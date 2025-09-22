import { render, screen, fireEvent } from '@testing-library/react';
import { Banner } from '../../../src/components/Banner';

describe('Banner', () => {
  it('renders with children', () => {
    render(<Banner>Test message</Banner>);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Banner variant="info">Info message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).toHaveClass(/info/);

    rerender(<Banner variant="success">Success message</Banner>);
    expect(banner).toHaveClass(/success/);

    rerender(<Banner variant="warning">Warning message</Banner>);
    expect(banner).toHaveClass(/warning/);

    rerender(<Banner variant="error">Error message</Banner>);
    expect(banner).toHaveClass(/error/);

    rerender(<Banner variant="neutral">Neutral message</Banner>);
    expect(banner).toHaveClass(/neutral/);
  });

  it('renders with title', () => {
    render(<Banner title="Test Title">Test message</Banner>);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(<Banner icon="🚨">Test message</Banner>);
    expect(screen.getByText('🚨')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('renders with actions', () => {
    const actions = <button>Action Button</button>;
    render(<Banner actions={actions}>Test message</Banner>);
    expect(screen.getByText('Action Button')).toBeInTheDocument();
  });

  it('renders with close button when onClose is provided', () => {
    const onClose = vi.fn();
    render(<Banner onClose={onClose}>Test message</Banner>);
    
    const closeButton = screen.getByLabelText('Cerrar banner');
    expect(closeButton).toBeInTheDocument();
    
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not render close button when dismissible is false', () => {
    const onClose = vi.fn();
    render(<Banner onClose={onClose} dismissible={false}>Test message</Banner>);
    
    expect(screen.queryByLabelText('Cerrar banner')).not.toBeInTheDocument();
  });

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    render(<Banner onClose={onClose}>Test message</Banner>);
    
    const banner = screen.getByText('Test message').closest('div');
    fireEvent.keyDown(banner!, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when other keys are pressed', () => {
    const onClose = vi.fn();
    render(<Banner onClose={onClose}>Test message</Banner>);
    
    const banner = screen.getByText('Test message').closest('div');
    fireEvent.keyDown(banner!, { key: 'Enter' });
    expect(onClose).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Banner className="custom-banner">Test message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).toHaveClass('custom-banner');
  });

  it('has proper ARIA attributes', () => {
    render(<Banner>Test message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).toHaveAttribute('role', 'alert');
    expect(banner).toHaveAttribute('aria-live', 'polite');
  });

  it('renders complex layout when title, icon, or actions are provided', () => {
    render(<Banner title="Title" icon="🚨" actions={<button>Action</button>}>Test message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).toHaveClass(/layoutComplex/);
  });

  it('renders simple layout when only children are provided', () => {
    render(<Banner>Test message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).toHaveClass(/layoutSimple/);
  });

  it('renders complex layout with icon and children only', () => {
    render(<Banner icon="🚨">Test message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).toHaveClass(/layoutComplex/);
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Banner ref={ref}>Test message</Banner>);
    expect(ref).toHaveBeenCalled();
  });

  it('renders with fullWidth by default', () => {
    render(<Banner>Test message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).toHaveClass(/fullWidth/);
  });

  it('does not render fullWidth when fullWidth is false', () => {
    render(<Banner fullWidth={false}>Test message</Banner>);
    const banner = document.querySelector('[class*="container"]');
    expect(banner).not.toHaveClass(/fullWidth/);
  });

  it('renders icon in simple layout', () => {
    render(<Banner icon="🚨">Test message</Banner>);
    expect(screen.getByText('🚨')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });
});
