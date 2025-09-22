import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../src/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Avatar

Componente Avatar para mostrar iniciales o imágenes de perfil de usuario.

## Características

- **Tamaños**: small (32px), medium (40px), large (56px), xlarge (72px)
- **Variantes**: circle (redondo), square (cuadrado), rounded (redondeado)
- **Estados**: normal, activo, clickeable
- **Soporte para imágenes**: Con fallback automático a iniciales
- **Accesibilidad**: Soporte completo para lectores de pantalla
- **Colores personalizables**: Fondo y texto personalizables

## Colores del Sistema

El Avatar usa los siguientes colores del sistema de diseño:

- **Fondo por defecto**: \`--color-gray-125\`
- **Texto por defecto**: \`--color-gray-700\`
- **Estado activo**: \`--color-primary-500\` con sombra \`--color-primary-100\`
- **Hover clickeable**: Escala 1.05x
- **Focus**: Outline \`--color-primary-500\`
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Texto a mostrar (iniciales)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    image: {
      control: { type: 'text' },
      description: 'URL de la imagen del avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Tamaño del avatar',
      table: {
        type: { summary: "'small' | 'medium' | 'large' | 'xlarge'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Forma del avatar',
      table: {
        type: { summary: "'circle' | 'square' | 'rounded'" },
        defaultValue: { summary: "'circle'" },
      },
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'Estado activo del avatar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Color de fondo personalizado (sobrescribe el color por defecto)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    color: {
      control: { type: 'color' },
      description: 'Color del texto personalizado (sobrescribe el color por defecto)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Función a ejecutar al hacer clic en el avatar',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clase CSS adicional',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    alt: {
      control: { type: 'text' },
      description: 'Texto alternativo para accesibilidad',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Avatar' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico con iniciales
export const Default: Story = {
  args: {
    text: 'JD',
  },
};

// Story con imagen (usando placeholder que siempre funciona)
export const WithImage: Story = {
  args: {
    image: 'https://img.freepik.com/fotos-premium/hes-mover-and-shaker-shot-joven-hombre-negocios-oficina-corporativa_590464-16850.jpg',
    alt: 'John Doe',
  },
};

// Story que muestra fallback de imagen a texto
export const ImageWithFallback: Story = {
  args: {
    image: 'https://img.freepik.com/fotos-premium/hes-mover-and-shaker-shot-joven-hombre-negocios-oficina-corporativa_590464-16850.jpg',
    text: 'JD',
    alt: 'John Doe',
  },
};

// Tamaños
export const Small: Story = {
  args: {
    text: 'AB',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    text: 'CD',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    text: 'EF',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    text: 'GH',
    size: 'xlarge',
  },
};

// Variantes
export const Circle: Story = {
  args: {
    text: 'IJ',
    variant: 'circle',
  },
};

export const Square: Story = {
  args: {
    text: 'KL',
    variant: 'square',
  },
};

export const Rounded: Story = {
  args: {
    text: 'MN',
    variant: 'rounded',
  },
};

// Estados
export const Active: Story = {
  args: {
    text: 'OP',
    isActive: true,
  },
};

export const Clickable: Story = {
  args: {
    text: 'QR',
    onClick: () => alert('Avatar clicked!'),
  },
};

// Colores personalizados usando colores del sistema
export const CustomColors: Story = {
  args: {
    text: 'ST',
    backgroundColor: 'var(--color-primary-500)',
    color: 'var(--color-white)',
  },
};

// Texto largo (se trunca automáticamente)
export const LongText: Story = {
  args: {
    text: 'John Doe',
  },
};

// Comparación de todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <Avatar text="A" size="small" />
      <Avatar text="B" size="medium" />
      <Avatar text="C" size="large" />
      <Avatar text="D" size="xlarge" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todos los tamaños disponibles del Avatar.',
      },
    },
  },
};

// Comparación de todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <Avatar text="A" variant="circle" />
      <Avatar text="B" variant="square" />
      <Avatar text="C" variant="rounded" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todas las variantes de forma del Avatar.',
      },
    },
  },
};

// Ejemplo con imágenes usando placeholders confiables
export const WithImages: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <Avatar 
        image="https://media.istockphoto.com/id/495827884/es/foto/se-desconoce-el-creador-de-su-propio-%C3%A9xito.jpg?s=612x612&w=0&k=20&c=abYWrY7yMFHAz7LJDRwT7jNLIWY73NcHHODpn97Wx2Y="
        alt="John Doe"
        size="medium"
      />
      <Avatar 
        image="https://img.freepik.com/foto-gratis/retrato-mujer-feliz-tableta-digital_329181-11681.jpg?semt=ais_incoming&w=740&q=80"
        alt="Jane Smith"
        size="medium"
      />
      <Avatar 
        image="https://media.istockphoto.com/id/1487345042/es/foto/joven-empresario-sonriente-parado-en-el-pasillo-de-una-oficina.jpg?s=612x612&w=0&k=20&c=Kf4QYQ4n_WKSyen7e05NAhuW9c9IFxEyrR7ztCXM520="
        alt="Mike Johnson"
        size="medium"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos de Avatar con imágenes usando placeholders confiables.',
      },
    },
  },
};

// Variaciones de colores usando la paleta del sistema
export const ColorVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--spacing-3)', 
      alignItems: 'center', 
      flexWrap: 'wrap' 
    }}>
      <Avatar text="A" backgroundColor="var(--color-error)" color="var(--color-white)" />
      <Avatar text="B" backgroundColor="var(--color-orange-700)" color="var(--color-white)" />
      <Avatar text="C" backgroundColor="var(--color-gold-500)" color="var(--color-white)" />
      <Avatar text="D" backgroundColor="var(--color-green-800)" color="var(--color-white)" />
      <Avatar text="E" backgroundColor="var(--color-cyan-500)" color="var(--color-white)" />
      <Avatar text="F" backgroundColor="var(--color-primary-500)" color="var(--color-white)" />
      <Avatar text="G" backgroundColor="var(--color-purple-500)" color="var(--color-white)" />
      <Avatar text="H" backgroundColor="var(--color-magenta-600)" color="var(--color-white)" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Variaciones de colores usando la paleta oficial del sistema de diseño.',
      },
    },
  },
};

// Ejemplo interactivo realista
export const InteractiveExample: Story = {
  render: () => {
    const [activeAvatar, setActiveAvatar] = React.useState<string | null>(null);
    
    const avatars = [
      { id: '1', text: 'JD', name: 'John Doe', color: 'var(--color-primary-500)' },
      { id: '2', text: 'JS', name: 'Jane Smith', color: 'var(--color-green-800)' },
      { id: '3', text: 'MJ', name: 'Mike Johnson', color: 'var(--color-purple-500)' },
      { id: '4', text: 'AL', name: 'Alice Lee', color: 'var(--color-orange-700)' },
    ];
    
    return (
      <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.id}
            text={avatar.text}
            size="large"
            backgroundColor={avatar.color}
            color="var(--color-white)"
            isActive={activeAvatar === avatar.id}
            onClick={() => setActiveAvatar(activeAvatar === avatar.id ? null : avatar.id)}
            alt={`Avatar de ${avatar.name}`}
          />
        ))}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra cómo usar el Avatar en una lista de usuarios seleccionables.',
      },
    },
  },
};

// Ejemplo de accesibilidad
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <Avatar 
        text="JD" 
        alt="Avatar de John Doe, usuario administrador"
        onClick={() => alert('Navegando al perfil de John Doe')}
      />
      <Avatar 
        image="https://st.depositphotos.com/1743476/2267/i/450/depositphotos_22675279-stock-photo-businesswoman.jpg"
        alt="Avatar de Jane Smith, usuario editor"
        onClick={() => alert('Navegando al perfil de Jane Smith')}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo que muestra el uso correcto de accesibilidad con textos alternativos descriptivos.',
      },
    },
  },
};

// Estados combinados
export const CombinedStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <Avatar text="A" size="medium" />
      <Avatar text="B" size="medium" isActive />
      <Avatar text="C" size="medium" onClick={() => alert('Clicked!')} />
      <Avatar text="D" size="medium" isActive onClick={() => alert('Active & Clickable!')} />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos de diferentes combinaciones de estados del Avatar.',
      },
    },
  },
};
