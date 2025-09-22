import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DropdownMenu } from '../../../src/components/DropdownMenu';

describe('DropdownMenu', () => {
  const menuContent = <div data-testid="menu-content">Contenido del menú</div>;
  const triggerText = 'Abrir menú';

  function getTriggerProps(extraProps = {}) {
    return {
      trigger: (isOpen: boolean) => (
        <button type="button" {...extraProps}>
          {triggerText} {isOpen ? '▲' : '▼'}
        </button>
      ),
      children: menuContent,
    };
  }

  it('renderiza el trigger correctamente', () => {
    render(<DropdownMenu {...getTriggerProps()} />);
    expect(screen.getByRole('button', { name: /abrir menú/i })).toBeInTheDocument();
  });

  it('no muestra el menú por defecto', () => {
    render(<DropdownMenu {...getTriggerProps()} />);
    expect(screen.queryByTestId('menu-content')).not.toBeInTheDocument();
  });

  it('muestra el menú al hacer click en el trigger', () => {
    render(<DropdownMenu {...getTriggerProps()} />);
    fireEvent.click(screen.getByRole('button', { name: /abrir menú/i }));
    expect(screen.getByTestId('menu-content')).toBeInTheDocument();
  });

  it('cierra el menú al hacer click fuera', () => {
    render(<DropdownMenu {...getTriggerProps()} />);
    fireEvent.click(screen.getByRole('button', { name: /abrir menú/i }));
    expect(screen.getByTestId('menu-content')).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByTestId('menu-content')).not.toBeInTheDocument();
  });

  it('respeta el onClick original del trigger', () => {
    const onClick = vi.fn();
    render(<DropdownMenu {...getTriggerProps({ onClick })} />);
    fireEvent.click(screen.getByRole('button', { name: /abrir menú/i }));
    expect(onClick).toHaveBeenCalled();
  });

  it('aplica la clase base container al contenedor principal', () => {
    render(<DropdownMenu {...getTriggerProps()} />);
    const container = screen.getByRole('button', { name: /abrir menú/i }).parentElement;
    expect(container?.className).toMatch(/container/);
  });

  it('aplica la clase menu y bottom-right por defecto al menú', () => {
    render(<DropdownMenu {...getTriggerProps()} />);
    fireEvent.click(screen.getByRole('button', { name: /abrir menú/i }));
    const menu = screen.getByTestId('menu-content').parentElement;
    expect(menu?.className).toMatch(/menu/);
    expect(menu?.className).toMatch(/bottom-right/);
  });

  it('aplica la clase bottom-left cuando position es bottom-left', () => {
    render(
      <DropdownMenu
        {...getTriggerProps()}
        position="bottom-left"
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /abrir menú/i }));
    const menu = screen.getByTestId('menu-content').parentElement;
    expect(menu?.className).toMatch(/menu/);
    expect(menu?.className).toMatch(/bottom-left/);
  });
});
