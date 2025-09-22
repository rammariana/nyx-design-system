import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '../../src/components/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente Loader para mostrar estados de carga con múltiples variantes y animaciones.

## Características

- **Variantes**: spinner (por defecto), dots, pulse, fullscreen
- **Tamaños**: small, medium (por defecto), large
- **Progreso**: Soporte para mostrar porcentaje de progreso
- **Pantalla Completa**: Modo overlay para cargas importantes
- **Colores**: Soporte para colores personalizados
- **Accesibilidad**: Anuncios para lectores de pantalla

## Variantes

- **spinner**: Círculo con gradiente que gira + efecto blur
- **dots**: Tres puntos que rebotan secuencialmente
- **pulse**: Círculo que pulsa suavemente
- **fullscreen**: Animación orbital compleja para pantalla completa

## Cuándo Usar

- **spinner**: Cargas generales, botones, formularios
- **dots**: Cargas de datos, procesamiento
- **pulse**: Estados de conexión, sincronización
- **fullscreen**: Cargas de aplicación, instalaciones, actualizaciones importantes
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'pulse', 'fullscreen'],
      description: 'Tipo de animación del loader',
      table: {
        type: { summary: "'spinner' | 'dots' | 'pulse' | 'fullscreen'" },
        defaultValue: { summary: "'spinner'" },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del loader',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    message: {
      control: { type: 'text' },
      description: 'Mensaje a mostrar junto al loader',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Porcentaje de progreso (0-100)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    color: {
      control: { type: 'color' },
      description: 'Color personalizado para el loader',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    fullScreen: {
      control: { type: 'boolean' },
      description: 'Modo pantalla completa con overlay',
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

// Por defecto (spinner)
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Loader básico con configuración por defecto (spinner con gradiente y blur).',
      },
    },
  },
};

// Dots
export const Dots: Story = {
  args: {
    variant: 'dots',
    message: 'Procesando...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante dots con tres puntos que rebotan secuencialmente.',
      },
    },
  },
};

// Pulse
export const Pulse: Story = {
  args: {
    variant: 'pulse',
    message: 'Conectando...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante pulse con círculo que pulsa suavemente.',
      },
    },
  },
};

// Fullscreen
export const Fullscreen: Story = {
  args: {
    variant: 'fullscreen',
    message: 'Cargando aplicación...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante fullscreen con animación orbital compleja.',
      },
    },
  },
};

// Tamaños
export const Small: Story = {
  args: {
    variant: 'spinner',
    size: 'small',
    message: 'Cargando...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader de tamaño pequeño.',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    variant: 'spinner',
    size: 'medium',
    message: 'Cargando...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader de tamaño mediano (por defecto).',
      },
    },
  },
};

export const Large: Story = {
  args: {
    variant: 'spinner',
    size: 'large',
    message: 'Cargando...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader de tamaño grande.',
      },
    },
  },
};

// Con progreso
export const WithProgress: Story = {
  args: {
    variant: 'spinner',
    message: 'Descargando archivo...',
    progress: 65,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader con indicador de progreso.',
      },
    },
  },
};

// Color personalizado
export const CustomColor: Story = {
  args: {
    variant: 'dots',
    message: 'Procesando...',
    color: '#ff6b6b',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader con color personalizado.',
      },
    },
  },
};

// Pantalla completa
export const FullScreenWithProgress: Story = {
  args: {
    variant: 'fullscreen',
    message: 'Instalando actualización...',
    progress: 45,
    fullScreen: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loader en modo pantalla completa con progreso.',
      },
    },
  },
};

// Comparación de variantes
export const VariantComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Loader variant="spinner" message="Spinner" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
            Círculo con gradiente + blur
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Loader variant="dots" message="Dots" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
            Puntos rebotando
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Loader variant="pulse" message="Pulse" />
          <p style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
            Pulso suave
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación visual de todas las variantes disponibles.',
      },
    },
  },
};

