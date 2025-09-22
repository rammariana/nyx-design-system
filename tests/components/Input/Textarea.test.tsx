import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from '../../../src/components/Input';

describe('Textarea', () => {
  it('renders with default props', () => {
    render(<Textarea placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Textarea size="small" />);
    expect(screen.getByRole('textbox')).toHaveClass(/small/);

    rerender(<Textarea size="medium" />);
    expect(screen.getByRole('textbox')).toHaveClass(/medium/);

    rerender(<Textarea size="large" />);
    expect(screen.getByRole('textbox')).toHaveClass(/large/);
  });

  it('handles textarea changes', () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Textarea disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('shows error state', () => {
    render(<Textarea error />);
    expect(screen.getByRole('textbox')).toHaveClass(/error/);
  });

  it('shows helper text', () => {
    render(<Textarea helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('shows error helper text', () => {
    render(<Textarea error helperText="This is an error" />);
    const helperText = screen.getByText('This is an error');
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveClass(/errorText/);
  });

  it('applies custom className', () => {
    render(<Textarea className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Textarea ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('has resize vertical by default', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveStyle('resize: vertical');
  });
});
