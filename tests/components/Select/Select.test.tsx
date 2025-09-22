import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../../../src/components/Select';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3', disabled: true },
];

describe('Select', () => {
  it('renders with options', () => {
    render(<Select options={mockOptions} />);
    
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Select options={mockOptions} label="Choose an option" />);
    expect(screen.getByText('Choose an option')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Select options={mockOptions} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Select options={mockOptions} variant="default" />);
    let container = document.querySelector('[class*="selectContainer"]');
    expect(container).toBeInTheDocument();

    rerender(<Select options={mockOptions} variant="pill" />);
    container = document.querySelector('[class*="selectContainer"]');
    expect(container).toHaveClass(/pill/);

    rerender(<Select options={mockOptions} variant="subtle" />);
    container = document.querySelector('[class*="selectContainer"]');
    expect(container).toHaveClass(/subtle/);

    rerender(<Select options={mockOptions} variant="compact" />);
    container = document.querySelector('[class*="selectContainer"]');
    expect(container).toHaveClass(/compact/);
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Select options={mockOptions} size="small" />);
    const container = document.querySelector('[class*="selectContainer"]');
    expect(container).toHaveClass(/small/);

    rerender(<Select options={mockOptions} size="medium" />);
    expect(container).toHaveClass(/medium/);

    rerender(<Select options={mockOptions} size="large" />);
    expect(container).toHaveClass(/large/);
  });

  it('renders with error state', () => {
    render(<Select options={mockOptions} error />);
    const container = document.querySelector('[class*="selectContainer"]');
    expect(container).toHaveClass(/error/);
  });

  it('renders with helper text', () => {
    render(<Select options={mockOptions} helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('renders with error helper text', () => {
    render(<Select options={mockOptions} error helperText="This is an error" />);
    const errorText = screen.getByText('This is an error');
    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveClass(/errorText/);
  });

  it('renders as disabled', () => {
    render(<Select options={mockOptions} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('handles value changes', () => {
    const onChange = vi.fn();
    render(<Select options={mockOptions} onChange={onChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option2' } });
    
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue('option2');
  });

  it('renders with custom icon', () => {
    render(<Select options={mockOptions} icon="🔽" />);
    expect(screen.getByText('🔽')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Select options={mockOptions} className="custom-select" />);
    const wrapper = document.querySelector('[class*="custom-select"]');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders with fullWidth by default', () => {
    render(<Select options={mockOptions} />);
    const wrapper = document.querySelector('[class*="wrapper"]');
    expect(wrapper).toHaveClass(/fullWidth/);
  });

  it('does not render fullWidth when fullWidth is false', () => {
    render(<Select options={mockOptions} fullWidth={false} />);
    const wrapper = document.querySelector('[class*="wrapper"]');
    expect(wrapper).not.toHaveClass(/fullWidth/);
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Select options={mockOptions} ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('renders disabled options', () => {
    render(<Select options={mockOptions} />);
    const option3 = screen.getByText('Option 3');
    expect(option3).toBeDisabled();
  });

  it('renders with default value', () => {
    render(<Select options={mockOptions} defaultValue="option2" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('option2');
  });

  it('renders with controlled value', () => {
    render(<Select options={mockOptions} value="option1" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('option1');
  });

  it('applies proper accessibility attributes', () => {
    render(<Select options={mockOptions} label="Choose option" id="test-select" />);
    const label = screen.getByText('Choose option');
    const select = screen.getByRole('combobox');
    
    expect(label).toHaveAttribute('for', 'test-select');
    expect(select).toHaveAttribute('id', 'test-select');
  });

  it('renders all elements together', () => {
    render(
      <Select 
        options={mockOptions}
        label="Test Label"
        variant="pill"
        size="large"
        error
        helperText="Test helper"
        placeholder="Test placeholder"
        className="test-class"
      />
    );
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test helper')).toBeInTheDocument();
    expect(screen.getByText('Test placeholder')).toBeInTheDocument();
    expect(document.querySelector('[class*="test-class"]')).toBeInTheDocument();
  });
});
