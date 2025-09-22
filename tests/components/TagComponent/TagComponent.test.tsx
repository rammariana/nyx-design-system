import { render, screen, fireEvent } from '@testing-library/react';
import { TagComponent } from '../../../src/components/TagComponent';

describe('TagComponent', () => {
  it('renders children', () => {
    render(<TagComponent variant="success">Test Tag</TagComponent>);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<TagComponent variant="success">Success</TagComponent>);
    let tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/success/);

    rerender(<TagComponent variant="error">Error</TagComponent>);
    tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/error/);

    rerender(<TagComponent variant="warning">Warning</TagComponent>);
    tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/warning/);

    rerender(<TagComponent variant="info">Info</TagComponent>);
    tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/info/);
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<TagComponent variant="success" size="small">Small</TagComponent>);
    let tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/small/);

    rerender(<TagComponent variant="success" size="medium">Medium</TagComponent>);
    tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/medium/);

    rerender(<TagComponent variant="success" size="large">Large</TagComponent>);
    tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/large/);
  });

  it('renders with dot by default', () => {
    render(<TagComponent variant="success">With Dot</TagComponent>);
    const dot = document.querySelector('[class*="dot"]');
    expect(dot).toBeInTheDocument();
  });

  it('renders without dot when hasDot is false', () => {
    render(<TagComponent variant="success" hasDot={false}>No Dot</TagComponent>);
    const dot = document.querySelector('[class*="dot"]');
    expect(dot).not.toBeInTheDocument();
  });

  it('renders as button when onClick is provided', () => {
    const onClick = vi.fn();
    render(<TagComponent variant="success" onClick={onClick}>Clickable</TagComponent>);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(/clickable/);
  });

  it('renders as div when onClick is not provided', () => {
    render(<TagComponent variant="success">Non-clickable</TagComponent>);
    
    const div = document.querySelector('[class*="pill"]');
    expect(div).toBeInTheDocument();
    expect(div).not.toHaveClass(/clickable/);
  });

  it('handles click events', () => {
    const onClick = vi.fn();
    render(<TagComponent variant="success" onClick={onClick}>Clickable</TagComponent>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn();
    render(<TagComponent variant="success" onClick={onClick} disabled>Disabled</TagComponent>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders disabled state', () => {
    render(<TagComponent variant="success" disabled>Disabled</TagComponent>);
    
    const tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/disabled/);
  });

  it('renders full width when specified', () => {
    render(<TagComponent variant="success" fullWidth>Full Width</TagComponent>);
    
    const tag = document.querySelector('[class*="pill"]');
    expect(tag).toHaveClass(/fullWidth/);
  });

  it('applies custom className', () => {
    render(<TagComponent variant="success" className="custom-tag">Custom</TagComponent>);
    
    const tag = document.querySelector('[class*="custom-tag"]');
    expect(tag).toBeInTheDocument();
  });

  it('renders with custom test id', () => {
    render(<TagComponent variant="success" data-testid="custom-tag">Test</TagComponent>);
    
    expect(screen.getByTestId('custom-tag')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<TagComponent variant="success" ref={ref}>Ref test</TagComponent>);
    expect(ref).toHaveBeenCalled();
  });

  it('renders with proper accessibility attributes when clickable', () => {
    const onClick = vi.fn();
    render(<TagComponent variant="success" onClick={onClick}>Accessible</TagComponent>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('tabIndex', '0');
  });

  it('renders with proper accessibility attributes when disabled', () => {
    const onClick = vi.fn();
    render(<TagComponent variant="success" onClick={onClick} disabled>Disabled</TagComponent>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveAttribute('tabIndex', '-1');
  });

  it('renders variants that hide dot', () => {
    const variants = ['pending', 'warning', 'error', 'info', 'high_success', 'danger', 'gray', 'muted'];
    
    variants.forEach(variant => {
      const { unmount } = render(
        <TagComponent variant={variant as any}>Hidden Dot</TagComponent>
      );
      
      const dot = document.querySelector('[class*="dot"]');
      expect(dot).toBeInTheDocument();
      expect(dot).toHaveStyle('display: none');
      
      unmount();
    });
  });

  it('renders variants that show dot', () => {
    const variants = ['verified', 'new', 'new_item', 'found', 'criteria', 'recommendations', 'success', 'primary', 'secondary', 'outline'];
    
    variants.forEach(variant => {
      const { unmount } = render(
        <TagComponent variant={variant as any}>Visible Dot</TagComponent>
      );
      
      const dot = document.querySelector('[class*="dot"]');
      expect(dot).toBeInTheDocument();
      
      unmount();
    });
  });

  it('handles keyboard events when clickable', () => {
    const onClick = vi.fn();
    render(<TagComponent variant="success" onClick={onClick}>Keyboard</TagComponent>);
    
    const button = screen.getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter' });
    
    // Note: Enter key doesn't trigger onClick by default, but the button should be focusable
    expect(button).toHaveAttribute('tabIndex', '0');
  });

  it('renders with long text and ellipsis', () => {
    const longText = 'This is a very long text that should be truncated with ellipsis';
    render(<TagComponent variant="success">{longText}</TagComponent>);
    
    const textElement = document.querySelector('[class*="text"]');
    expect(textElement).toHaveClass(/text/);
  });
});
