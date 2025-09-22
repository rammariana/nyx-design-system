import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../src/components/Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Input variant="default" />);
    expect(screen.getByRole('textbox')).toHaveClass(/default/);

    rerender(<Input variant="pill" />);
    expect(screen.getByRole('textbox')).toHaveClass(/pill/);
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="small" />);
    expect(screen.getByRole('textbox')).toHaveClass(/small/);

    rerender(<Input size="medium" />);
    expect(screen.getByRole('textbox')).toHaveClass(/medium/);

    rerender(<Input size="large" />);
    expect(screen.getByRole('textbox')).toHaveClass(/large/);
  });

  it('renders with left icon', () => {
    render(<Input icon="🔍" iconPosition="left" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Input icon="🔍" iconPosition="right" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('handles input changes', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('shows error state', () => {
    render(<Input error />);
    expect(screen.getByRole('textbox')).toHaveClass(/error/);
  });

  it('shows helper text', () => {
    render(<Input helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('shows error helper text', () => {
    render(<Input error helperText="This is an error" />);
    const helperText = screen.getByText('This is an error');
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveClass(/errorText/);
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole('textbox').parentElement).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('renders with icon position left', () => {
    render(<Input icon="🔍" iconPosition="left" />);
    const icon = screen.getByText('🔍');
    expect(icon).toHaveClass(/icon-left/);
  });

  it('renders with icon position right', () => {
    render(<Input icon="🔍" iconPosition="right" />);
    const icon = screen.getByText('🔍');
    expect(icon).toHaveClass(/icon-right/);
  });
});
