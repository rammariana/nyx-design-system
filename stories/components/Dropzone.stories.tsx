import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from '../../src/components/Dropzone';

const meta: Meta<typeof Dropzone> = {
  title: 'Components/Dropzone',
  component: Dropzone,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente Dropzone para subir archivos mediante drag & drop o selección manual.

## Características

- **Drag & Drop**: Arrastra archivos directamente al área
- **Selección Manual**: Haz clic para abrir el selector de archivos
- **Validación**: Validación automática de tipo y tamaño de archivo
- **Variantes**: default (archivos generales) e image (solo imágenes)
- **Estados**: Normal, hover, drag activo, deshabilitado, error
- **Accesibilidad**: Soporte completo para teclado y lectores de pantalla

## Variantes

- **default**: Para archivos generales (PDF, Excel, documentos)
- **image**: Para imágenes con contenido por defecto optimizado

## Validaciones

- **Tipo de archivo**: Valida según la variante y el prop \`accept\`
- **Tamaño**: Valida contra \`maxSize\` (por defecto 5MB)
- **Errores**: Muestra mensajes de error claros y específicos

## Accesibilidad

- **Teclado**: Tab para navegar, Enter/Space para activar
- **Lectores de pantalla**: Etiquetas descriptivas y estados anunciados
- **Focus**: Indicadores visuales claros de foco
        `,
      },
    },
  },
  argTypes: {
    onFileAccepted: {
      action: 'file accepted',
      description: 'Callback que se ejecuta cuando se acepta un archivo válido',
      table: {
        type: { summary: '(file: File) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      control: false,
      description: 'Contenido personalizado del dropzone. Si no se proporciona, usa contenido por defecto según la variante',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales para el contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'image'],
      description: 'Variante visual del componente',
      table: {
        type: { summary: "'default' | 'image'" },
        defaultValue: { summary: "'default'" },
      },
    },
    accept: {
      control: { type: 'text' },
      description: 'Tipos de archivo aceptados (formato MIME o extensiones)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'.pdf, .xlsx'" },
      },
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Tamaño máximo del archivo en bytes',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5242880 (5MB)' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Si el componente está deshabilitado',
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

// Contenido por defecto para archivos generales
const defaultContent = (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
    <i className="bi bi-cloud-upload" style={{ fontSize: '1.5rem', color: 'var(--color-gray-400)' }}></i>
    <div>
      <div style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-gray-700)' }}>
        Arrastra tu archivo aquí
      </div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
        o haz clic para seleccionar
      </div>
    </div>
  </div>
);

// Contenido para documentos específicos
const documentContent = (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
    <i className="bi bi-file-earmark-text" style={{ fontSize: '1.5rem', color: 'var(--color-gray-400)' }}></i>
    <div>
      <div style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-gray-700)' }}>
        Subir documentos
      </div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
        PDF, DOC, DOCX - Máximo 5MB
      </div>
    </div>
  </div>
);

// Contenido para archivos pequeños
const smallFileContent = (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
    <i className="bi bi-file-earmark" style={{ fontSize: '1.5rem', color: 'var(--color-gray-400)' }}></i>
    <div>
      <div style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-gray-700)' }}>
        Archivo pequeño
      </div>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
        Máximo 1MB
      </div>
    </div>
  </div>
);

// Por defecto
export const Default: Story = {
  args: {
    children: defaultContent,
    onFileAccepted: (file) => console.log('Archivo aceptado:', file.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropzone básico para archivos generales con contenido personalizado.',
      },
    },
  },
};

// Variante de imagen
export const ImageVariant: Story = {
  args: {
    variant: 'image',
    onFileAccepted: (file) => console.log('Imagen aceptada:', file.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante optimizada para imágenes con contenido por defecto.',
      },
    },
  },
};

// Sin contenido personalizado (usa contenido por defecto)
export const WithoutCustomContent: Story = {
  args: {
    onFileAccepted: (file) => console.log('Archivo aceptado:', file.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropzone sin contenido personalizado, usa el contenido por defecto según la variante.',
      },
    },
  },
};

// Tipos de archivo personalizados
export const CustomFileTypes: Story = {
  args: {
    accept: '.pdf, .doc, .docx, .txt',
    children: documentContent,
    onFileAccepted: (file) => console.log('Documento aceptado:', file.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropzone configurado para tipos de archivo específicos con validación automática.',
      },
    },
  },
};

// Tamaño máximo pequeño
export const SmallMaxSize: Story = {
  args: {
    maxSize: 1024 * 1024, // 1MB
    children: smallFileContent,
    onFileAccepted: (file) => console.log('Archivo pequeño aceptado:', file.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropzone con límite de tamaño reducido para archivos pequeños.',
      },
    },
  },
};

// Deshabilitado
export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
        <i className="bi bi-cloud-upload" style={{ fontSize: '1.5rem', color: 'var(--color-gray-300)' }}></i>
        <div>
          <div style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-gray-400)' }}>
            Dropzone deshabilitado
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-300)' }}>
            No disponible temporalmente
          </div>
        </div>
      </div>
    ),
    onFileAccepted: (file) => console.log('Archivo aceptado:', file.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado deshabilitado del dropzone con indicadores visuales claros.',
      },
    },
  },
};

