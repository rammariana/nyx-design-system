import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../src/components/Tooltip';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente Tooltip para mostrar información adicional al hacer hover sobre elementos.

## Características

- **Posiciones**: Top, bottom, left, right con flechas indicadoras
- **Contenido**: Soporte para texto simple o contenido React complejo
- **Interactividad**: Hover para mostrar/ocultar con transiciones suaves
- **Accesibilidad**: Roles ARIA y navegación por teclado
- **Responsive**: Se ajusta automáticamente al contenido
- **Animaciones**: Transiciones suaves de entrada y salida

## Posiciones

- **Top**: Aparece arriba del elemento con flecha hacia abajo
- **Bottom**: Aparece abajo del elemento con flecha hacia arriba (por defecto)
- **Left**: Aparece a la izquierda con flecha hacia la derecha
- **Right**: Aparece a la derecha con flecha hacia la izquierda

## Comportamiento

- **Hover**: Se muestra al pasar el mouse sobre el elemento trigger
- **Click Outside**: Se oculta al hacer clic fuera del tooltip
- **Persistencia**: Permanece visible mientras el mouse esté sobre el tooltip
- **Z-index**: Aparece por encima de otros elementos

## Accesibilidad

- **ARIA**: Roles y propiedades apropiadas
- **Teclado**: Soporte para navegación por teclado
- **Lectores de pantalla**: Contenido anunciado correctamente
- **Focus**: Indicadores visuales de foco
        `,
      },
    },
  },
  argTypes: {
    // Props principales
    children: {
      control: false,
      description: 'Elemento que dispara el tooltip al hacer hover',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    content: {
      control: 'text',
      description: 'Contenido que se muestra dentro del tooltip',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición del tooltip relativa al elemento trigger',
      table: {
        type: { summary: 'TooltipPosition' },
        defaultValue: { summary: "'bottom'" },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default'],
      description: 'Variante visual del tooltip',
      table: {
        type: { summary: 'TooltipVariant' },
        defaultValue: { summary: "'default'" },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Por defecto
export const Default: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip básico con posición bottom (por defecto).',
      },
    },
  },
};

// Posiciones
export const Top: Story = {
  args: {
    position: 'top',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip posicionado arriba del elemento.',
      },
    },
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip posicionado abajo del elemento.',
      },
    },
  },
};

export const Left: Story = {
  args: {
    position: 'left',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip posicionado a la izquierda del elemento.',
      },
    },
  },
};

export const Right: Story = {
  args: {
    position: 'right',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip posicionado a la derecha del elemento.',
      },
    },
  },
};

// Contenido largo
export const LongContent: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip con contenido largo que ocupa múltiples líneas.',
      },
    },
  },
};

// Contenido complejo
export const ComplexContent: Story = {
  args: {
    content: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--spacing-2)',
        alignItems: 'flex-start'
      }}>
        <strong style={{ color: 'var(--color-gray-800)' }}>Lorem ipsum</strong>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: 'var(--spacing-1)',
          marginTop: 'var(--spacing-1)'
        }}>
          <span style={{ 
            padding: 'var(--spacing-1) var(--spacing-2)', 
            backgroundColor: 'var(--color-blue-100)', 
            color: 'var(--color-blue-800)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-xs)'
          }}>
            Lorem
          </span>
          <span style={{ 
            padding: 'var(--spacing-1) var(--spacing-2)', 
            backgroundColor: 'var(--color-green-100)', 
            color: 'var(--color-green-800)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-xs)'
          }}>
            Ipsum
          </span>
        </div>
      </div>
    ),
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip con contenido complejo incluyendo texto, elementos y estilos.',
      },
    },
  },
};

// Todas las posiciones
export const AllPositions: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-8)', 
      alignItems: 'center',
      padding: 'var(--spacing-8)'
    }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
        <Tooltip position="top" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
          <Button>Lorem ipsum</Button>
        </Tooltip>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
        <Tooltip position="left" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
          <Button>Lorem ipsum</Button>
        </Tooltip>
        <Tooltip position="right" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
          <Button>Lorem ipsum</Button>
        </Tooltip>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
        <Tooltip position="bottom" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
          <Button>Lorem ipsum</Button>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todas las posiciones disponibles del tooltip.',
      },
    },
  },
};

// Diferentes elementos trigger
export const WithDifferentElements: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-4)', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
        <Button>Lorem ipsum</Button>
      </Tooltip>
      
      <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
        <span style={{ 
          padding: 'var(--spacing-2) var(--spacing-4)', 
          backgroundColor: 'var(--color-gray-100)', 
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          color: 'var(--color-gray-700)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-medium)'
        }}>
          Lorem ipsum
        </span>
      </Tooltip>
      
      <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
        <div style={{ 
          padding: 'var(--spacing-2) var(--spacing-4)', 
          backgroundColor: 'var(--color-blue-100)', 
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          display: 'inline-block',
          color: 'var(--color-blue-800)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-medium)'
        }}>
          Lorem ipsum
        </div>
      </Tooltip>
      
      <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--color-primary-500)',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-bold)'
        }}>
          ?
        </div>
      </Tooltip>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Tooltip con diferentes tipos de elementos trigger.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-6)',
      padding: 'var(--spacing-6)'
    }}>
      <div>
        <h4 style={{ 
          marginBottom: 'var(--spacing-3)', 
          color: 'var(--color-gray-700)',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-semibold)'
        }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
            <Button variant="primary">Lorem ipsum</Button>
          </Tooltip>
          <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
            <Button variant="outline">Lorem ipsum</Button>
          </Tooltip>
        </div>
      </div>
      
      <div>
        <h4 style={{ 
          marginBottom: 'var(--spacing-3)', 
          color: 'var(--color-gray-700)',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-semibold)'
        }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
            <span style={{ 
              padding: 'var(--spacing-2) var(--spacing-3)', 
              backgroundColor: 'var(--color-green-100)', 
              color: 'var(--color-green-800)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-medium)'
            }}>
              Lorem ipsum
            </span>
          </Tooltip>
          <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
            <span style={{ 
              padding: 'var(--spacing-2) var(--spacing-3)', 
              backgroundColor: 'var(--color-orange-100)', 
              color: 'var(--color-orange-800)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-medium)'
            }}>
              Lorem ipsum
            </span>
          </Tooltip>
        </div>
      </div>
      
      <div>
        <h4 style={{ 
          marginBottom: 'var(--spacing-3)', 
          color: 'var(--color-gray-700)',
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-semibold)'
        }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--color-gray-200)',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gray-600)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-bold)'
            }}>
              i
            </div>
          </Tooltip>
          <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--color-blue-200)',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-blue-800)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-bold)'
            }}>
              ?
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Casos de uso realistas con diferentes tipos de elementos y contenido.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    children: <Button>Lorem ipsum</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip que demuestra características de accesibilidad.',
      },
    },
  },
};