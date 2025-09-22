import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from '../../../src/components/Tooltip';

describe('Tooltip', () => {
  it('renders children', () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Trigger</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Trigger');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    });
  });

  it('hides tooltip on mouse leave', async () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Trigger</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Trigger');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    });
    
    fireEvent.mouseLeave(trigger);
    
    await waitFor(() => {
      expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();
    });
  });

  it('renders with different positions', () => {
    const { rerender } = render(
      <Tooltip content="Test tooltip" position="top">
        <button>Top</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Top');
    fireEvent.mouseEnter(trigger);
    
    const tooltip = document.querySelector('[class*="popup"]');
    expect(tooltip).toHaveClass(/top/);

    rerender(
      <Tooltip content="Test tooltip" position="bottom">
        <button>Bottom</button>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(screen.getByText('Bottom'));
    const tooltipBottom = document.querySelector('[class*="popup"]');
    expect(tooltipBottom).toHaveClass(/bottom/);
  });

  it('renders with default position', () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Default</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Default');
    fireEvent.mouseEnter(trigger);
    
    const tooltip = document.querySelector('[class*="popup"]');
    expect(tooltip).toHaveClass(/bottom/);
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(
      <Tooltip ref={ref} content="Test tooltip">
        <button>Ref test</button>
      </Tooltip>
    );
    expect(ref).toHaveBeenCalled();
  });

  it('renders with complex content', async () => {
    const complexContent = (
      <div>
        <h4>Complex Tooltip</h4>
        <p>This is a complex tooltip with multiple elements.</p>
      </div>
    );
    
    render(
      <Tooltip content={complexContent}>
        <button>Complex</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Complex');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Complex Tooltip')).toBeInTheDocument();
      expect(screen.getByText('This is a complex tooltip with multiple elements.')).toBeInTheDocument();
    });
  });

  it('handles mouse events on tooltip content', async () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Trigger</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Trigger');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    });
    
    // Test that tooltip is visible when hovering over trigger
    expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    
    // Test that tooltip disappears when leaving trigger
    fireEvent.mouseLeave(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();
    });
  });

  it('closes tooltip when clicking outside', async () => {
    render(
      <div>
        <Tooltip content="Test tooltip">
          <button>Trigger</button>
        </Tooltip>
        <button>Outside</button>
      </div>
    );
    
    const trigger = screen.getByText('Trigger');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      expect(screen.getByText('Test tooltip')).toBeInTheDocument();
    });
    
    const outside = screen.getByText('Outside');
    fireEvent.mouseDown(outside);
    
    await waitFor(() => {
      expect(screen.queryByText('Test tooltip')).not.toBeInTheDocument();
    });
  });

  it('renders with proper accessibility attributes', async () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Accessible</button>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Accessible');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      const tooltip = screen.getByText('Test tooltip');
      expect(tooltip).toHaveAttribute('role', 'tooltip');
      expect(tooltip).toHaveAttribute('aria-hidden', 'false');
    });
  });
});