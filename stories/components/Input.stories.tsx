import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente Input para entrada de texto con múltiples variantes, tamaños y estados.

## Características

- **Variantes**: default (bordes redondeados) y pill (bordes completamente redondeados)
- **Tamaños**: small, medium (por defecto), large
- **Iconos**: Soporte para iconos a la izquierda o derecha
- **Estados**: Normal, error, deshabilitado
- **Accesibilidad**: Soporte completo para teclado y lectores de pantalla
- **Helper Text**: Texto de ayuda opcional

## Props Principales

- **icon**: ReactNode - Icono a mostrar
- **iconPosition**: 'left' | 'right' - Posición del icono (por defecto: 'right')
- **variant**: 'default' | 'pill' - Variante visual (por defecto: 'default')
- **size**: 'small' | 'medium' | 'large' - Tamaño del input (por defecto: 'medium')
- **error**: boolean - Estado de error (por defecto: false)
- **helperText**: string - Texto de ayuda opcional

## Accesibilidad

- **Teclado**: Soporte completo para navegación por teclado
- **Focus**: Indicadores visuales claros de foco
- **Lectores de pantalla**: Etiquetas y estados anunciados correctamente
- **ARIA**: Atributos ARIA apropiados para estados de error
        `,
      },
    },
  },
  argTypes: {
    // Props específicas del componente
    icon: {
      control: false,
      description: 'Icono a mostrar dentro del input',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición del icono dentro del input',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: "'right'" },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'pill'],
      description: 'Variante visual del input',
      table: {
        type: { summary: "'default' | 'pill'" },
        defaultValue: { summary: "'default'" },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del input',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Estado de error del input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto de ayuda que aparece debajo del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props nativas de HTML input más comunes
    placeholder: {
      control: { type: 'text' },
      description: 'Texto placeholder del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo de input HTML',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'text'" },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Si el input está deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Valor controlado del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Valor por defecto no controlado del input',
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
    placeholder: 'Escribe aquí...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input básico con configuración por defecto.',
      },
    },
  },
};

// Variante pill
export const Pill: Story = {
  args: {
    placeholder: 'Input con estilo pill',
    variant: 'pill',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con bordes completamente redondeados (variante pill).',
      },
    },
  },
};

// Tamaños
export const Small: Story = {
  args: {
    placeholder: 'Input pequeño',
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de tamaño pequeño.',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Input mediano',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de tamaño mediano (por defecto).',
      },
    },
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Input grande',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de tamaño grande.',
      },
    },
  },
};

// Iconos
export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Buscar...',
    icon: '🔍',
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con icono a la izquierda.',
      },
    },
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: 'Buscar...',
    icon: '🔍',
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con icono a la derecha (posición por defecto).',
      },
    },
  },
};

// Estados
export const Error: Story = {
  args: {
    placeholder: 'Campo con error',
    error: true,
    helperText: 'Este campo es obligatorio',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input en estado de error con mensaje de ayuda.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Input deshabilitado',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input en estado deshabilitado.',
      },
    },
  },
};

export const WithHelperText: Story = {
  args: {
    placeholder: 'Campo con texto de ayuda',
    helperText: 'Este es un texto de ayuda',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input con texto de ayuda informativo.',
      },
    },
  },
};

// Tipos de input
export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'correo@ejemplo.com',
    helperText: 'Ingresa tu dirección de correo electrónico',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input configurado para correo electrónico.',
      },
    },
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: 'Contraseña',
    helperText: 'Mínimo 8 caracteres',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input configurado para contraseñas.',
      },
    },
  },
};

// Comparación de variantes
export const VariantComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: '300px' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Default</h4>
        <Input placeholder="Variante default" />
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Pill</h4>
        <Input placeholder="Variante pill" variant="pill" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación visual entre las variantes default y pill.',
      },
    },
  },
};

// Comparación de tamaños
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: '300px' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Small</h4>
        <Input placeholder="Tamaño pequeño" size="small" />
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Medium</h4>
        <Input placeholder="Tamaño mediano" size="medium" />
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Large</h4>
        <Input placeholder="Tamaño grande" size="large" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación visual de todos los tamaños disponibles.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Formulario de login */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-gray-900)' }}>
          Formulario de Login
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', width: '300px' }}>
          <Input 
            type="email"
            placeholder="Correo electrónico"
            icon="📧"
            iconPosition="left"
          />
          <Input 
            type="password"
            placeholder="Contraseña"
            icon="🔒"
            iconPosition="left"
          />
        </div>
      </div>

      {/* Búsqueda */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-gray-900)' }}>
          Barra de Búsqueda
        </h3>
        <div style={{ width: '400px' }}>
          <Input 
            type="search"
            placeholder="Buscar productos..."
            icon="🔍"
            iconPosition="right"
            variant="pill"
          />
        </div>
      </div>

      {/* Formulario con errores */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-gray-900)' }}>
          Formulario con Validación
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', width: '300px' }}>
          <Input 
            placeholder="Nombre completo"
            helperText="Ingresa tu nombre completo"
          />
          <Input 
            placeholder="Correo electrónico"
            error={true}
            helperText="Este campo es obligatorio"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el Input en diferentes situaciones.',
      },
    },
  },
};

// Todos los estados
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: '300px' }}>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Normal</h4>
        <Input placeholder="Estado normal" />
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Con Helper Text</h4>
        <Input placeholder="Con texto de ayuda" helperText="Este es un texto de ayuda" />
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Error</h4>
        <Input placeholder="Estado de error" error helperText="Este campo tiene un error" />
      </div>
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Deshabilitado</h4>
        <Input placeholder="Estado deshabilitado" disabled />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todos los estados disponibles del componente Input.',
      },
    },
  },
};
