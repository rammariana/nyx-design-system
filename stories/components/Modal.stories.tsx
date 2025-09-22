import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../src/components/Modal';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente Modal para mostrar contenido en una ventana superpuesta.

## Características

- **Portal**: Renderiza fuera del DOM normal usando React Portal
- **Tamaños**: small, medium (por defecto), large, full
- **Accesibilidad**: Soporte completo para teclado y lectores de pantalla
- **Overlay**: Fondo semitransparente con blur
- **Cierre**: Múltiples formas de cerrar (botón, overlay, Escape)
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## Tamaños

- **small**: 400px máximo (alertas, confirmaciones)
- **medium**: 500px máximo (formularios simples)
- **large**: 700px máximo (formularios complejos)
- **full**: 95% de la pantalla (contenido extenso)

## Accesibilidad

- **Teclado**: Escape para cerrar, Tab para navegar
- **Focus**: Mantiene el foco dentro del modal
- **Lectores de pantalla**: Anuncia el modal y su propósito
- **Overlay**: Bloquea la interacción con el contenido de fondo
        `,
      },
    },
  },
  argTypes: {
    // Props requeridas
    isOpen: {
      control: { type: 'boolean' },
      description: 'Estado de apertura del modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onClose: {
      action: 'close',
      description: 'Callback que se ejecuta cuando se cierra el modal',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      control: false,
      description: 'Contenido principal del modal',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props opcionales
    title: {
      control: { type: 'text' },
      description: 'Título del modal que aparece en el header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    footer: {
      control: false,
      description: 'Contenido del footer del modal',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'full'],
      description: 'Tamaño del modal',
      table: {
        type: { summary: "'small' | 'medium' | 'large' | 'full'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
      description: 'Cerrar el modal al hacer clic en el overlay',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
      description: 'Cerrar el modal con la tecla Escape',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showCloseButton: {
      control: { type: 'boolean' },
      description: 'Mostrar el botón de cerrar en el header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales para el modal',
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

// Wrapper component para manejar el estado
const ModalWrapper = ({ children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal 
        {...props} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        {children}
      </Modal>
    </div>
  );
};

// Por defecto
export const Default: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>Este es el contenido del modal. Puedes agregar cualquier contenido aquí.</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal básico con configuración por defecto.',
      },
    },
  },
};

// Con título
export const WithTitle: Story = {
  render: (args) => (
    <ModalWrapper {...args} title="Confirmar Acción">
      <p>¿Estás seguro de que quieres continuar con esta acción?</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal con título en el header.',
      },
    },
  },
};

// Con footer
export const WithFooter: Story = {
  render: (args) => (
    <ModalWrapper 
      {...args} 
      title="Confirmar Acción"
      footer={
        <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
          <Button variant="secondary" onClick={() => {}}>Cancelar</Button>
          <Button variant="primary" onClick={() => {}}>Confirmar</Button>
        </div>
      }
    >
      <p>¿Estás seguro de que quieres continuar con esta acción?</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal con footer que contiene botones de acción.',
      },
    },
  },
};

// Tamaños
export const Small: Story = {
  render: (args) => (
    <ModalWrapper {...args} size="small" title="Modal Pequeño">
      <p>Este es un modal pequeño, ideal para alertas y confirmaciones.</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal de tamaño pequeño (400px máximo).',
      },
    },
  },
};

export const Medium: Story = {
  render: (args) => (
    <ModalWrapper {...args} size="medium" title="Modal Mediano">
      <p>Este es un modal de tamaño mediano, ideal para formularios simples.</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal de tamaño mediano (500px máximo, por defecto).',
      },
    },
  },
};

export const Large: Story = {
  render: (args) => (
    <ModalWrapper {...args} size="large" title="Modal Grande">
      <p>Este es un modal grande con más espacio para contenido.</p>
      <p>Ideal para formularios complejos y contenido extenso.</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal de tamaño grande (700px máximo).',
      },
    },
  },
};

export const Full: Story = {
  render: (args) => (
    <ModalWrapper {...args} size="full" title="Modal Completo">
      <div style={{ padding: 'var(--spacing-4)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Contenido Completo
        </h3>
        <p>Este modal ocupa casi toda la pantalla (95% de viewport).</p>
        <div style={{ 
          height: '400px', 
          background: 'var(--color-gray-100)', 
          borderRadius: 'var(--radius-md)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--color-gray-600)'
        }}>
          <p>Área de contenido grande</p>
        </div>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal de tamaño completo (95% de la pantalla).',
      },
    },
  },
};

// Sin botón de cerrar
export const WithoutCloseButton: Story = {
  render: (args) => (
    <ModalWrapper {...args} showCloseButton={false} title="Sin Botón Cerrar">
      <p>Este modal no tiene botón de cerrar. Solo se puede cerrar con Escape o haciendo clic en el overlay.</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal sin botón de cerrar en el header.',
      },
    },
  },
};

// Sin cerrar por overlay
export const NoOverlayClose: Story = {
  render: (args) => (
    <ModalWrapper {...args} closeOnOverlayClick={false} title="Sin Cerrar por Overlay">
      <p>Este modal no se cierra al hacer clic en el overlay. Solo se puede cerrar con el botón X o Escape.</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal que no se cierra al hacer clic en el overlay.',
      },
    },
  },
};

// Sin cerrar con Escape
export const NoEscapeClose: Story = {
  render: (args) => (
    <ModalWrapper {...args} closeOnEscape={false} title="Sin Cerrar con Escape">
      <p>Este modal no se cierra con la tecla Escape. Solo se puede cerrar con el botón X o haciendo clic en el overlay.</p>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal que no se cierra con la tecla Escape.',
      },
    },
  },
};

// Modal con formulario
export const FormModal: Story = {
  render: (args) => (
    <ModalWrapper 
      {...args} 
      title="Crear Usuario"
      size="medium"
      footer={
        <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
          <Button variant="secondary" onClick={() => {}}>Cancelar</Button>
          <Button variant="primary" onClick={() => {}}>Crear</Button>
        </div>
      }
    >
      <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div>
          <label htmlFor="name" style={{ 
            display: 'block', 
            marginBottom: 'var(--spacing-2)', 
            fontWeight: 'var(--font-medium)',
            color: 'var(--color-gray-700)'
          }}>
            Nombre
          </label>
          <input 
            id="name"
            type="text" 
            placeholder="Ingresa el nombre"
            style={{ 
              width: '100%', 
              padding: 'var(--spacing-2)', 
              border: '1px solid var(--color-gray-300)', 
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-base)'
            }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ 
            display: 'block', 
            marginBottom: 'var(--spacing-2)', 
            fontWeight: 'var(--font-medium)',
            color: 'var(--color-gray-700)'
          }}>
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Ingresa el email"
            style={{ 
              width: '100%', 
              padding: 'var(--spacing-2)', 
              border: '1px solid var(--color-gray-300)', 
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-base)'
            }}
          />
        </div>
      </form>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modal con formulario de ejemplo usando variables CSS del sistema.',
      },
    },
  },
};

// Comparación de tamaños
export const SizeComparison: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
        <Button onClick={() => setOpenSize('small')}>Small</Button>
        <Button onClick={() => setOpenSize('medium')}>Medium</Button>
        <Button onClick={() => setOpenSize('large')}>Large</Button>
        <Button onClick={() => setOpenSize('full')}>Full</Button>
        
        <Modal 
          isOpen={openSize === 'small'} 
          onClose={() => setOpenSize(null)}
          title="Modal Pequeño"
          size="small"
        >
          <p>Este es un modal pequeño (400px máximo).</p>
        </Modal>
        
        <Modal 
          isOpen={openSize === 'medium'} 
          onClose={() => setOpenSize(null)}
          title="Modal Mediano"
          size="medium"
        >
          <p>Este es un modal de tamaño mediano (500px máximo).</p>
        </Modal>
        
        <Modal 
          isOpen={openSize === 'large'} 
          onClose={() => setOpenSize(null)}
          title="Modal Grande"
          size="large"
        >
          <p>Este es un modal grande (700px máximo) con más espacio.</p>
        </Modal>
        
        <Modal 
          isOpen={openSize === 'full'} 
          onClose={() => setOpenSize(null)}
          title="Modal Completo"
          size="full"
        >
          <div style={{ padding: 'var(--spacing-4)' }}>
            <p>Este modal ocupa casi toda la pantalla (95% de viewport).</p>
          </div>
        </Modal>
      </div>
    );
  },
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
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
          <Button onClick={() => setActiveModal('confirm')}>Confirmación</Button>
          <Button onClick={() => setActiveModal('form')}>Formulario</Button>
          <Button onClick={() => setActiveModal('info')}>Información</Button>
        </div>
        
        {/* Modal de confirmación */}
        <Modal 
          isOpen={activeModal === 'confirm'} 
          onClose={() => setActiveModal(null)}
          title="Confirmar Eliminación"
          size="small"
          footer={
            <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
              <Button variant="secondary" onClick={() => setActiveModal(null)}>
                Cancelar
              </Button>
              <Button variant="danger" onClick={() => setActiveModal(null)}>
                Eliminar
              </Button>
            </div>
          }
        >
          <p>¿Estás seguro de que quieres eliminar este elemento? Esta acción no se puede deshacer.</p>
        </Modal>
        
        {/* Modal de formulario */}
        <Modal 
          isOpen={activeModal === 'form'} 
          onClose={() => setActiveModal(null)}
          title="Crear Proyecto"
          size="medium"
          footer={
            <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
              <Button variant="secondary" onClick={() => setActiveModal(null)}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => setActiveModal(null)}>
                Crear Proyecto
              </Button>
            </div>
          }
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--spacing-2)', 
                fontWeight: 'var(--font-medium)',
                color: 'var(--color-gray-700)'
              }}>
                Nombre del Proyecto
              </label>
              <input 
                type="text" 
                placeholder="Ingresa el nombre del proyecto"
                style={{ 
                  width: '100%', 
                  padding: 'var(--spacing-2)', 
                  border: '1px solid var(--color-gray-300)', 
                  borderRadius: 'var(--radius-sm)'
                }}
              />
            </div>
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: 'var(--spacing-2)', 
                fontWeight: 'var(--font-medium)',
                color: 'var(--color-gray-700)'
              }}>
                Descripción
              </label>
              <textarea 
                placeholder="Describe el proyecto"
                rows={3}
                style={{ 
                  width: '100%', 
                  padding: 'var(--spacing-2)', 
                  border: '1px solid var(--color-gray-300)', 
                  borderRadius: 'var(--radius-sm)',
                  resize: 'vertical'
                }}
              />
            </div>
          </form>
        </Modal>
        
        {/* Modal de información */}
        <Modal 
          isOpen={activeModal === 'info'} 
          onClose={() => setActiveModal(null)}
          title="Información del Sistema"
          size="large"
          footer={
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" onClick={() => setActiveModal(null)}>
                Entendido
              </Button>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div>
              <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                Nuevas Funcionalidades
              </h4>
              <ul style={{ margin: 0, paddingLeft: 'var(--spacing-4)', color: 'var(--color-gray-700)' }}>
                <li>Mejoras en el rendimiento del sistema</li>
                <li>Nueva interfaz de usuario más intuitiva</li>
                <li>Integración con servicios externos</li>
                <li>Mejores herramientas de análisis</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
                Próximas Actualizaciones
              </h4>
              <p style={{ margin: 0, color: 'var(--color-gray-700)' }}>
                Estamos trabajando en nuevas funcionalidades que estarán disponibles en las próximas semanas.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el Modal en diferentes situaciones del negocio.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: (args) => (
    <ModalWrapper 
      {...args} 
      title="Ejemplo de Accesibilidad"
      footer={
        <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
          <Button variant="secondary" onClick={() => {}}>Cancelar</Button>
          <Button variant="primary" onClick={() => {}}>Aceptar</Button>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <p>Este modal demuestra las características de accesibilidad:</p>
        <ul style={{ margin: 0, paddingLeft: 'var(--spacing-4)', color: 'var(--color-gray-700)' }}>
          <li><strong>Teclado:</strong> Usa Tab para navegar, Escape para cerrar</li>
          <li><strong>Focus:</strong> El foco se mantiene dentro del modal</li>
          <li><strong>Lectores de pantalla:</strong> Anuncia el modal y su propósito</li>
          <li><strong>Overlay:</strong> Bloquea la interacción con el contenido de fondo</li>
        </ul>
      </div>
    </ModalWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que demuestra las características de accesibilidad del Modal.',
      },
    },
  },
};