// Comparación de tamaños
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loader variant="spinner" size="small" message="Small" />
        <p style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
          Pequeño
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Loader variant="spinner" size="medium" message="Medium" />
        <p style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
          Mediano
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Loader variant="spinner" size="large" message="Large" />
        <p style={{ marginTop: 'var(--spacing-2)', fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
          Grande
        </p>
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

// Demostración de progreso
export const ProgressDemo: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <Loader 
        variant="spinner" 
        message="Descargando archivo..." 
        progress={progress}
      />
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Demostración de loader con progreso animado.',
      },
    },
  },
};

// Demostración de pantalla completa
export const FullScreenDemo: Story = {
  render: () => {
    const [showLoader, setShowLoader] = useState(false);
    
    const handleShowLoader = () => {
      setShowLoader(true);
      setTimeout(() => setShowLoader(false), 3000);
    };
    
    return (
      <div>
        <button 
          onClick={handleShowLoader}
          style={{
            padding: 'var(--spacing-3) var(--spacing-4)',
            backgroundColor: 'var(--color-primary-500)',
            color: 'var(--color-white)',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-medium)',
          }}
        >
          Mostrar Loader Fullscreen
        </button>
        {showLoader && (
          <Loader 
            variant="fullscreen" 
            message="Cargando datos..." 
            progress={75}
            fullScreen
          />
        )}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Demostración de loader en modo pantalla completa.',
      },
    },
  },
};

// Variaciones de color
export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      <Loader variant="spinner" color="#ef4444" message="Error" />
      <Loader variant="dots" color="#22c55e" message="Success" />
      <Loader variant="pulse" color="#f59e0b" message="Warning" />
      <Loader variant="spinner" color="#8b5cf6" message="Purple" />
      <Loader variant="dots" color="#06b6d4" message="Cyan" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos de loader con diferentes colores personalizados.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Botón con loader */}
      

      {/* Formulario con loader */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Formulario con Validación
        </h3>
        <div style={{ 
          padding: 'var(--spacing-4)', 
          border: '1px solid var(--color-gray-200)', 
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-gray-50)'
        }}>
          <Loader variant="dots" message="Validando datos..." />
        </div>
      </div>

      {/* Carga de datos */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Carga de Datos
        </h3>
        <div style={{ 
          padding: 'var(--spacing-4)', 
          border: '1px solid var(--color-gray-200)', 
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-white)'
        }}>
          <Loader variant="pulse" message="Sincronizando con el servidor..." />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el Loader en diferentes situaciones.',
      },
    },
  },
};

// Ejemplo interactivo
export const InteractiveExample: Story = {
  render: () => {
    const [variant, setVariant] = useState<'spinner' | 'dots' | 'pulse'>('spinner');
    const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState('Cargando...');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          <select 
            value={variant} 
            onChange={(e) => setVariant(e.target.value as any)}
            style={{ 
              padding: 'var(--spacing-2)', 
              borderRadius: 'var(--radius-sm)', 
              border: '1px solid var(--color-gray-300)',
              backgroundColor: 'var(--color-white)'
            }}
          >
            <option value="spinner">Spinner</option>
            <option value="dots">Dots</option>
            <option value="pulse">Pulse</option>
          </select>
          
          <select 
            value={size} 
            onChange={(e) => setSize(e.target.value as any)}
            style={{ 
              padding: 'var(--spacing-2)', 
              borderRadius: 'var(--radius-sm)', 
              border: '1px solid var(--color-gray-300)',
              backgroundColor: 'var(--color-white)'
            }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            style={{ width: '100px' }}
          />
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-600)' }}>
            {progress}%
          </span>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensaje"
            style={{ 
              padding: 'var(--spacing-2)', 
              borderRadius: 'var(--radius-sm)', 
              border: '1px solid var(--color-gray-300)',
              backgroundColor: 'var(--color-white)'
            }}
          />
        </div>
        
        <Loader 
          variant={variant}
          size={size}
          message={message}
          progress={progress || undefined}
        />
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo interactivo para probar todas las opciones del Loader.',
      },
    },
  },
};
