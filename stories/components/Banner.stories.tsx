import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../../src/components/Banner';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Banner

Componente Banner para mostrar mensajes informativos, alertas y notificaciones.

## Características

- **Variantes**: info, success, warning, error, neutral
- **Layouts**: Simple (solo mensaje) y Complejo (con título, icono, acciones)
- **Funcionalidades**: Descartable, con borde personalizable, ancho completo opcional
- **Accesibilidad**: Soporte completo para lectores de pantalla con ARIA
- **Responsive**: Adaptación automática en dispositivos móviles

## Variantes de Color

El Banner usa los siguientes colores del sistema de diseño:

- **Info**: \`--color-blue-50\` fondo, \`--color-blue-900\` texto
- **Success**: \`--color-green-50\` fondo, \`--color-green-900\` texto  
- **Warning**: \`--color-yellow-50\` fondo, \`--color-yellow-900\` texto
- **Error**: \`--color-red-50\` fondo, \`--color-red-900\` texto
- **Neutral**: \`--color-gray-50\` fondo, \`--color-gray-900\` texto

## Accesibilidad

- **ARIA**: \`role="alert"\` y \`aria-live="polite"\`
- **Teclado**: Escape para cerrar, Tab para navegación
- **Lectores de pantalla**: Textos alternativos descriptivos
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Contenido del mensaje del banner',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      description: 'Variante visual del banner',
      table: {
        type: { summary: "'info' | 'success' | 'warning' | 'error' | 'neutral'" },
        defaultValue: { summary: "'info'" },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Título del banner (activa layout complejo)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: { type: 'text' },
      description: 'Icono o emoji a mostrar',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    actions: {
      control: { type: 'text' },
      description: 'Acciones adicionales (botones, enlaces)',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Si el banner puede ser cerrado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Si el banner ocupa todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    withBorder: {
      control: { type: 'boolean' },
      description: 'Si el banner tiene borde',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    borderColor: {
      control: { type: 'color' },
      description: 'Color personalizado para el borde',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Función a ejecutar al cerrar el banner',
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
        defaultValue: { summary: "''" },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico
export const Default: Story = {
  args: {
    children: 'Este es un mensaje informativo básico.',
  },
};

// Todas las variantes básicas
export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Esta es una información importante que debes conocer.',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Esta es una información con variante light.',
  },
};

export const Recommendation: Story = {
  args: {
    variant: 'recommendation',
    children: 'Te recomendamos esta acción.',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Esta es una información sutil.',
  },
};


// Layout complejo con título
export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Información Importante',
    children: 'Este banner tiene un título para mayor claridad.',
  },
};

// Con icono (layout simple)
export const WithIcon: Story = {
  args: {
    variant: 'recommendation',
    icon: '⚠️',
    children: 'Este banner incluye un icono para mayor visibilidad.',
  },
};

// Layout complejo con título e icono
export const WithTitleAndIcon: Story = {
  args: {
    variant: 'light',
    title: '¡Éxito!',
    icon: '✅',
    children: 'La operación se completó correctamente.',
  },
};

// Con acciones (layout complejo)
export const WithActions: Story = {
  args: {
    variant: 'info',
    title: 'Actualización Disponible',
    icon: '🔄',
    children: 'Hay una nueva versión disponible para descargar.',
    actions: (
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <Button size="small" variant="secondary">Más tarde</Button>
        <Button size="small" variant="primary">Actualizar</Button>
      </div>
    ),
  },
};

// Banner descartable funcional
export const Dismissible: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true);
    
    if (!isVisible) {
      return (
        <Button onClick={() => setIsVisible(true)}>
          Mostrar Banner
        </Button>
      );
    }
    
    return (
      <Banner 
        variant="info" 
        onClose={() => setIsVisible(false)}
        title="Banner Descartable"
        icon="ℹ️"
      >
        Este banner puede ser cerrado haciendo clic en la X o presionando Escape.
      </Banner>
    );
  },
};

// Banner no descartable
export const NotDismissible: Story = {
  args: {
    variant: 'subtle',
    title: 'Error Crítico',
    icon: '🚨',
    children: 'Este banner no puede ser cerrado y requiere atención inmediata.',
    dismissible: false,
  },
};

// Sin ancho completo
export const NotFullWidth: Story = {
  args: {
    variant: 'info',
    children: 'Este banner no ocupa todo el ancho disponible.',
    fullWidth: false,
  },
};

// Sin borde
export const WithoutBorder: Story = {
  args: {
    variant: 'dark',
    title: 'Sin Borde',
    children: 'Este banner no tiene borde visible.',
    withBorder: false,
  },
};

// Con borde personalizado
export const CustomBorder: Story = {
  args: {
    variant: 'info',
    title: 'Borde Personalizado',
    children: 'Este banner tiene un color de borde personalizado.',
    borderColor: 'var(--color-purple-500)',
  },
};

// Contenido largo
export const LongContent: Story = {
  args: {
    variant: 'info',
    title: 'Términos y Condiciones',
    icon: '📋',
    children: 'Al continuar, aceptas nuestros términos y condiciones de uso. Esto incluye el procesamiento de tus datos personales de acuerdo con nuestra política de privacidad. Si tienes alguna pregunta, no dudes en contactarnos a través de nuestro centro de ayuda.',
  },
};

// Comparación de todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-4)', 
      width: '100%' 
    }}>
      <Banner variant="info" icon="ℹ️" title="Información">
        Este es un banner de información con layout complejo.
      </Banner>
      <Banner variant="light" icon="✅" title="Éxito">
        Operación completada exitosamente.
      </Banner>
      <Banner variant="recommendation" icon="⚠️" title="Advertencia">
        Ten cuidado con esta acción.
      </Banner>
      <Banner variant="subtle" icon="🚨" title="Error">
        Ha ocurrido un error en el sistema.
      </Banner>
      <Banner variant="dark" icon="📄" title="Neutral">
        Este es un mensaje neutral.
      </Banner>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación de todas las variantes disponibles del Banner con layout complejo.',
      },
    },
  },
};

// Layouts comparados
export const LayoutComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'var(--spacing-4)', 
      width: '100%' 
    }}>
      <Banner variant="info" icon="ℹ️">
        Layout simple: solo mensaje e icono.
      </Banner>
      <Banner variant="light" title="Layout Complejo" icon="✅">
        Layout complejo: título, icono y mensaje estructurados.
      </Banner>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación entre layout simple y complejo del Banner.',
      },
    },
  },
};

// Ejemplo interactivo realista
export const InteractiveExample: Story = {
  render: () => {
    const [banners, setBanners] = useState<Array<{
      id: number;
      variant: 'dark' | 'light' | 'info' | 'recommendation' | 'subtle';
      title: string;
      message: string;
      icon: string;
    }>>([
      { 
        id: 1, 
        variant: 'info', 
        title: 'Nueva función', 
        message: 'Hemos agregado una nueva función a la plataforma.',
        icon: ''
      },
      { 
        id: 2, 
        variant: 'light', 
        title: 'Guardado exitoso', 
        message: 'Los cambios se han guardado correctamente.',
        icon: ''
      },
      { 
        id: 3, 
        variant: 'recommendation', 
        title: 'Mantenimiento programado', 
        message: 'El sistema estará en mantenimiento mañana de 2:00 a 4:00 AM.',
        icon: '🔧'
      },
    ]);
    
    const removeBanner = (id: number) => {
      setBanners(banners.filter(banner => banner.id !== id));
    };
    
    const addBanner = () => {
      const variants = ['info', 'light', 'recommendation', 'subtle', 'dark'] as const;
      const icons = ['ℹ️', '💡', '⭐', '📝', '📄'];
      const titles = ['Nueva notificación', 'Operación exitosa', 'Recomendación', 'Información sutil', 'Información general'];
      const messages = [
        'Este es un banner agregado dinámicamente.',
        'La operación se completó sin problemas.',
        'Revisa esta información antes de continuar.',
        'Se ha detectado un problema en el sistema.',
        'Información general del sistema.'
      ];
      
      const randomIndex = Math.floor(Math.random() * variants.length);
      const newBanner = {
        id: Date.now(),
        variant: variants[randomIndex],
        title: titles[randomIndex],
        message: messages[randomIndex],
        icon: icons[randomIndex],
      };
      setBanners([...banners, newBanner]);
    };
    
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--spacing-4)', 
        width: '100%' 
      }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          <Button onClick={addBanner} variant="primary">
            Agregar Banner
          </Button>
          <Button onClick={() => setBanners([])} variant="secondary">
            Limpiar Todo
          </Button>
        </div>
        {banners.map(banner => (
          <Banner
            key={banner.id}
            variant={banner.variant}
            title={banner.title}
            icon={banner.icon}
            onClose={() => removeBanner(banner.id)}
          >
            {banner.message}
          </Banner>
        ))}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra cómo usar el Banner en una aplicación real con gestión dinámica.',
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
      <Banner 
        variant="light" 
        title="Sesión iniciada" 
        icon="👋"
        onClose={() => alert('Banner cerrado')}
      >
        Bienvenido de nuevo, María. Tu última sesión fue hace 2 horas.
      </Banner>
      
      <Banner 
        variant="recommendation" 
        title="Conexión inestable" 
        icon="📶"
        actions={
          <Button size="small" variant="secondary">
            Reintentar
          </Button>
        }
        onClose={() => alert('Banner cerrado')}
      >
        Tu conexión a internet parece inestable. Algunas funciones pueden no funcionar correctamente.
      </Banner>
      
      <Banner 
        variant="subtle" 
        title="Error de validación" 
        icon="❌"
        dismissible={false}
      >
        No se pudo procesar el formulario. Revisa los campos marcados en rojo y vuelve a intentar.
      </Banner>
      
      <Banner 
        variant="info" 
        title="Nueva política de privacidad" 
        icon="🔒"
        actions={
          <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
            <Button size="small" variant="secondary">Leer más</Button>
            <Button size="small" variant="primary">Aceptar</Button>
          </div>
        }
        onClose={() => alert('Banner cerrado')}
      >
        Hemos actualizado nuestra política de privacidad. Por favor, revisa los cambios.
      </Banner>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el Banner en diferentes situaciones de una aplicación.',
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
      <Banner 
        variant="info" 
        title="Ejemplo de accesibilidad" 
        icon="♿"
        onClose={() => alert('Banner cerrado con teclado')}
      >
        Este banner es completamente accesible. Usa Tab para navegar, Escape para cerrar, y es compatible con lectores de pantalla.
      </Banner>
      
      <Banner 
        variant="light" 
        icon="✅"
        onClose={() => alert('Banner simple cerrado')}
      >
        Banner simple también accesible con navegación por teclado.
      </Banner>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos que demuestran las características de accesibilidad del Banner.',
      },
    },
  },
};
