import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../src/components/Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass(/primary/);

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass(/secondary/);

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button')).toHaveClass(/danger/);
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass(/small/);

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass(/medium/);

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass(/large/);
  });

  it('renders with different radius', () => {
    const { rerender } = render(<Button radius="default">Default</Button>);
    expect(screen.getByRole('button')).toHaveClass(/default/);

    rerender(<Button radius="pill">Pill</Button>);
    expect(screen.getByRole('button')).toHaveClass(/pill/);
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled when loading', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows loading spinner when loading', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByRole('button')).toHaveClass(/loading/);
  });

  it('renders with left icon', () => {
    render(<Button leftIcon="←">With Icon</Button>);
    expect(screen.getByText('←')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Button rightIcon="→">With Icon</Button>);
    expect(screen.getByText('→')).toBeInTheDocument();
  });

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass(/fullWidth/);
  });

  it('renders as different element when as prop is provided', () => {
    render(<Button as="a" href="/test">Link Button</Button>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref).toHaveBeenCalled();
  });
});