// Manejo de errores
export const ErrorHandling: Story = {
  args: {
    variant: 'image',
    maxSize: 500 * 1024, // 500KB
    onFileAccepted: (file) => console.log('Imagen pequeña aceptada:', file.name),
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra el manejo de errores con límites estrictos de tamaño.',
      },
    },
  },
};

// Comparación de variantes
export const VariantComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Variante Default
        </h3>
        <Dropzone 
          children={defaultContent}
          onFileAccepted={(file) => console.log('Default:', file.name)}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Variante Image
        </h3>
        <Dropzone 
          variant="image"
          onFileAccepted={(file) => console.log('Image:', file.name)}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparación visual entre las dos variantes del Dropzone.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Subida de avatar */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Avatar de Usuario
        </h3>
        <Dropzone 
          variant="image"
          maxSize={2 * 1024 * 1024} // 2MB
          accept="image/jpeg, image/png, image/gif"
          onFileAccepted={(file) => console.log('Avatar:', file.name)}
        />
      </div>

      {/* Subida de documentos */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Documentos de Contrato
        </h3>
        <Dropzone 
          accept=".pdf, .doc, .docx"
          maxSize={10 * 1024 * 1024} // 10MB
          children={
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <i className="bi bi-file-earmark-text" style={{ fontSize: '1.5rem', color: 'var(--color-gray-400)' }}></i>
              <div>
                <div style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-gray-700)' }}>
                  Subir contrato
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
                  PDF, DOC, DOCX - Máximo 10MB
                </div>
              </div>
            </div>
          }
          onFileAccepted={(file) => console.log('Contrato:', file.name)}
        />
      </div>

      {/* Subida de archivos pequeños */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Archivos de Configuración
        </h3>
        <Dropzone 
          accept=".json, .yaml, .yml, .txt"
          maxSize={100 * 1024} // 100KB
          children={
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <i className="bi bi-gear" style={{ fontSize: '1.5rem', color: 'var(--color-gray-400)' }}></i>
              <div>
                <div style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-gray-700)' }}>
                  Configuración
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
                  JSON, YAML, TXT - Máximo 100KB
                </div>
              </div>
            </div>
          }
          onFileAccepted={(file) => console.log('Config:', file.name)}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplos realistas de cómo usar el Dropzone en diferentes situaciones del negocio.',
      },
    },
  },
};

// Estados del componente
export const ComponentStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)' }}>
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Estados Normales
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Normal</h4>
            <Dropzone 
              children={defaultContent}
              onFileAccepted={(file) => console.log('Normal:', file.name)}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Deshabilitado</h4>
            <Dropzone 
              disabled={true}
              children={
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  <i className="bi bi-cloud-upload" style={{ fontSize: '1.5rem', color: 'var(--color-gray-300)' }}></i>
                  <span style={{ color: 'var(--color-gray-400)' }}>Deshabilitado</span>
                </div>
              }
              onFileAccepted={(file) => console.log('Disabled:', file.name)}
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Variantes
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Default</h4>
            <Dropzone 
              children={defaultContent}
              onFileAccepted={(file) => console.log('Default:', file.name)}
            />
          </div>
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-700)' }}>Image</h4>
            <Dropzone 
              variant="image"
              onFileAccepted={(file) => console.log('Image:', file.name)}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Todos los estados y variantes disponibles del componente Dropzone.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Dropzone 
        children={
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            <i className="bi bi-cloud-upload" style={{ fontSize: '1.5rem', color: 'var(--color-gray-400)' }}></i>
            <div>
              <div style={{ fontWeight: 'var(--font-medium)', color: 'var(--color-gray-700)' }}>
                Ejemplo de Accesibilidad
              </div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray-500)' }}>
                Haz clic para seleccionar archivos
              </div>
            </div>
          </div>
        }
        onFileAccepted={(file) => console.log('Accesible:', file.name)}
      />
      
      <div style={{ 
        padding: 'var(--spacing-4)', 
        backgroundColor: 'var(--color-gray-50)', 
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-sm)'
      }}>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
          Características de Accesibilidad Actuales
        </h4>
        <ul style={{ margin: 0, paddingLeft: 'var(--spacing-4)', color: 'var(--color-gray-700)' }}>
          <li><strong>Click:</strong> Funciona con click del mouse</li>
          <li><strong>Drag & Drop:</strong> Soporte completo para arrastrar archivos</li>
          <li><strong>Errores:</strong> Mensajes de error visibles</li>
          <li><strong>Estados:</strong> Indicadores visuales de hover y drag activo</li>
        </ul>
        
        <h4 style={{ marginBottom: 'var(--spacing-2)', marginTop: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Mejoras de Accesibilidad Recomendadas
        </h4>
        <ul style={{ margin: 0, paddingLeft: 'var(--spacing-4)', color: 'var(--color-gray-600)' }}>
          <li><strong>Teclado:</strong> Agregar soporte para Tab, Enter, Space</li>
          <li><strong>ARIA:</strong> Implementar aria-label, role, aria-describedby</li>
          <li><strong>Focus:</strong> Agregar estilos :focus para navegación por teclado</li>
          <li><strong>Lectores de pantalla:</strong> Mejorar anuncios de estados</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Estado actual de accesibilidad del Dropzone y mejoras recomendadas.',
      },
    },
  },
};
