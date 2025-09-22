import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `

Componente Button con múltiples variantes, tamaños, estados y funcionalidades avanzadas.

## Características

- **Variantes**: primary, secondary, dark, subtle, icon, danger, outline, icon-ghost
- **Tamaños**: small, medium, large
- **Radios**: default, pill
- **Estados**: loading, disabled, fullWidth
- **Iconos**: leftIcon, rightIcon con espaciado automático
- **Polimorfismo**: Renderizado como cualquier elemento HTML o componente React
- **Accesibilidad**: Soporte completo para lectores de pantalla

## Variantes de Color

El Button usa los siguientes colores del sistema de diseño:

- **Primary**: \`--color-primary-600\` fondo, \`--color-white\` texto
- **Secondary**: \`--color-white\` fondo, \`--color-gray-800\` texto, borde \`--color-gray-300\`
- **Dark**: \`--color-gray-900\` fondo, \`--color-white\` texto
- **Subtle**: Transparente, \`--color-gray-700\` texto
- **Danger**: \`--color-error\` fondo, \`--color-white\` texto
- **Outline**: Transparente, borde \`--color-gray-300\`, \`--color-gray-700\` texto
- **Icon**: Cuadrado 36x36px con fondo \`--color-gray-100\` en hover
- **Icon-Ghost**: Circular 36x36px transparente

## Accesibilidad

- **Teclado**: Tab para navegar, Enter/Space para activar
- **Estados**: Disabled y loading con indicadores visuales
- **Lectores de pantalla**: Textos descriptivos y estados claros
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Contenido del botón',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'dark', 'subtle', 'icon', 'danger', 'outline', 'icon-ghost'],
      description: 'Variante visual del botón',
      table: {
        type: { summary: "'primary' | 'secondary' | 'dark' | 'subtle' | 'icon' | 'danger' | 'outline' | 'icon-ghost'" },
        defaultValue: { summary: "'primary'" },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    radius: {
      control: { type: 'select' },
      options: ['default', 'pill'],
      description: 'Radio de las esquinas',
      table: {
        type: { summary: "'default' | 'pill'" },
        defaultValue: { summary: "'default'" },
      },
    },
    colorScheme: {
      control: { type: 'select' },
      options: ['secondary', 'danger'],
      description: 'Esquema de color para variante icon',
      table: {
        type: { summary: "'secondary' | 'danger'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    as: {
      control: { type: 'text' },
      description: 'Elemento HTML o componente React a renderizar',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: "'button'" },
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Estado de carga con spinner',
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leftIcon: {
      control: { type: 'text' },
      description: 'Icono a la izquierda del texto',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    rightIcon: {
      control: { type: 'text' },
      description: 'Icono a la derecha del texto',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clase CSS adicional',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Variantes básicas
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Dark: Story = {
  args: {
    children: 'Dark Button',
    variant: 'dark',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Subtle Button',
    variant: 'subtle',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

// Tamaños
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// Radios
export const DefaultRadius: Story = {
  args: {
    children: 'Default Radius',
    radius: 'default',
  },
};

export const PillRadius: Story = {
  args: {
    children: 'Pill Radius',
    radius: 'pill',
  },
};

// Estados
export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Iconos
export const WithLeftIcon: Story = {
  args: {
    children: 'With Left Icon',
    leftIcon: '←',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'With Right Icon',
    rightIcon: '→',
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Both Icons',
    leftIcon: '←',
    rightIcon: '→',
  },
};

// Variantes de icono
export const IconButton: Story = {
  args: {
    children: '⚙',
    variant: 'icon',
  },
};

export const IconGhost: Story = {
  args: {
    children: '⚙',
    variant: 'icon-ghost',
  },
};

export const IconWithColorScheme: Story = {
  args: {
    children: '🗑',
    variant: 'icon',
    colorScheme: 'danger',
  },
};

// Polimorfismo
export const AsLink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Button as Link',
    variant: 'primary',
  },
};

export const AsDiv: Story = {
  args: {
    as: 'div',
    children: 'Button as Div',
    variant: 'secondary',
  },
};

// Comparación de todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-3)', 
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="icon">⚙</Button>
      <Button variant="icon-ghost">⚙</Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todas las variantes disponibles del Button.',
      },
    },
  },
};

// Comparación de todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-3)', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todos los tamaños disponibles del Button.',
      },
    },
  },
};

// Comparación de radios
export const RadiusComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-3)', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <Button radius="default">Default Radius</Button>
      <Button radius="pill">Pill Radius</Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación entre radio por defecto y pill del Button.',
      },
    },
  },
};

// Estados combinados
export const CombinedStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-3)', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <Button variant="primary">Normal</Button>
      <Button variant="primary" isLoading>Loading</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" fullWidth>Full Width</Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos de diferentes estados del Button.',
      },
    },
  },
};

// Iconos avanzados
export const IconVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-3)', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <Button variant="icon">⚙</Button>
      <Button variant="icon" colorScheme="secondary">📝</Button>
      <Button variant="icon" colorScheme="danger">🗑</Button>
      <Button variant="icon-ghost">⚙</Button>
      <Button variant="icon-ghost">❤</Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Variaciones de botones de icono con diferentes esquemas de color.',
      },
    },
  },
};

// Casos de uso realistas
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 'var(--spacing-4)', 
      width: '100%'
    }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="primary" leftIcon="💾">
          Guardar Cambios
        </Button>
        <Button variant="secondary">
          Cancelar
        </Button>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="outline" leftIcon="🔍">
          Buscar
        </Button>
        <Button variant="subtle" rightIcon="→">
          Ver Más
        </Button>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="danger" leftIcon="🗑">
          Eliminar
        </Button>
        <Button variant="icon" colorScheme="danger">
          🗑
        </Button>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="dark" leftIcon="🚀">
          Publicar
        </Button>
        <Button variant="icon-ghost">
          ⚙
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el Button en diferentes situaciones de una aplicación.',
      },
    },
  },
};

// Polimorfismo avanzado
export const PolymorphismExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 'var(--spacing-4)', 
      width: '100%'
    }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button as="button" variant="primary">
          Button Element
        </Button>
        <Button as="a" href="#" variant="secondary">
          Link Element
        </Button>
        <Button as="div" variant="outline">
          Div Element
        </Button>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button as="a" href="#" variant="primary" leftIcon="🔗">
          External Link
        </Button>
        <Button as="div" variant="subtle" onClick={() => alert('Div clicked!')}>
          Clickable Div
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos de polimorfismo: renderizar el Button como diferentes elementos HTML.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 'var(--spacing-4)', 
      width: '100%'
    }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="primary" aria-label="Guardar documento">
          💾
        </Button>
        <Button variant="secondary" disabled aria-describedby="disabled-help">
          Botón Deshabilitado
        </Button>
        <Button variant="danger" isLoading aria-label="Eliminando...">
          Eliminar
        </Button>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="outline" leftIcon="🔍" aria-label="Buscar en el sitio">
          Buscar
        </Button>
        <Button variant="icon" aria-label="Configuración">
          ⚙
        </Button>
      </div>
      
      <p id="disabled-help" style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-600)' }}>
        Este botón está deshabilitado porque requiere permisos adicionales.
      </p>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos que demuestran las características de accesibilidad del Button.',
      },
    },
  },
};

// Loading states
export const LoadingStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 'var(--spacing-4)', 
      width: '100%'
    }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="primary" isLoading>
          Guardando...
        </Button>
        <Button variant="secondary" isLoading>
          Procesando...
        </Button>
        <Button variant="danger" isLoading>
          Eliminando...
        </Button>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button variant="outline" isLoading leftIcon="📤">
          Subiendo archivo...
        </Button>
        <Button variant="icon" isLoading>
          ⚙
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Diferentes estados de carga del Button con spinner animado.',
      },
    },
  },
};
