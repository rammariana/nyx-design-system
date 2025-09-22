import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollableContainer } from '../../src/components/ScrollableContainer';

const meta: Meta<typeof ScrollableContainer> = {
  title: 'Components/ScrollableContainer',
  component: ScrollableContainer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente ScrollableContainer para crear contenedores con scroll controlado.

## Características

- **Direcciones**: Scroll vertical (y) y horizontal (x)
- **Responsive**: Se adapta automáticamente al contenedor padre
- **Accesibilidad**: Soporte completo para navegación por teclado
- **Personalizable**: Clases CSS adicionales mediante className
- **Ligero**: Implementación minimalista y eficiente

## Casos de Uso

- **Scroll Vertical**: Listas largas, contenido que excede la altura
- **Scroll Horizontal**: Tablas anchas, galerías de imágenes, contenido que excede el ancho
- **Contenedores de contenido**: Áreas de texto largo, formularios extensos
- **Dashboards**: Paneles con múltiples elementos desplazables

## Accesibilidad

- **Teclado**: Flechas para navegar, Page Up/Down para saltos
- **Lectores de pantalla**: Anuncia el contenido desplazable
- **Focus**: Mantiene el foco visible durante el scroll
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Contenido a mostrar dentro del contenedor',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    direction: {
      control: { type: 'select' },
      options: ['x', 'y'],
      description: 'Dirección del scroll',
      table: {
        type: { summary: "'x' | 'y'" },
        defaultValue: { summary: "'y'" },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clase CSS adicional para personalización',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollableContainer>;

// Contenido de ejemplo para demostrar el scroll vertical
const longVerticalContent = Array.from({ length: 50 }, (_, i) => (
  <div key={i} style={{ 
    padding: 'var(--spacing-3)', 
    margin: 'var(--spacing-1) 0', 
    backgroundColor: 'var(--color-gray-50)', 
    border: '1px solid var(--color-gray-200)',
    borderRadius: 'var(--radius-sm)',
    fontSize: 'var(--text-sm)'
  }}>
    <strong>Elemento {i + 1}</strong> - Este es un elemento de ejemplo para demostrar el scroll vertical. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
  </div>
));

// Contenido de ejemplo para demostrar el scroll horizontal
const wideHorizontalContent = Array.from({ length: 20 }, (_, i) => (
  <div key={i} style={{ 
    display: 'inline-block',
    padding: 'var(--spacing-2) var(--spacing-4)', 
    margin: 'var(--spacing-1)', 
    backgroundColor: 'var(--color-blue-50)', 
    border: '1px solid var(--color-blue-200)',
    borderRadius: 'var(--radius-sm)',
    whiteSpace: 'nowrap',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-semibold)'
  }}>
    Elemento {i + 1}
  </div>
));

// Contenido mixto para casos realistas
const realisticContent = (
  <div style={{ padding: 'var(--spacing-4)' }}>
    <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-gray-900)' }}>
      Lista de Usuarios
    </h3>
    {Array.from({ length: 25 }, (_, i) => (
      <div key={i} style={{
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--spacing-3)',
        margin: 'var(--spacing-1) 0',
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-gray-200)',
        borderRadius: 'var(--radius-sm)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-white)',
          fontWeight: 'var(--font-semibold)',
          marginRight: 'var(--spacing-3)'
        }}>
          {String.fromCharCode(65 + (i % 26))}
        </div>
        <div>
          <div style={{ fontWeight: 'var(--font-semibold)', color: 'var(--color-gray-900)' }}>
            Usuario {i + 1}
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
            usuario{i + 1}@ejemplo.com
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Scroll vertical por defecto
export const VerticalScroll: Story = {
  args: {
    direction: 'y',
    children: longVerticalContent,
  },
  parameters: {
    docs: {
      description: {
        story: 'Contenedor con scroll vertical. Útil para listas largas o contenido que excede la altura disponible.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px', border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
        <Story />
      </div>
    ),
  ],
};

// Scroll horizontal
export const HorizontalScroll: Story = {
  args: {
    direction: 'x',
    children: wideHorizontalContent,
  },
  parameters: {
    docs: {
      description: {
        story: 'Contenedor con scroll horizontal. Útil para tablas anchas o contenido que excede el ancho disponible.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100px', border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
        <Story />
      </div>
    ),
  ],
};

// Dirección por defecto (vertical)
export const DefaultDirection: Story = {
  args: {
    children: longVerticalContent,
  },
  parameters: {
    docs: {
      description: {
        story: 'Contenedor con dirección por defecto (vertical). No es necesario especificar la dirección.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
        <Story />
      </div>
    ),
  ],
};

// Con clase personalizada
export const WithCustomClass: Story = {
  args: {
    direction: 'y',
    children: longVerticalContent,
    className: 'custom-scroll-container',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con clase CSS personalizada para estilos adicionales.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', border: '2px solid var(--color-primary-500)', borderRadius: 'var(--radius-md)' }}>
        <style>{`
          .custom-scroll-container {
            background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-blue-50) 100%);
          }
          .custom-scroll-container::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scroll-container::-webkit-scrollbar-track {
            background: var(--color-gray-100);
            border-radius: var(--radius-sm);
          }
          .custom-scroll-container::-webkit-scrollbar-thumb {
            background: var(--color-primary-500);
            border-radius: var(--radius-sm);
          }
          .custom-scroll-container::-webkit-scrollbar-thumb:hover {
            background: var(--color-primary-600);
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
};

// Caso de uso realista
export const RealisticUseCase: Story = {
  args: {
    direction: 'y',
    children: realisticContent,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo realista de uso: lista de usuarios con scroll vertical.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px', border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
        <Story />
      </div>
    ),
  ],
};

// Comparación de direcciones
export const DirectionComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', height: '300px' }}>
      <div style={{ flex: 1, border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
        <h4 style={{ padding: 'var(--spacing-2)', margin: 0, backgroundColor: 'var(--color-gray-100)', borderBottom: '1px solid var(--color-gray-200)' }}>
          Scroll Vertical
        </h4>
        <ScrollableContainer direction="y">
          {longVerticalContent.slice(0, 15)}
        </ScrollableContainer>
      </div>
      <div style={{ flex: 1, border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
        <h4 style={{ padding: 'var(--spacing-2)', margin: 0, backgroundColor: 'var(--color-gray-100)', borderBottom: '1px solid var(--color-gray-200)' }}>
          Scroll Horizontal
        </h4>
        <ScrollableContainer direction="x">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            {wideHorizontalContent}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación lado a lado entre scroll vertical y horizontal.',
      },
    },
  },
};

// Casos de uso específicos
export const UseCaseExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Lista de notificaciones */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
          Notificaciones
        </h3>
        <div style={{ height: '200px', border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
          <ScrollableContainer direction="y">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} style={{
                padding: 'var(--spacing-3)',
                borderBottom: '1px solid var(--color-gray-200)',
                backgroundColor: i % 2 === 0 ? 'var(--color-white)' : 'var(--color-gray-50)'
              }}>
                <div style={{ fontWeight: 'var(--font-semibold)', color: 'var(--color-gray-900)' }}>
                  Notificación {i + 1}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
                  Esta es una notificación de ejemplo con contenido que puede ser largo.
                </div>
              </div>
            ))}
          </ScrollableContainer>
        </div>
      </div>

      {/* Galería de imágenes horizontal */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
          Galería de Imágenes
        </h3>
        <div style={{ height: '120px', border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
          <ScrollableContainer direction="x">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: 'var(--spacing-2)' }}>
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} style={{
                  width: '100px',
                  height: '80px',
                  backgroundColor: 'var(--color-primary-100)',
                  border: '2px solid var(--color-primary-300)',
                  borderRadius: 'var(--radius-sm)',
                  margin: '0 var(--spacing-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary-700)',
                  fontWeight: 'var(--font-semibold)',
                  flexShrink: 0
                }}>
                  Img {i + 1}
                </div>
              ))}
            </div>
          </ScrollableContainer>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos de casos de uso específicos: lista de notificaciones y galería de imágenes.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ height: '300px', border: '2px solid var(--color-gray-300)', borderRadius: 'var(--radius-md)' }}>
      <ScrollableContainer direction="y">
        <div style={{ padding: 'var(--spacing-4)' }}>
          <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-gray-900)' }}>
            Ejemplo de Accesibilidad
          </h3>
          <p style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
            Este contenedor es completamente accesible. Puedes navegar usando:
          </p>
          <ul style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
            <li>Flechas arriba/abajo para scroll lento</li>
            <li>Page Up/Page Down para scroll rápido</li>
            <li>Home/End para ir al inicio/final</li>
            <li>Tab para navegar entre elementos</li>
          </ul>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} style={{
              padding: 'var(--spacing-2)',
              margin: 'var(--spacing-1) 0',
              backgroundColor: 'var(--color-gray-50)',
              border: '1px solid var(--color-gray-200)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <strong>Elemento {i + 1}</strong> - Este elemento es navegable por teclado y compatible con lectores de pantalla.
            </div>
          ))}
        </div>
      </ScrollableContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que demuestra las características de accesibilidad del ScrollableContainer.',
      },
    },
  },
};
