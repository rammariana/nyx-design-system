import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar } from '../../../src/components/Avatar';

describe('Avatar', () => {
  it('renders with text', () => {
    render(<Avatar text="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Avatar text="JD" size="small" />);
    expect(screen.getByText('JD')).toHaveClass(/small/);

    rerender(<Avatar text="JD" size="medium" />);
    expect(screen.getByText('JD')).toHaveClass(/medium/);

    rerender(<Avatar text="JD" size="large" />);
    expect(screen.getByText('JD')).toHaveClass(/large/);

    rerender(<Avatar text="JD" size="xlarge" />);
    expect(screen.getByText('JD')).toHaveClass(/xlarge/);
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Avatar text="JD" variant="circle" />);
    expect(screen.getByText('JD')).toHaveClass(/circle/);

    rerender(<Avatar text="JD" variant="square" />);
    expect(screen.getByText('JD')).toHaveClass(/square/);

    rerender(<Avatar text="JD" variant="rounded" />);
    expect(screen.getByText('JD')).toHaveClass(/rounded/);
  });

  it('renders with image', () => {
    render(<Avatar image="https://example.com/avatar.jpg" alt="John Doe" />);
    const img = screen.getByAltText('John Doe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('falls back to text when image fails to load', () => {
    render(<Avatar text="JD" image="https://example.com/invalid.jpg" />);
    const img = screen.getByRole('img');
    fireEvent.error(img);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('shows active state', () => {
    render(<Avatar text="JD" isActive />);
    expect(screen.getByText('JD')).toHaveClass(/active/);
  });

  it('is clickable when onClick is provided', () => {
    const handleClick = vi.fn();
    render(<Avatar text="JD" onClick={handleClick} />);
    
    const avatar = screen.getByText('JD');
    expect(avatar).toHaveClass(/clickable/);
    expect(avatar).toHaveAttribute('role', 'button');
    expect(avatar).toHaveAttribute('tabIndex', '0');
    
    fireEvent.click(avatar);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard events when clickable', () => {
    const handleClick = vi.fn();
    render(<Avatar text="JD" onClick={handleClick} />);
    
    const avatar = screen.getByText('JD');
    
    fireEvent.keyDown(avatar, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    fireEvent.keyDown(avatar, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('applies custom className', () => {
    render(<Avatar text="JD" className="custom-avatar" />);
    expect(screen.getByText('JD')).toHaveClass('custom-avatar');
  });

  it('applies custom backgroundColor', () => {
    render(<Avatar text="JD" backgroundColor="#ff0000" />);
    const avatar = screen.getByText('JD');
    expect(avatar).toHaveStyle('background-color: #ff0000');
  });

  it('applies custom color', () => {
    render(<Avatar text="JD" color="#ffffff" />);
    const avatar = screen.getByText('JD');
    expect(avatar).toHaveStyle('color: #ffffff');
  });

  it('has proper aria-label', () => {
    render(<Avatar text="John Doe" />);
    expect(screen.getByLabelText('Avatar de John Doe')).toBeInTheDocument();
  });

  it('has custom aria-label when provided', () => {
    render(<Avatar text="JD" alt="Custom label" />);
    expect(screen.getByLabelText('Custom label')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Avatar text="JD" ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('converts text to uppercase', () => {
    render(<Avatar text="john doe" />);
    expect(screen.getByText('JOHN DOE')).toBeInTheDocument();
  });

  it('renders without text or image', () => {
    render(<Avatar />);
    const avatar = screen.getByLabelText('Avatar');
    expect(avatar).toBeInTheDocument();
  });
});
