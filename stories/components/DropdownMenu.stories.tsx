import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../../src/components/DropdownMenu';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente DropdownMenu para crear menús desplegables con posicionamiento flexible.

## Características

- **Render Props**: Patrón flexible para el elemento disparador
- **Posicionamiento**: 4 posiciones diferentes (bottom-left, bottom-right, top-left, top-right)
- **Ancho personalizable**: Soporte para anchos específicos
- **Accesibilidad**: Cierre automático al hacer clic fuera
- **Animaciones**: Transiciones suaves de entrada y salida

## Posiciones

- **bottom-right**: Debajo del trigger, alineado a la derecha (por defecto)
- **bottom-left**: Debajo del trigger, alineado a la izquierda
- **top-right**: Encima del trigger, alineado a la derecha
- **top-left**: Encima del trigger, alineado a la izquierda

## Accesibilidad

- **Teclado**: Escape para cerrar, Tab para navegar
- **Click fuera**: Cierre automático al hacer clic fuera del menú
- **Focus**: Mantiene el foco en el trigger
        `,
      },
    },
  },
  argTypes: {
    trigger: {
      control: false,
      description: 'Función que recibe el estado isOpen y devuelve el elemento disparador',
      table: {
        type: { summary: '(isOpen: boolean) => ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Contenido del menú desplegable',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    position: {
      control: { type: 'select' },
      options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
      description: 'Posición del menú respecto al trigger',
      table: {
        type: { summary: "'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'" },
        defaultValue: { summary: "'bottom-right'" },
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Ancho personalizado del menú',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Contenido de menú básico
const basicMenuContent = (
  <div>
    <div style={{ 
      padding: 'var(--spacing-3) 0', 
      borderBottom: '1px solid var(--color-gray-200)',
      marginBottom: 'var(--spacing-2)'
    }}>
      <strong style={{ color: 'var(--color-gray-900)' }}>Opciones del menú</strong>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
      <button style={{ 
        width: '100%', 
        textAlign: 'left', 
        padding: 'var(--spacing-2)', 
        border: 'none', 
        background: 'none', 
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--color-gray-700)',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--color-gray-100)'}
      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
      >
        Opción 1
      </button>
      <button style={{ 
        width: '100%', 
        textAlign: 'left', 
        padding: 'var(--spacing-2)', 
        border: 'none', 
        background: 'none', 
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--color-gray-700)',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--color-gray-100)'}
      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
      >
        Opción 2
      </button>
      <button style={{ 
        width: '100%', 
        textAlign: 'left', 
        padding: 'var(--spacing-2)', 
        border: 'none', 
        background: 'none', 
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--color-gray-700)',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--color-gray-100)'}
      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
      >
        Opción 3
      </button>
    </div>
  </div>
);

// Contenido de menú complejo
const complexMenuContent = (
  <div>
    <div style={{ 
      padding: 'var(--spacing-3) 0', 
      borderBottom: '1px solid var(--color-gray-200)',
      marginBottom: 'var(--spacing-3)'
    }}>
      <strong style={{ color: 'var(--color-gray-900)' }}>Configuración</strong>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
      <div>
        <label style={{ 
          display: 'block', 
          fontSize: 'var(--text-sm)', 
          marginBottom: 'var(--spacing-1)',
          color: 'var(--color-gray-700)',
          fontWeight: 'var(--font-semibold)'
        }}>
          Tema
        </label>
        <select style={{ 
          width: '100%', 
          padding: 'var(--spacing-2)', 
          border: '1px solid var(--color-gray-300)', 
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-gray-900)'
        }}>
          <option>Claro</option>
          <option>Oscuro</option>
          <option>Automático</option>
        </select>
      </div>
      <div>
        <label style={{ 
          display: 'block', 
          fontSize: 'var(--text-sm)', 
          marginBottom: 'var(--spacing-1)',
          color: 'var(--color-gray-700)',
          fontWeight: 'var(--font-semibold)'
        }}>
          Idioma
        </label>
        <select style={{ 
          width: '100%', 
          padding: 'var(--spacing-2)', 
          border: '1px solid var(--color-gray-300)', 
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-gray-900)'
        }}>
          <option>Español</option>
          <option>Inglés</option>
          <option>Francés</option>
        </select>
      </div>
      <Button 
        size="small" 
        variant="primary" 
        style={{ width: '100%' }}
      >
        Guardar Configuración
      </Button>
    </div>
  </div>
);

// Por defecto (bottom-right)
export const Default: Story = {
  args: {
    trigger: (isOpen) => (
      <Button variant="primary">
        Menú {isOpen ? '▲' : '▼'}
      </Button>
    ),
    children: basicMenuContent,
  },
};

// Bottom Left
export const BottomLeft: Story = {
  args: {
    trigger: (isOpen) => (
      <Button variant="secondary">
        Bottom Left {isOpen ? '▲' : '▼'}
      </Button>
    ),
    children: basicMenuContent,
    position: 'bottom-left',
  },
};

// Top Right
export const TopRight: Story = {
  args: {
    trigger: (isOpen) => (
      <Button variant="outline">
        Top Right {isOpen ? '▲' : '▼'}
      </Button>
    ),
    children: basicMenuContent,
    position: 'top-right',
  },
};

// Top Left
export const TopLeft: Story = {
  args: {
    trigger: (isOpen) => (
      <Button variant="subtle">
        Top Left {isOpen ? '▲' : '▼'}
      </Button>
    ),
    children: basicMenuContent,
    position: 'top-left',
  },
};

// Ancho personalizado
export const CustomWidth: Story = {
  args: {
    trigger: (isOpen) => (
      <Button variant="primary">
        Ancho Personalizado {isOpen ? '▲' : '▼'}
      </Button>
    ),
    children: (
      <div>
        <div style={{ 
          padding: 'var(--spacing-3) 0', 
          borderBottom: '1px solid var(--color-gray-200)',
          marginBottom: 'var(--spacing-2)'
        }}>
          <strong style={{ color: 'var(--color-gray-900)' }}>Menú con ancho personalizado</strong>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
          <p style={{ color: 'var(--color-gray-600)', margin: 0 }}>
            Este menú tiene un ancho fijo de 400px
          </p>
          <button style={{ 
            width: '100%', 
            textAlign: 'left', 
            padding: 'var(--spacing-2)', 
            border: 'none', 
            background: 'none', 
            cursor: 'pointer',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-gray-700)'
          }}>
            Opción 1
          </button>
          <button style={{ 
            width: '100%', 
            textAlign: 'left', 
            padding: 'var(--spacing-2)', 
            border: 'none', 
            background: 'none', 
            cursor: 'pointer',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--color-gray-700)'
          }}>
            Opción 2
          </button>
        </div>
      </div>
    ),
    width: '400px',
  },
};

// Contenido complejo
export const ComplexContent: Story = {
  args: {
    trigger: (isOpen) => (
      <Button variant="primary">
        Menú Complejo {isOpen ? '▲' : '▼'}
      </Button>
    ),
    children: complexMenuContent,
  },
};

// Comparación de todas las posiciones
export const AllPositions: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      gap: 'var(--spacing-6)',
      padding: 'var(--spacing-8)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h3 style={{ margin: 0, color: 'var(--color-gray-900)' }}>Posiciones Inferiores</h3>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <DropdownMenu 
            trigger={(isOpen) => (
              <Button variant="secondary" size="small">
                Bottom Left {isOpen ? '▲' : '▼'}
              </Button>
            )}
            children={basicMenuContent}
            position="bottom-left"
          />
          <DropdownMenu 
            trigger={(isOpen) => (
              <Button variant="secondary" size="small">
                Bottom Right {isOpen ? '▲' : '▼'}
              </Button>
            )}
            children={basicMenuContent}
            position="bottom-right"
          />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h3 style={{ margin: 0, color: 'var(--color-gray-900)' }}>Posiciones Superiores</h3>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <DropdownMenu 
            trigger={(isOpen) => (
              <Button variant="outline" size="small">
                Top Left {isOpen ? '▲' : '▼'}
              </Button>
            )}
            children={basicMenuContent}
            position="top-left"
          />
          <DropdownMenu 
            trigger={(isOpen) => (
              <Button variant="outline" size="small">
                Top Right {isOpen ? '▲' : '▼'}
              </Button>
            )}
            children={basicMenuContent}
            position="top-right"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todas las posiciones disponibles del DropdownMenu.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Menú de usuario */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Menú de Usuario
        </h3>
        <DropdownMenu 
          trigger={(isOpen) => (
            <Button variant="ghost" leftIcon="👤">
              María García {isOpen ? '▲' : '▼'}
            </Button>
          )}
          children={
            <div>
              <div style={{ 
                padding: 'var(--spacing-3) 0', 
                borderBottom: '1px solid var(--color-gray-200)',
                marginBottom: 'var(--spacing-2)'
              }}>
                <div style={{ fontWeight: 'var(--font-semibold)', color: 'var(--color-gray-900)' }}>
                  María García
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                  maria@ejemplo.com
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                <button style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: 'var(--spacing-2)', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-gray-700)'
                }}>
                  Mi Perfil
                </button>
                <button style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: 'var(--spacing-2)', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-gray-700)'
                }}>
                  Configuración
                </button>
                <button style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: 'var(--spacing-2)', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-red-600)'
                }}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          }
        />
      </div>

      {/* Menú de acciones */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Menú de Acciones
        </h3>
        <DropdownMenu 
          trigger={(isOpen) => (
            <Button variant="icon" colorScheme="secondary">
              ⋯
            </Button>
          )}
          children={
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
                <button style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: 'var(--spacing-2)', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-gray-700)'
                }}>
                  ✏️ Editar
                </button>
                <button style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: 'var(--spacing-2)', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-gray-700)'
                }}>
                  📋 Duplicar
                </button>
                <button style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: 'var(--spacing-2)', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--color-red-600)'
                }}>
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el DropdownMenu en diferentes situaciones.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <DropdownMenu 
        trigger={(isOpen) => (
          <Button variant="primary">
            Ejemplo de Accesibilidad {isOpen ? '▲' : '▼'}
          </Button>
        )}
        children={
          <div>
            <div style={{ 
              padding: 'var(--spacing-3) 0', 
              borderBottom: '1px solid var(--color-gray-200)',
              marginBottom: 'var(--spacing-2)'
            }}>
              <strong style={{ color: 'var(--color-gray-900)' }}>Características de Accesibilidad</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
              <p style={{ margin: 0, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                • <strong>Teclado:</strong> Usa Tab para navegar, Escape para cerrar
              </p>
              <p style={{ margin: 0, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                • <strong>Click fuera:</strong> Cierre automático al hacer clic fuera del menú
              </p>
              <p style={{ margin: 0, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                • <strong>Focus:</strong> Mantiene el foco en el trigger
              </p>
              <p style={{ margin: 0, color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
                • <strong>Animaciones:</strong> Transiciones suaves para mejor UX
              </p>
            </div>
          </div>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que demuestra las características de accesibilidad del DropdownMenu.',
      },
    },
  },
};
