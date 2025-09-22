import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryBox, AttachedFile } from '../../src/components/QueryBox';

const meta: Meta<typeof QueryBox> = {
  title: 'Components/QueryBox',
  component: QueryBox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente QueryBox para realizar consultas con soporte para archivos adjuntos y diferentes modelos.

## Características

- **Modelos**: Fast (rápido) y Pro (avanzado)
- **Archivos**: Soporte para PDF, imágenes y documentos
- **Estados**: Normal, carga, deshabilitado
- **Tamaños**: small, medium (por defecto), large
- **Validación**: Contador de caracteres y validación de envío
- **Accesibilidad**: Soporte completo para teclado y lectores de pantalla

## Modelos

- **Fast**: Procesamiento rápido, botón gris
- **Pro**: Procesamiento avanzado, botón negro con borde gradiente

## Tipos de Archivos Soportados

- **PDF**: Archivos PDF con icono específico
- **Image**: Imágenes con preview y icono
- **Document**: Documentos de texto con icono

## Estados

- **Normal**: Funcionalidad completa
- **Loading**: Muestra loader y botón de cancelar
- **Disabled**: Deshabilitado completamente
        `,
      },
    },
  },
  argTypes: {
    // Props requeridas
    value: {
      control: { type: 'text' },
      description: 'Valor del textarea',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onChange: {
      action: 'change',
      description: 'Callback que se ejecuta cuando cambia el valor del textarea',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLTextAreaElement>) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onSubmit: {
      action: 'submit',
      description: 'Callback que se ejecuta cuando se envía el formulario',
      table: {
        type: { summary: '(event: FormEvent<HTMLFormElement>) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props opcionales
    onAttachPdf: {
      action: 'attach-pdf',
      description: 'Callback para adjuntar archivos PDF',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onAttachImage: {
      action: 'attach-image',
      description: 'Callback para adjuntar imágenes',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onToggleModel: {
      action: 'toggle-model',
      description: 'Callback para cambiar entre modelos Fast/Pro',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onRemoveFile: {
      action: 'remove-file',
      description: 'Callback para eliminar archivos adjuntos',
      table: {
        type: { summary: '(index: number, type: AttachedFile["type"]) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Estado de carga del componente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loadingMessage: {
      control: { type: 'text' },
      description: 'Mensaje que se muestra durante la carga',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Procesando...'" },
      },
    },
    model: {
      control: { type: 'select' },
      options: ['fast', 'pro'],
      description: 'Modelo de procesamiento',
      table: {
        type: { summary: "'fast' | 'pro'" },
        defaultValue: { summary: "'fast'" },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Texto placeholder del textarea',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'Escribe tu consulta aquí...'" },
      },
    },
    attachedFiles: {
      control: false,
      description: 'Array de archivos adjuntos',
      table: {
        type: { summary: 'AttachedFile[]' },
        defaultValue: { summary: '[]' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del componente',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado del componente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    maxLength: {
      control: { type: 'number', min: 0, max: 1000 },
      description: 'Longitud máxima del texto',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showAttachments: {
      control: { type: 'boolean' },
      description: 'Mostrar sección de archivos adjuntos',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showModelToggle: {
      control: { type: 'boolean' },
      description: 'Mostrar toggle de modelo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    submitButtonText: {
      control: { type: 'text' },
      description: 'Texto del botón de envío',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    cancelButtonText: {
      control: { type: 'text' },
      description: 'Texto del botón de cancelar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'data-testid': {
      control: { type: 'text' },
      description: 'ID para pruebas automatizadas',
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

// Archivos de ejemplo
const mockFiles: AttachedFile[] = [
  {
    name: 'documento-importante.pdf',
    size: 2048000,
    type: 'pdf',
  },
  {
    name: 'imagen-ejemplo.jpg',
    size: 1024000,
    type: 'image',
    previewUrl: 'https://via.placeholder.com/100x100',
  },
  {
    name: 'archivo-texto.txt',
    size: 512000,
    type: 'document',
  },
];

// Por defecto
export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    onSubmit: () => {},
    placeholder: 'Escribe tu consulta aquí...',
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox básico con configuración por defecto.',
      },
    },
  },
};

// Con valor
export const WithValue: Story = {
  args: {
    value: '¿Cuál es la diferencia entre React y Vue?',
    onChange: () => {},
    onSubmit: () => {},
    placeholder: 'Escribe tu consulta aquí...',
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox con texto preestablecido.',
      },
    },
  },
};


// Tamaños
export const Small: Story = {
  args: {
    value: 'Consulta pequeña',
    size: 'small',
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox de tamaño pequeño.',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    value: 'Consulta mediana',
    size: 'medium',
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox de tamaño mediano (por defecto).',
      },
    },
  },
};

export const Large: Story = {
  args: {
    value: 'Consulta larga con mucho contenido para probar el tamaño grande del componente',
    size: 'large',
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox de tamaño grande.',
      },
    },
  },
};


// Estado de carga
export const Loading: Story = {
  args: {
    value: 'Consulta en procesamiento',
    isLoading: true,
    loadingMessage: 'Procesando tu consulta...',
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox en estado de carga con loader y botón de cancelar.',
      },
    },
  },
};

// Deshabilitado
export const Disabled: Story = {
  args: {
    value: 'Consulta deshabilitada',
    disabled: true,
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox en estado deshabilitado.',
      },
    },
  },
};

// Con límite de caracteres
export const WithMaxLength: Story = {
  args: {
    value: 'Consulta con límite de caracteres',
    maxLength: 100,
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox con contador de caracteres.',
      },
    },
  },
};

// Sin archivos adjuntos
export const WithoutAttachments: Story = {
  args: {
    value: 'Consulta sin archivos adjuntos',
    showAttachments: false,
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox sin sección de archivos adjuntos.',
      },
    },
  },
};


// Con texto personalizado de botones
export const CustomButtonText: Story = {
  args: {
    value: 'Consulta con texto personalizado',
    submitButtonText: 'Enviar',
    cancelButtonText: 'Detener',
    onChange: () => {},
    onSubmit: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'QueryBox con texto personalizado en los botones.',
      },
    },
  },
};

// Comparación de tamaños
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', width: '100%' }}>
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Tamaño Small
        </h3>
        <QueryBox
          value="Consulta pequeña"
          size="small"
          onChange={() => {}}
          onSubmit={() => {}}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Tamaño Medium
        </h3>
        <QueryBox
          value="Consulta mediana"
          size="medium"
          onChange={() => {}}
          onSubmit={() => {}}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-3)', color: 'var(--color-gray-900)' }}>
          Tamaño Large
        </h3>
        <QueryBox
          value="Consulta grande con mucho contenido para probar el tamaño grande del componente"
          size="large"
          onChange={() => {}}
          onSubmit={() => {}}
        />
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


