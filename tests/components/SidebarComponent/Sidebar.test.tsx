import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Sidebar } from '../../../src/components/sidebar';

describe('Sidebar', () => {
  const mockMenuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: 'bi bi-house',
      href: '/home',
      isActive: false,
    },
    {
      id: 'products',
      label: 'Products',
      icon: 'bi bi-box',
      onClick: vi.fn(),
      isActive: true,
    },
    {
      id: 'restricted',
      label: 'Restricted',
      icon: 'bi bi-lock',
      isRestricted: true,
      restrictionTooltip: 'Access denied',
    },
  ];

  const defaultProps = {
    menuItems: mockMenuItems,
    logoExpanded: 'logo-expanded.png',
    logoCollapsed: 'logo-collapsed.png',
    logoAlt: 'Test Logo',
  };

  it('renderiza correctamente con items del menú', () => {
    render(<Sidebar {...defaultProps} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Restricted')).toBeInTheDocument();
  });

  it('renderiza el logo expandido cuando está abierto', () => {
    render(<Sidebar {...defaultProps} isOpen={true} />);
    
    const logo = screen.getByAltText('Test Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo-expanded.png');
  });

  it('renderiza el logo colapsado cuando está cerrado', () => {
    render(<Sidebar {...defaultProps} isOpen={false} />);
    
    const logo = screen.getByAltText('Test Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo-collapsed.png');
  });

  it('maneja el toggle del sidebar', () => {
    const mockOnToggle = vi.fn();
    render(<Sidebar {...defaultProps} onToggle={mockOnToggle} />);
    
    const toggleButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleButton);
    
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('maneja clicks en items del menú', () => {
    const mockOnItemClick = vi.fn();
    render(<Sidebar {...defaultProps} onItemClick={mockOnItemClick} />);
    
    const productsButton = screen.getByText('Products').closest('button');
    fireEvent.click(productsButton!);
    
    expect(mockOnItemClick).toHaveBeenCalledWith('products');
  });

  it('maneja clicks en el logo', () => {
    const mockOnLogoClick = vi.fn();
    render(<Sidebar {...defaultProps} onLogoClick={mockOnLogoClick} />);
    
    const logoButton = screen.getByAltText('Test Logo').closest('button');
    fireEvent.click(logoButton!);
    
    expect(mockOnLogoClick).toHaveBeenCalledTimes(1);
  });

  it('muestra badges en items del menú', () => {
    const itemsWithBadge = [
      {
        id: 'badge-item',
        label: 'Badge Item',
        icon: 'bi bi-star',
        badge: {
          text: 'NEW',
          color: '#0d842d',
          backgroundColor: '#d5f7cf',
        },
      },
    ];

    render(<Sidebar {...defaultProps} menuItems={itemsWithBadge} />);
    
    expect(screen.getByText('NEW')).toBeInTheDocument();
  });

  it('muestra icono de restricción para items restringidos', () => {
    render(<Sidebar {...defaultProps} />);
    
    const restrictedItem = screen.getByText('Restricted').closest('[class*="sidebarList"]');
    expect(restrictedItem).toBeInTheDocument();
    
    const lockIcon = restrictedItem?.querySelector('.bi-lock-fill');
    expect(lockIcon).toBeInTheDocument();
  });

  it('aplica clase activa a items activos', () => {
    render(<Sidebar {...defaultProps} />);
    
    const activeItem = screen.getByText('Products').closest('[class*="sidebarList"]');
    expect(activeItem).toHaveClass(/active/);
  });

  it('usa estado interno cuando no se proporciona isOpen', () => {
    render(<Sidebar {...defaultProps} />);
    
    // Por defecto debería estar abierto
    const logo = screen.getByAltText('Test Logo');
    expect(logo).toHaveAttribute('src', 'logo-expanded.png');
  });

  it('aplica className personalizada', () => {
    const { container } = render(<Sidebar {...defaultProps} className="custom-class" />);
    
    const sidebar = container.querySelector('[class*="custom-class"]');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar?.className).toMatch(/custom-class/);
  });
});
