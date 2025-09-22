import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Details } from '../../../src/components/Details';

describe('Details', () => {
  const summary = 'Resumen';
  const content = 'Contenido expandible';

  it('renderiza el summary y el children', () => {
    render(<Details summary={summary}>{content}</Details>);
    expect(screen.getByText(summary)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('aplica la clase base y la variante por defecto (card)', () => {
    render(<Details summary={summary}>{content}</Details>);
    const details = screen.getByText(summary).closest('details');
    expect(details?.className).toMatch(/container/);
    expect(details?.className).toMatch(/card/);
  });

  it('aplica la clase de variante ghost', () => {
    render(<Details summary={summary} variant="ghost">{content}</Details>);
    const details = screen.getByText(summary).closest('details');
    expect(details?.className).toMatch(/ghost/);
  });

  it('aplica la clase de variante ghost-circle-icon', () => {
    render(<Details summary={summary} variant="ghost-circle-icon">{content}</Details>);
    const details = screen.getByText(summary).closest('details');
    expect(details?.className).toMatch(/ghost-circle-icon/);
  });

  it('aplica className adicional si se proporciona', () => {
    render(<Details summary={summary} className="custom-class">{content}</Details>);
    const details = screen.getByText(summary).closest('details');
    expect(details?.className).toMatch(/custom-class/);
  });

  it('renderiza la píldora de estado si pillText y pillVariant están definidos', () => {
    render(
      <Details summary={summary} pillText="Estado" pillVariant="success">
        {content}
      </Details>
    );
    expect(screen.getByText('Estado')).toBeInTheDocument();
  });

  it('no renderiza la píldora si falta pillText o pillVariant', () => {
    render(<Details summary={summary} pillText="Estado">{content}</Details>);
    expect(screen.queryByText('Estado')).not.toBeInTheDocument();

    render(<Details summary={summary} pillVariant="success">{content}</Details>);
    expect(screen.queryByText('success')).not.toBeInTheDocument();
  });

  it('renderiza slotRight si se proporciona y no la píldora', () => {
    render(
      <Details
        summary={summary}
        pillText="Estado"
        pillVariant="success"
        slotRight={<span data-testid="slot-right">Slot</span>}
      >
        {content}
      </Details>
    );
    expect(screen.getByTestId('slot-right')).toBeInTheDocument();
    expect(screen.queryByText('Estado')).not.toBeInTheDocument();
  });

  it('el details inicia abierto si defaultOpen es true', () => {
    render(<Details summary={summary} defaultOpen>{content}</Details>);
    const details = screen.getByText(summary).closest('details');
    expect(details?.hasAttribute('open')).toBe(true);
  });

  it('el details inicia cerrado si defaultOpen es false', () => {
    render(<Details summary={summary} defaultOpen={false}>{content}</Details>);
    const details = screen.getByText(summary).closest('details');
    expect(details?.hasAttribute('open')).toBe(false);
  });

  it('renderiza el ícono de chevron en el summary', () => {
    render(<Details summary={summary}>{content}</Details>);
    // Busca el elemento SVG con el ícono de chevron
    const chevronIcon = document.querySelector('svg');
    expect(chevronIcon).toBeInTheDocument();
  });
});
