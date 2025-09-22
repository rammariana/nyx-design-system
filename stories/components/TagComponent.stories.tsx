import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagComponent } from '../../src/components/TagComponent';

const meta: Meta<typeof TagComponent> = {
  title: 'Components/TagComponent',
  component: TagComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente TagComponent para mostrar estados, etiquetas y badges con múltiples variantes.

## Características

- **Variantes**: 18 variantes diferentes para diferentes estados y propósitos
- **Tamaños**: Small, medium, large con espaciado proporcional
- **Interactividad**: Soporte para click handlers y estados disabled
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **Flexibilidad**: Ancho completo, puntos indicadores opcionales
- **Personalización**: Clases CSS adicionales y data-testid

## Variantes

- **Estados**: verified, new, found, pending, error, success, danger, warning
- **Información**: info, criteria, recommendations, high_success
- **Estilos**: gray, muted, primary, secondary, outline

## Tamaños

- **Small**: Compacto para espacios reducidos
- **Medium**: Tamaño estándar (por defecto)
- **Large**: Prominente para destacar información

## Interactividad

- **Clickable**: Se convierte en botón cuando se proporciona onClick
- **Disabled**: Estado deshabilitado con estilos apropiados
- **Focus**: Indicadores visuales de foco para accesibilidad

## Accesibilidad

- **Teclado**: Tab para navegar, Enter/Space para activar
- **Lectores de pantalla**: Roles y propiedades apropiadas
- **Focus**: Indicadores visuales claros de foco
- **ARIA**: Estados y propiedades anunciadas
        `,
      },
    },
  },
  argTypes: {
    // Props principales
    children: {
      control: 'text',
      description: 'Contenido del tag',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'verified', 'new', 'new_item', 'found', 'pending', 'error', 'info',
        'criteria', 'recommendations', 'success', 'danger', 'warning',
        'high_success', 'gray', 'muted', 'primary', 'secondary', 'outline'
      ],
      description: 'Variante visual del tag que determina colores y estilo',
      table: {
        type: { summary: 'TagVariant' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del tag',
      table: {
        type: { summary: 'TagSize' },
        defaultValue: { summary: "'medium'" },
      },
    },
    // Props de funcionalidad
    hasDot: {
      control: { type: 'boolean' },
      description: 'Mostrar punto indicador (algunas variantes lo ocultan automáticamente)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado (solo aplica cuando es clickable)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Ancho completo del contenedor',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Función a ejecutar al hacer clic (convierte el tag en clickable)',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props de personalización
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para personalización',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'data-testid': {
      control: 'text',
      description: 'Identificador para pruebas automatizadas',
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

// Por defecto
export const Default: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'info',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent básico con variante info.',
      },
    },
  },
};

// Estados principales
export const Success: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante success para estados exitosos.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante error para estados de error.',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante warning para advertencias.',
      },
    },
  },
};

export const Info: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'info',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante info para información general.',
      },
    },
  },
};

export const Verified: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'verified',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante verified para elementos verificados.',
      },
    },
  },
};

export const New: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'new',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante new para elementos nuevos.',
      },
    },
  },
};

export const Found: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'found',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante found para elementos encontrados.',
      },
    },
  },
};

export const Pending: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'pending',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante pending para estados pendientes.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante danger para estados críticos.',
      },
    },
  },
};

// Variantes de estilo
export const Gray: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'gray',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante gray para estados neutros.',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante primary para elementos principales.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante secondary para elementos secundarios.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con variante outline para estilos minimalistas.',
      },
    },
  },
};

// Tamaños
export const Small: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent en tamaño small para espacios reducidos.',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent en tamaño medium (por defecto).',
      },
    },
  },
};

export const Large: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent en tamaño large para elementos prominentes.',
      },
    },
  },
};

// Funcionalidades
export const WithoutDot: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    hasDot: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent sin punto indicador.',
      },
    },
  },
};

export const Clickable: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    onClick: () => console.log('Lorem ipsum clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent clickable con handler personalizado.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    disabled: true,
    onClick: () => console.log('Lorem ipsum clicked!'),
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent en estado disabled.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'TagComponent con ancho completo.',
      },
    },
  },
};

// Ejemplos con data-testid
export const WithTestId: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    'data-testid': 'test-tag-component',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent con data-testid para pruebas automatizadas.',
      },
    },
  },
};

// Todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
      <TagComponent variant="verified">Lorem ipsum</TagComponent>
      <TagComponent variant="new">Lorem ipsum</TagComponent>
      <TagComponent variant="found">Lorem ipsum</TagComponent>
      <TagComponent variant="pending">Lorem ipsum</TagComponent>
      <TagComponent variant="error">Lorem ipsum</TagComponent>
      <TagComponent variant="info">Lorem ipsum</TagComponent>
      <TagComponent variant="criteria">Lorem ipsum</TagComponent>
      <TagComponent variant="recommendations">Lorem ipsum</TagComponent>
      <TagComponent variant="success">Lorem ipsum</TagComponent>
      <TagComponent variant="danger">Lorem ipsum</TagComponent>
      <TagComponent variant="warning">Lorem ipsum</TagComponent>
      <TagComponent variant="high_success">Lorem ipsum</TagComponent>
      <TagComponent variant="gray">Lorem ipsum</TagComponent>
      <TagComponent variant="muted">Lorem ipsum</TagComponent>
      <TagComponent variant="primary">Lorem ipsum</TagComponent>
      <TagComponent variant="secondary">Lorem ipsum</TagComponent>
      <TagComponent variant="outline">Lorem ipsum</TagComponent>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todas las variantes disponibles del TagComponent.',
      },
    },
  },
};

// Todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
      <TagComponent variant="success" size="small">Lorem ipsum</TagComponent>
      <TagComponent variant="success" size="medium">Lorem ipsum</TagComponent>
      <TagComponent variant="success" size="large">Lorem ipsum</TagComponent>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todos los tamaños disponibles.',
      },
    },
  },
};

// Ejemplo interactivo
export const InteractiveExample: Story = {
  render: () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    
    const tags = [
      { variant: 'success' as const, label: 'Lorem ipsum' },
      { variant: 'pending' as const, label: 'Lorem ipsum' },
      { variant: 'error' as const, label: 'Lorem ipsum' },
      { variant: 'warning' as const, label: 'Lorem ipsum' },
      { variant: 'info' as const, label: 'Lorem ipsum' },
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)' }}>
          {tags.map((tag, index) => (
            <TagComponent
              key={index}
              variant={tag.variant}
              onClick={() => setSelectedTag(tag.label)}
            >
              {tag.label}
            </TagComponent>
          ))}
        </div>
        
        {selectedTag && (
          <div style={{ 
            padding: 'var(--spacing-4)', 
            backgroundColor: 'var(--color-gray-50)', 
            borderRadius: 'var(--radius-md)' 
          }}>
            <p style={{ marginBottom: 'var(--spacing-2)' }}>
              <strong>Lorem ipsum:</strong> {selectedTag}
            </p>
            <TagComponent variant="primary" onClick={() => setSelectedTag(null)}>
              Lorem ipsum
            </TagComponent>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo interactivo que demuestra el comportamiento clickable.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <TagComponent variant="pending">Lorem ipsum</TagComponent>
          <TagComponent variant="success">Lorem ipsum</TagComponent>
          <TagComponent variant="info">Lorem ipsum</TagComponent>
        </div>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <TagComponent variant="verified">Lorem ipsum</TagComponent>
          <TagComponent variant="warning">Lorem ipsum</TagComponent>
          <TagComponent variant="error">Lorem ipsum</TagComponent>
        </div>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <TagComponent variant="new">Lorem ipsum</TagComponent>
          <TagComponent variant="found">Lorem ipsum</TagComponent>
          <TagComponent variant="criteria">Lorem ipsum</TagComponent>
          <TagComponent variant="recommendations">Lorem ipsum</TagComponent>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Casos de uso realistas con diferentes tipos de estados.',
      },
    },
  },
};

// Personalización
export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <TagComponent variant="primary" className="custom-primary">Lorem ipsum</TagComponent>
          <TagComponent variant="outline" className="custom-outline">Lorem ipsum</TagComponent>
        </div>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <TagComponent variant="success" size="small">Lorem ipsum</TagComponent>
          <TagComponent variant="success" size="medium">Lorem ipsum</TagComponent>
          <TagComponent variant="success" size="large">Lorem ipsum</TagComponent>
        </div>
      </div>
      
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-700)' }}>
          Lorem ipsum
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <TagComponent variant="success">Lorem ipsum</TagComponent>
          <TagComponent variant="success" hasDot={false}>Lorem ipsum</TagComponent>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos de personalización con diferentes tamaños y configuraciones.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  args: {
    children: 'Lorem ipsum',
    variant: 'success',
    onClick: () => console.log('Lorem ipsum clicked!'),
    'data-testid': 'accessible-tag',
  },
  parameters: {
    docs: {
      description: {
        story: 'TagComponent que demuestra características de accesibilidad.',
      },
    },
  },
};