import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Details } from '../../src/components/Details';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Details> = {
  title: 'Components/Details',
  component: Details,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente Details para crear elementos expandibles/colapsables usando la semántica HTML nativa.

## Características

- **Semántica HTML**: Usa el elemento \`<details>\` nativo del navegador
- **Variantes**: card, ghost, ghost-circle-icon, custom-bottom
- **Accesibilidad**: Soporte completo para lectores de pantalla y navegación por teclado
- **Personalizable**: Píldoras de estado y slots personalizables
- **Animaciones**: Transiciones suaves para el icono y estados

## Variantes

- **Card**: Fondo gris claro con padding y bordes redondeados
- **Ghost**: Transparente, ideal para listas y navegación
- **Ghost Circle Icon**: Transparente con icono circular y texto más grande
- **Custom Bottom**: Variante personalizable con icono al final del contenido, posición configurable (izquierda/derecha), opciones de borde y fondo

## Accesibilidad

- **Teclado**: Enter/Space para expandir/colapsar
- **Lectores de pantalla**: Anuncia el estado expandido/colapsado
- **Semántica**: Usa elementos HTML semánticos nativos
        `,
      },
    },
  },
  argTypes: {
    summary: {
      control: { type: 'text' },
      description: 'El título o resumen que siempre está visible',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'El contenido que se muestra al expandir',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['card', 'ghost', 'ghost-circle-icon', 'custom-bottom'],
      description: 'La variante visual del componente',
      table: {
        type: { summary: "'card' | 'ghost' | 'ghost-circle-icon' | 'custom-bottom'" },
        defaultValue: { summary: "'card'" },
      },
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'Si el componente debe estar abierto por defecto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pillText: {
      control: { type: 'text' },
      description: 'Texto para la píldora de estado (requiere pillVariant)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    pillVariant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      description: 'Variante de color para la píldora de estado',
      table: {
        type: { summary: "'info' | 'success' | 'warning' | 'error' | 'neutral'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    slotRight: {
      control: false,
      description: 'Un nodo de React para mostrar a la derecha, en lugar de la píldora',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
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
    customIcon: {
      control: false,
      description: 'Icono personalizado a mostrar al final del contenido (solo para variante custom-bottom)',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición del icono personalizado (solo para variante custom-bottom)',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: "'left'" },
      },
    },
    showBorder: {
      control: { type: 'boolean' },
      description: 'Mostrar borde alrededor del componente (solo para variante custom-bottom)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showBackground: {
      control: { type: 'boolean' },
      description: 'Mostrar fondo gris claro (solo para variante custom-bottom)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Contenido de ejemplo básico
const defaultChildren = (
  <div>
    <p style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
      Este es el contenido detallado que se oculta y se muestra. Puede contener
      cualquier elemento de React, como texto, imágenes o incluso otros componentes.
    </p>
    <p style={{ color: 'var(--color-gray-600)' }}>
      El componente Details usa la semántica HTML nativa para proporcionar
      una experiencia accesible y funcional.
    </p>
  </div>
);

// Contenido más complejo para casos realistas
const complexChildren = (
  <div>
    <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
      Información Detallada
    </h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--color-gray-600)' }}>Estado:</span>
        <span style={{ color: 'var(--color-green-700)', fontWeight: 'var(--font-semibold)' }}>Activo</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--color-gray-600)' }}>Última actualización:</span>
        <span style={{ color: 'var(--color-gray-700)' }}>Hace 2 horas</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--color-gray-600)' }}>Versión:</span>
        <span style={{ color: 'var(--color-gray-700)' }}>v2.1.3</span>
      </div>
    </div>
    <div style={{ marginTop: 'var(--spacing-4)' }}>
      <Button size="small" variant="secondary">
        Ver más detalles
      </Button>
    </div>
  </div>
);

// Variante Card
export const Card: Story = {
  args: {
    variant: 'card',
    summary: 'Variante "Card"',
    children: defaultChildren,
    defaultOpen: true,
  },
};

// Variante Ghost
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    summary: 'Variante "Ghost"',
    children: defaultChildren,
    defaultOpen: false,
  },
};

// Variante Ghost Circle Icon
export const GhostCircleIcon: Story = {
  args: {
    variant: 'ghost-circle-icon',
    summary: 'Variante "Ghost Circle Icon"',
    children: defaultChildren,
    defaultOpen: false,
  },
};

