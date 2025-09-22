import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SidePanel } from '../../../src/components/sidebar';

describe('SidePanel', () => {
  const testContent = <div data-testid="test-content">Test content</div>;

  it('renderiza el children correctamente', () => {
    render(<SidePanel>{testContent}</SidePanel>);
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  it('aplica la clase sidePanel por defecto', () => {
    render(<SidePanel>{testContent}</SidePanel>);
    const container = screen.getByTestId('test-content').closest('[role="dialog"]');
    expect(container?.className).toMatch(/sidePanel/);
  });

  it('aplica la clase leftPanel cuando position es left', () => {
    render(<SidePanel position="left">{testContent}</SidePanel>);
    const container = screen.getByTestId('test-content').closest('[role="dialog"]');
    expect(container?.className).toMatch(/leftPanel/);
  });

  it('no aplica leftPanel cuando position es right', () => {
    render(<SidePanel position="right">{testContent}</SidePanel>);
    const container = screen.getByTestId('test-content').closest('[role="dialog"]');
    expect(container?.className).not.toMatch(/leftPanel/);
  });

  it('aplica width personalizado', () => {
    render(<SidePanel width="400px">{testContent}</SidePanel>);
    const container = screen.getByTestId('test-content').closest('[role="dialog"]');
    expect(container).toHaveStyle('width: 400px');
  });

  it('aplica width por defecto de 50%', () => {
    render(<SidePanel>{testContent}</SidePanel>);
    const container = screen.getByTestId('test-content').closest('[role="dialog"]');
    expect(container).toHaveStyle('width: 50%');
  });

  it('aplica className adicional si se proporciona', () => {
    render(<SidePanel className="custom-class">{testContent}</SidePanel>);
    const container = screen.getByTestId('test-content').closest('[role="dialog"]');
    expect(container?.className).toMatch(/custom-class/);
  });

  it('tiene role="dialog" y aria-modal="true"', () => {
    render(<SidePanel>{testContent}</SidePanel>);
    const container = screen.getByRole('dialog');
    expect(container).toHaveAttribute('aria-modal', 'true');
  });
});
