import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ScrollableContainer } from '../../../src/components/ScrollableContainer';

describe('ScrollableContainer', () => {
  const testContent = <div data-testid="test-content">Test content</div>;

  it('renderiza el children correctamente', () => {
    render(<ScrollableContainer>{testContent}</ScrollableContainer>);
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  it('aplica la clase scrollY por defecto', () => {
    render(<ScrollableContainer>{testContent}</ScrollableContainer>);
    const container = screen.getByTestId('test-content').parentElement;
    expect(container?.className).toMatch(/scrollY/);
  });

  it('aplica la clase scrollY cuando direction es y', () => {
    render(<ScrollableContainer direction="y">{testContent}</ScrollableContainer>);
    const container = screen.getByTestId('test-content').parentElement;
    expect(container?.className).toMatch(/scrollY/);
  });

  it('aplica la clase scrollX cuando direction es x', () => {
    render(<ScrollableContainer direction="x">{testContent}</ScrollableContainer>);
    const container = screen.getByTestId('test-content').parentElement;
    expect(container?.className).toMatch(/scrollX/);
  });

  it('aplica className adicional si se proporciona', () => {
    render(<ScrollableContainer className="custom-class">{testContent}</ScrollableContainer>);
    const container = screen.getByTestId('test-content').parentElement;
    expect(container?.className).toMatch(/custom-class/);
  });

  it('combina className personalizado con clase de scroll', () => {
    render(
      <ScrollableContainer direction="x" className="custom-class">
        {testContent}
      </ScrollableContainer>
    );
    const container = screen.getByTestId('test-content').parentElement;
    expect(container?.className).toMatch(/scrollX/);
    expect(container?.className).toMatch(/custom-class/);
  });
});