// Con píldora de estado
export const WithStatusPill: Story = {
  args: {
    variant: 'card',
    summary: 'Con Píldora de Estado',
    children: defaultChildren,
    pillText: '3 cambios',
    pillVariant: 'info',
    defaultOpen: true,
  },
};

// Con slot personalizado a la derecha
export const WithCustomRightSlot: Story = {
  args: {
    variant: 'card',
    summary: 'Con Botón a la Derecha',
    children: defaultChildren,
    slotRight: <Button size="small" variant="secondary">Acción</Button>,
    defaultOpen: true,
  },
};

// Con clase personalizada
export const WithCustomClass: Story = {
  args: {
    variant: 'card',
    summary: 'Con Clase Personalizada',
    children: defaultChildren,
    className: 'custom-details',
    defaultOpen: true,
  },
  decorators: [
    (Story) => (
      <>
        <style>{`
          .custom-details {
            border: 2px solid var(--color-primary-500);
            background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-blue-50) 100%);
          }
          .custom-details .summaryText {
            color: var(--color-primary-800);
            font-weight: var(--font-semibold);
          }
        `}</style>
        <Story />
      </>
    ),
  ],
};

// Variante Custom Bottom - Básica
export const CustomBottom: Story = {
  args: {
    variant: 'custom-bottom',
    summary: 'Variante "Custom Bottom"',
    children: defaultChildren,
    customIcon: <i className="bi bi-arrows-expand"></i>,
    iconPosition: 'right',
    showBorder: false,
    showBackground: false,
    defaultOpen: true,
  },
};

// Variante Custom Bottom - Con borde y fondo
export const CustomBottomWithBorderAndBackground: Story = {
  args: {
    variant: 'custom-bottom',
    summary: 'Custom Bottom con Borde y Fondo',
    children: defaultChildren,
    customIcon: <i className="bi bi-eye"></i>,
    iconPosition: 'left',
    showBorder: true,
    showBackground: true,
    defaultOpen: true,
  },
};

// Variante Custom Bottom - Icono a la izquierda
export const CustomBottomIconLeft: Story = {
  args: {
    variant: 'custom-bottom',
    summary: 'Custom Bottom - Icono Izquierda',
    children: defaultChildren,
    customIcon: <i className="bi bi-chevron-down"></i>,
    iconPosition: 'left',
    showBorder: true,
    showBackground: true,
    defaultOpen: false,
  },
};

// Variante Custom Bottom - Solo borde
export const CustomBottomBorderOnly: Story = {
  args: {
    variant: 'custom-bottom',
    summary: 'Custom Bottom - Solo Borde',
    children: defaultChildren,
    customIcon: <i className="bi bi-info-circle"></i>,
    iconPosition: 'right',
    showBorder: true,
    showBackground: false,
    defaultOpen: true,
  },
};

// Variante Custom Bottom - Solo fondo
export const CustomBottomBackgroundOnly: Story = {
  args: {
    variant: 'custom-bottom',
    summary: 'Custom Bottom - Solo Fondo',
    children: defaultChildren,
    customIcon: <i className="bi bi-gear"></i>,
    iconPosition: 'right',
    showBorder: false,
    showBackground: true,
    defaultOpen: true,
  },
};

