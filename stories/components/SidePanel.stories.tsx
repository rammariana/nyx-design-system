import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidePanel } from '../../src/components/sidebar';
import { Button } from '../../src/components/Button';
import { Banner } from '../../src/components/Banner';

const meta: Meta<typeof SidePanel> = {
  title: 'Components/SidePanel',
  component: SidePanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Componente SidePanel para mostrar contenido en un panel lateral fijo.

## Características

- **Posiciones**: left, right (por defecto)
- **Ancho**: Configurable con string (ej. "600px", "50%")
- **Fijo**: Position fixed con altura completa de viewport
- **Accesibilidad**: Role dialog y aria-modal para lectores de pantalla
- **Transiciones**: Animación suave de entrada/salida
- **Sombras**: Box-shadow para separación visual

## Posiciones

- **right**: Panel en el lado derecho (por defecto)
- **left**: Panel en el lado izquierdo

## Casos de Uso

- **Información contextual**: Panel derecho con detalles
- **Navegación**: Panel izquierdo con menú
- **Formularios laterales**: Paneles de configuración
- **Herramientas**: Paneles de utilidades

## Accesibilidad

- **Role**: dialog para lectores de pantalla
- **Aria-modal**: true para indicar modalidad
- **Teclado**: Escape para cerrar (implementar en aplicación)
- **Focus**: Mantener foco dentro del panel
        `,
      },
    },
  },
  argTypes: {
    // Props requeridas
    children: {
      control: false,
      description: 'Contenido a renderizar dentro del panel',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props opcionales
    width: {
      control: 'text',
      description: 'Ancho del panel (ej. "600px", "50%", "300px")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'50%'" },
      },
    },
    position: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Posición del panel: izquierda o derecha',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: "'right'" },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el panel',
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

// Contenido genérico para el panel derecho
const RightPanelContent = () => (
  <div style={{ 
    padding: 'var(--spacing-6)', 
    fontFamily: 'sans-serif', 
    color: 'var(--color-gray-700)' 
  }}>
    {/* Header con acciones */}
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      paddingBottom: 'var(--spacing-4)', 
      borderBottom: '1px solid var(--color-gray-200)' 
    }}>
      <Button variant="icon" aria-label="Expandir">
        <i className="bi bi-chevron-double-right"></i>
      </Button>

    </div>

    <div style={{ marginTop: 'var(--spacing-6)' }}>
    </div>

    <div style={{ marginTop: 'var(--spacing-4)' }}>
      <Banner variant="info" title="Lorem ipsum dolor">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Banner>
    </div>
    
    <div style={{ marginTop: 'var(--spacing-4)' }}>
      <Banner 
        variant="light" 
        title="Lorem ipsum"
        actions={
          <span style={{ 
            backgroundColor: 'var(--color-blue-50)', 
            color: 'var(--color-blue-800)', 
            fontSize: 'var(--text-sm)', 
            fontWeight: 'var(--font-medium)', 
            padding: 'var(--spacing-1) var(--spacing-3)', 
            borderRadius: 'var(--radius-full)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 'var(--spacing-1)' 
          }}>
            Lorem <i className="bi bi-stars"></i>
          </span>
        }
      >
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </Banner>
    </div>

    <div style={{ marginTop: 'var(--spacing-4)' }}>
      <Banner 
        variant="dark" 
        title="Lorem ipsum"
        actions={
          <Button variant="icon" aria-label="Copiar código" style={{ fontSize: 'var(--text-sm)' }}>
            <i className="bi bi-clipboard"></i>
          </Button>
        }
      >
        Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </Banner>
    </div>



    {/* Botón de soporte flotante */}
    <div style={{ position: 'fixed', bottom: 'var(--spacing-8)', right: 'var(--spacing-8)' }}>
      <Button style={{
        width: '56px', 
        height: '56px', 
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary-800)', 
        color: 'var(--color-white)',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        boxShadow: 'var(--shadow-sm)',
        fontSize: 'var(--text-xl)'
      }}>
        <i className="bi bi-headset"></i>
      </Button>
    </div>
  </div>
);

// Contenido genérico para el panel izquierdo
const LeftPanelContent = () => (
  <div style={{ 
    padding: 'var(--spacing-6)', 
    fontFamily: 'sans-serif', 
    color: 'var(--color-gray-700)', 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column' 
  }}>
    {/* Logo y branding */}
    <div style={{ marginBottom: 'var(--spacing-8)' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-4)' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: 'var(--color-primary-500)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginRight: 'var(--spacing-2)'
        }}>
          <span style={{ color: 'var(--color-white)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-lg)' }}>
            J
          </span>
        </div>
        <span style={{ fontWeight: 'var(--font-bold)', color: 'var(--color-primary-500)', fontSize: 'var(--text-lg)' }}>
          Lorem
        </span>
      </div>
      <h6 style={{ color: 'var(--color-gray-600)', margin: 0, fontSize: 'var(--text-sm)' }}>
        Lorem ipsum dolor
      </h6>
    </div>
    
    {/* Información de la operación */}
    <div style={{ marginBottom: 'var(--spacing-8)' }}>
      <small style={{ color: 'var(--color-gray-600)', display: 'block', marginBottom: 'var(--spacing-2)' }}>
        2023-001
      </small>
      <h6 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--text-base)' }}>
        Lorem ipsum dolor sit amet consectetur
      </h6>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        <span style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
          Lorem: Lorem ipsum
        </span>
        <span style={{ 
          backgroundColor: 'var(--color-yellow-200)', 
          color: 'var(--color-black)', 
          padding: 'var(--spacing-1) var(--spacing-2)', 
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--font-medium)',
          alignSelf: 'flex-start'
        }}>
          LOR
        </span>
        <span style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-sm)' }}>
          Lorem: 15/03/2023
        </span>
      </div>
    </div>

    {/* Estado */}
    <div style={{ marginBottom: 'var(--spacing-8)' }}>
      <span style={{ 
        backgroundColor: 'var(--color-primary-500)', 
        color: 'var(--color-white)', 
        padding: 'var(--spacing-1) var(--spacing-2)', 
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-xs)',
        display: 'block',
        marginBottom: 'var(--spacing-2)'
      }}>
        Lorem ipsum
      </span>
      <span style={{ 
        backgroundColor: 'var(--color-green-800)', 
        color: 'var(--color-white)', 
        padding: 'var(--spacing-1) var(--spacing-2)', 
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--text-xs)',
        display: 'block'
      }}>
        Lorem ipsum
      </span>
    </div>

    {/* Footer */}
    <div style={{ marginTop: 'auto' }}>
      <small style={{ color: 'var(--color-gray-600)', fontSize: 'var(--text-xs)' }}>
        Powered by lorem
      </small>
    </div>
  </div>
);

// Por defecto
export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <main style={{ flex: 1, padding: 'var(--spacing-8)', backgroundColor: 'var(--color-gray-50)' }}>
        <h1 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
          Lorem ipsum
        </h1>
        <p style={{ color: 'var(--color-gray-700)' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </main>
      <SidePanel {...args} />
    </div>
  ),
  args: {
    width: '600px',
    position: 'right',
    children: <RightPanelContent />,
  },
  parameters: {
    docs: {
      description: {
        story: 'SidePanel por defecto en posición derecha.',
      },
    },
  },
};

// Panel izquierdo
export const LeftPosition: Story = {
  render: (args: any) => (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <SidePanel {...args} />
      <main style={{ 
        flex: 1, 
        padding: 'var(--spacing-8)', 
        backgroundColor: 'var(--color-gray-50)', 
        marginLeft: args.width 
      }}>
        <h1 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
          Lorem ipsum
        </h1>
        <p style={{ color: 'var(--color-gray-700)', marginBottom: 'var(--spacing-6)' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <div style={{ 
          backgroundColor: 'var(--color-white)', 
          padding: 'var(--spacing-8)', 
          borderRadius: 'var(--radius-md)', 
          boxShadow: 'var(--shadow-sm)' 
        }}>
          <h2 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
            Lorem ipsum
          </h2>
          <p style={{ color: 'var(--color-gray-700)', marginBottom: 'var(--spacing-4)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p style={{ color: 'var(--color-gray-700)', marginBottom: 'var(--spacing-4)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div style={{ 
            backgroundColor: 'var(--color-blue-50)', 
            color: 'var(--color-blue-800)', 
            padding: 'var(--spacing-4)', 
            borderRadius: 'var(--radius-sm)', 
            marginTop: 'var(--spacing-4)' 
          }}>
            <i className="bi bi-info-circle me-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </main>
    </div>
  ),
  args: {
    width: '280px',
    position: 'left',
    children: <LeftPanelContent />,
  },
  parameters: {
    docs: {
      description: {
        story: 'SidePanel en posición izquierda.',
      },
    },
  },
};

// Comparación de ambas posiciones
export const Comparison: Story = {
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <SidePanel width="280px" position="left">
          <LeftPanelContent />
        </SidePanel>
      <main style={{ 
        flex: 1, 
        padding: 'var(--spacing-8)', 
        backgroundColor: 'var(--color-gray-50)', 
        marginLeft: '280px', 
        marginRight: '600px' 
      }}>
        <h1 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
          Lorem ipsum
        </h1>
        <p style={{ color: 'var(--color-gray-700)' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </main>
        <SidePanel width="600px" position="right">
          <RightPanelContent />
        </SidePanel>
    </div>
  ),
  args: {
    width: '600px',
    position: 'right',
    children: <RightPanelContent />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparación de ambas posiciones del SidePanel.',
      },
    },
  },
};

// Diferentes anchos
export const DifferentWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <main style={{ flex: 1, padding: 'var(--spacing-8)', backgroundColor: 'var(--color-gray-50)' }}>
        <h1 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
          Lorem ipsum
        </h1>
        <p style={{ color: 'var(--color-gray-700)' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </main>
      <SidePanel width="300px" position="right">
        <div style={{ padding: 'var(--spacing-6)' }}>
          <h3 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
            Lorem ipsum
          </h3>
          <p style={{ color: 'var(--color-gray-700)', fontSize: 'var(--text-sm)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </SidePanel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SidePanel con ancho estrecho.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => {
    const [activePanel, setActivePanel] = React.useState<'left' | 'right' | 'none'>('right');
    
    return (
      <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <main style={{ flex: 1, padding: 'var(--spacing-8)', backgroundColor: 'var(--color-gray-50)' }}>
          <h1 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
            Casos de Uso Realistas
          </h1>
          <p style={{ color: 'var(--color-gray-700)', marginBottom: 'var(--spacing-6)' }}>
            Ejemplos de cómo usar el SidePanel en diferentes situaciones del negocio.
          </p>
          
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', marginBottom: 'var(--spacing-6)' }}>
            <Button 
              variant={activePanel === 'left' ? 'primary' : 'secondary'}
              onClick={() => setActivePanel(activePanel === 'left' ? 'none' : 'left')}
            >
              Portal Clientes
            </Button>
            <Button 
              variant={activePanel === 'right' ? 'primary' : 'secondary'}
              onClick={() => setActivePanel(activePanel === 'right' ? 'none' : 'right')}
            >
              Clasificación
            </Button>
          </div>
          
          <div style={{ 
            backgroundColor: 'var(--color-white)', 
            padding: 'var(--spacing-6)', 
            borderRadius: 'var(--radius-md)', 
            boxShadow: 'var(--shadow-sm)' 
          }}>
            <h2 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
              Contenido Principal
            </h2>
            <p style={{ color: 'var(--color-gray-700)' }}>
              Este es el contenido principal de la aplicación. Los paneles laterales proporcionan 
              información contextual y herramientas adicionales.
            </p>
          </div>
        </main>
        
        {activePanel === 'left' && (
          <SidePanel width="280px" position="left">
            <LeftPanelContent />
          </SidePanel>
        )}
        
        {activePanel === 'right' && (
          <SidePanel width="600px" position="right">
            <RightPanelContent />
          </SidePanel>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Casos de uso realistas con paneles intercambiables.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <main style={{ flex: 1, padding: 'var(--spacing-8)', backgroundColor: 'var(--color-gray-50)' }}>
        <h1 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
          Ejemplo de Accesibilidad
        </h1>
        <p style={{ color: 'var(--color-gray-700)', marginBottom: 'var(--spacing-6)' }}>
          El SidePanel incluye características de accesibilidad integradas.
        </p>
        
        <div style={{ 
          backgroundColor: 'var(--color-white)', 
          padding: 'var(--spacing-6)', 
          borderRadius: 'var(--radius-md)', 
          boxShadow: 'var(--shadow-sm)' 
        }}>
          <h2 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
            Características de Accesibilidad
          </h2>
          <ul style={{ color: 'var(--color-gray-700)', paddingLeft: 'var(--spacing-6)' }}>
            <li><strong>Role dialog:</strong> Identifica el panel como un diálogo</li>
            <li><strong>Aria-modal:</strong> Indica que es modal para lectores de pantalla</li>
            <li><strong>Teclado:</strong> Escape para cerrar (implementar en aplicación)</li>
            <li><strong>Focus:</strong> Mantener foco dentro del panel</li>
            <li><strong>Contraste:</strong> Colores con suficiente contraste</li>
          </ul>
        </div>
      </main>
      <SidePanel {...args} />
    </div>
  ),
  args: {
    width: '400px',
    position: 'right',
    children: (
      <div style={{ padding: 'var(--spacing-6)' }}>
        <h3 style={{ color: 'var(--color-gray-900)', marginBottom: 'var(--spacing-4)' }}>
          Panel Accesible
        </h3>
        <p style={{ color: 'var(--color-gray-700)' }}>
          Este panel demuestra las características de accesibilidad del SidePanel.
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que demuestra las características de accesibilidad del SidePanel.',
      },
    },
  },
};