// Comparación de todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Details variant="card" summary="Variante Card" defaultOpen>
        {defaultChildren}
      </Details>
      <Details variant="ghost" summary="Variante Ghost">
        {defaultChildren}
      </Details>
      <Details variant="ghost-circle-icon" summary="Variante Ghost Circle Icon">
        {defaultChildren}
      </Details>
      <Details 
        variant="custom-bottom" 
        summary="Variante Custom Bottom" 
        customIcon={<i className="bi bi-arrows-expand"></i>}
        iconPosition="right"
        showBorder={true}
        showBackground={true}
        defaultOpen={false}
      >
        {defaultChildren}
      </Details>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparación de todas las variantes disponibles del componente Details.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      {/* FAQ */}
      <Details variant="card" summary="¿Cómo funciona el sistema de notificaciones?" defaultOpen>
        <div>
          <p style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
            El sistema de notificaciones te permite recibir alertas en tiempo real sobre eventos importantes.
          </p>
          <ul style={{ marginLeft: 'var(--spacing-4)', color: 'var(--color-gray-600)' }}>
            <li>Notificaciones por email</li>
            <li>Alertas en la aplicación</li>
            <li>Notificaciones push en dispositivos móviles</li>
          </ul>
        </div>
      </Details>

      {/* Configuración de usuario */}
      <Details variant="ghost" summary="Configuración de Perfil" pillText="2 pendientes" pillVariant="warning">
        {complexChildren}
      </Details>

      {/* Información del sistema */}
      <Details variant="ghost-circle-icon" summary="Información del Sistema">
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
            <div>
              <strong style={{ color: 'var(--color-gray-900)' }}>Servidor:</strong>
              <p style={{ margin: 'var(--spacing-1) 0', color: 'var(--color-gray-600)' }}>production-01</p>
            </div>
            <div>
              <strong style={{ color: 'var(--color-gray-900)' }}>Uptime:</strong>
              <p style={{ margin: 'var(--spacing-1) 0', color: 'var(--color-gray-600)' }}>99.9%</p>
            </div>
            <div>
              <strong style={{ color: 'var(--color-gray-900)' }}>Memoria:</strong>
              <p style={{ margin: 'var(--spacing-1) 0', color: 'var(--color-gray-600)' }}>2.1GB / 8GB</p>
            </div>
            <div>
              <strong style={{ color: 'var(--color-gray-900)' }}>CPU:</strong>
              <p style={{ margin: 'var(--spacing-1) 0', color: 'var(--color-gray-600)' }}>45%</p>
            </div>
          </div>
        </div>
      </Details>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el componente Details en diferentes situaciones.',
      },
    },
  },
};

// Estados y comportamientos
export const StatesAndBehaviors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Details variant="card" summary="Abierto por defecto" defaultOpen>
        <p style={{ color: 'var(--color-gray-700)' }}>
          Este Details está abierto por defecto usando la prop defaultOpen.
        </p>
      </Details>

      <Details variant="card" summary="Cerrado por defecto">
        <p style={{ color: 'var(--color-gray-700)' }}>
          Este Details está cerrado por defecto. Haz clic para expandirlo.
        </p>
      </Details>

      <Details variant="ghost" summary="Con múltiples píldoras" slotRight={
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <Button size="small" variant="secondary">Editar</Button>
          <Button size="small" variant="danger">Eliminar</Button>
        </div>
      }>
        <p style={{ color: 'var(--color-gray-700)' }}>
          Este Details tiene múltiples botones en el slot derecho.
        </p>
      </Details>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes estados y comportamientos del componente Details.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Details variant="card" summary="Ejemplo de Accesibilidad" defaultOpen>
        <div>
          <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
            Características de Accesibilidad
          </h4>
          <ul style={{ marginLeft: 'var(--spacing-4)', color: 'var(--color-gray-700)' }}>
            <li><strong>Teclado:</strong> Usa Enter o Space para expandir/colapsar</li>
            <li><strong>Lectores de pantalla:</strong> Anuncia el estado expandido/colapsado</li>
            <li><strong>Semántica:</strong> Usa elementos HTML nativos \`&lt;details&gt;\` y \`&lt;summary&gt;\`</li>
            <li><strong>Focus:</strong> El elemento es completamente navegable por teclado</li>
          </ul>
          <p style={{ marginTop: 'var(--spacing-3)', color: 'var(--color-gray-600)' }}>
            Este componente proporciona una experiencia accesible sin necesidad de JavaScript adicional.
          </p>
        </div>
      </Details>

      <Details variant="ghost" summary="Navegación por Teclado">
        <div>
          <p style={{ color: 'var(--color-gray-700)' }}>
            Prueba navegar usando solo el teclado:
          </p>
          <ol style={{ marginLeft: 'var(--spacing-4)', color: 'var(--color-gray-600)' }}>
            <li>Usa Tab para navegar entre elementos</li>
            <li>Usa Enter o Space para expandir/colapsar</li>
            <li>Usa las flechas para navegar dentro del contenido</li>
          </ol>
        </div>
      </Details>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos que demuestran las características de accesibilidad del componente Details.',
      },
    },
  },
};
