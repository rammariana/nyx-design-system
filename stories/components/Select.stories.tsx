import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../src/components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Componente Select para seleccionar opciones de una lista desplegable.

## Características

- **Opciones**: Array de objetos con value, label y disabled
- **Variantes**: default, subtle, pill, compact
- **Tamaños**: small, medium (por defecto), large
- **Estados**: normal, error, disabled
- **Accesibilidad**: Soporte completo para teclado y lectores de pantalla
- **Icono**: Icono personalizable o flecha por defecto

## Variantes

- **default**: Estilo estándar con borde y fondo blanco
- **subtle**: Sin borde, fondo transparente, ideal para navegación
- **pill**: Estilo redondeado con colores primarios
- **compact**: Versión más pequeña y compacta

## Tamaños

- **small**: Padding reducido, texto pequeño
- **medium**: Tamaño estándar (por defecto)
- **large**: Padding aumentado, texto grande

## Accesibilidad

- **Teclado**: Tab para navegar, flechas para seleccionar
- **Lectores de pantalla**: Etiquetas y opciones anunciadas
- **Focus**: Indicadores visuales claros de foco
- **Estados**: Opciones deshabilitadas correctamente marcadas
        `,
      },
    },
  },
  argTypes: {
    // Props requeridas
    options: {
      control: { type: 'object' },
      description: 'Array de opciones disponibles para seleccionar',
      table: {
        type: { summary: 'SelectOption[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props opcionales
    label: {
      control: { type: 'text' },
      description: 'Etiqueta del select que aparece arriba del campo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'subtle', 'pill', 'compact'],
      description: 'Variante visual del select',
      table: {
        type: { summary: "'default' | 'subtle' | 'pill' | 'compact'" },
        defaultValue: { summary: "'default'" },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del select',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Estado de error que cambia el color del borde y texto de ayuda',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto de ayuda que aparece debajo del select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Texto placeholder que aparece como primera opción deshabilitada',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    icon: {
      control: false,
      description: 'Icono personalizado que reemplaza la flecha por defecto',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales para el wrapper del select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Si el select debe ocupar todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado del select',
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

const defaultOptions = [
  { value: 'option1', label: 'Opción 1' },
  { value: 'option2', label: 'Opción 2' },
  { value: 'option3', label: 'Opción 3' },
  { value: 'option4', label: 'Opción 4' },
];

const countryOptions = [
  { value: 'mx', label: 'México' },
  { value: 'us', label: 'Estados Unidos' },
  { value: 'ca', label: 'Canadá' },
  { value: 'es', label: 'España' },
  { value: 'fr', label: 'Francia' },
  { value: 'de', label: 'Alemania' },
];

const statusOptions = [
  { value: 'active', label: 'Activo' },
  { value: 'inactive', label: 'Inactivo' },
  { value: 'pending', label: 'Pendiente', disabled: true },
  { value: 'suspended', label: 'Suspendido' },
];

// Por defecto
export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select básico con configuración por defecto.',
      },
    },
  },
};

// Con etiqueta
export const WithLabel: Story = {
  args: {
    options: defaultOptions,
    label: 'Selecciona una opción',
    placeholder: 'Elige una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con etiqueta descriptiva.',
      },
    },
  },
};

// Variantes
export const DefaultVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Variante Default',
    variant: 'default',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante por defecto con borde y fondo blanco.',
      },
    },
  },
};

export const PillVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Variante Pill',
    variant: 'pill',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante pill con bordes redondeados y colores primarios.',
      },
    },
  },
};

export const SubtleVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Variante Subtle',
    variant: 'subtle',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante subtle sin borde, ideal para navegación.',
      },
    },
  },
};

export const CompactVariant: Story = {
  args: {
    options: defaultOptions,
    label: 'Variante Compact',
    variant: 'compact',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante compacta con altura reducida.',
      },
    },
  },
};

// Tamaños
export const Small: Story = {
  args: {
    options: defaultOptions,
    label: 'Tamaño Pequeño',
    size: 'small',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select de tamaño pequeño.',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    options: defaultOptions,
    label: 'Tamaño Mediano',
    size: 'medium',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select de tamaño mediano (por defecto).',
      },
    },
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    label: 'Tamaño Grande',
    size: 'large',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select de tamaño grande.',
      },
    },
  },
};

// Estados
export const WithHelperText: Story = {
  args: {
    options: defaultOptions,
    label: 'Con texto de ayuda',
    helperText: 'Este texto te ayuda a entender qué seleccionar',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con texto de ayuda descriptivo.',
      },
    },
  },
};

export const WithError: Story = {
  args: {
    options: defaultOptions,
    label: 'Con error',
    error: true,
    helperText: 'Este campo es requerido',
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select en estado de error con borde rojo y texto de error.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    label: 'Deshabilitado',
    disabled: true,
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select deshabilitado con estilo gris.',
      },
    },
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: statusOptions,
    label: 'Con opciones deshabilitadas',
    placeholder: 'Selecciona un estado',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select con algunas opciones deshabilitadas.',
      },
    },
  },
};

// Casos de uso realistas
export const CountrySelect: Story = {
  args: {
    options: countryOptions,
    label: 'País',
    placeholder: 'Selecciona tu país',
    helperText: 'Selecciona el país donde resides',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo realista de selección de país.',
      },
    },
  },
};

export const NotFullWidth: Story = {
  args: {
    options: defaultOptions,
    label: 'Sin ancho completo',
    fullWidth: false,
    placeholder: 'Selecciona una opción',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select que no ocupa todo el ancho disponible.',
      },
    },
  },
};

// Comparaciones
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', width: '100%' }}>
      <Select
        options={defaultOptions}
        label="Default"
        variant="default"
        placeholder="Selecciona una opción"
      />
      <Select
        options={defaultOptions}
        label="Pill"
        variant="pill"
        placeholder="Selecciona una opción"
      />
      <Select
        options={defaultOptions}
        label="Subtle"
        variant="subtle"
        placeholder="Selecciona una opción"
      />
      <Select
        options={defaultOptions}
        label="Compact"
        variant="compact"
        placeholder="Selecciona una opción"
      />
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

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: '100%' }}>
      <Select
        options={defaultOptions}
        label="Small"
        size="small"
        placeholder="Selecciona una opción"
      />
      <Select
        options={defaultOptions}
        label="Medium"
        size="medium"
        placeholder="Selecciona una opción"
      />
      <Select
        options={defaultOptions}
        label="Large"
        size="large"
        placeholder="Selecciona una opción"
      />
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

// Ejemplo interactivo
export const InteractiveExample: Story = {
  render: () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', width: '100%' }}>
        <Select
          options={countryOptions}
          label="País de residencia"
          placeholder="Selecciona tu país"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          helperText="Selecciona el país donde resides actualmente"
        />
        
        <Select
          options={statusOptions}
          label="Estado del usuario"
          variant="pill"
          placeholder="Selecciona un estado"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          helperText="Define el estado actual del usuario"
        />
        
        <div style={{ 
          padding: 'var(--spacing-4)', 
          backgroundColor: 'var(--color-gray-50)', 
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-gray-200)'
        }}>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
            Valores seleccionados:
          </h4>
          <p style={{ margin: 0, color: 'var(--color-gray-700)' }}>
            <strong>País:</strong> {selectedCountry || 'Ninguno'}
          </p>
          <p style={{ margin: 0, color: 'var(--color-gray-700)' }}>
            <strong>Estado:</strong> {selectedStatus || 'Ninguno'}
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra cómo manejar el estado de los selects.',
      },
    },
  },
};

// Formulario completo
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: '',
      status: '',
      priority: '',
    });
    
    const priorityOptions = [
      { value: 'low', label: 'Baja' },
      { value: 'medium', label: 'Media' },
      { value: 'high', label: 'Alta' },
      { value: 'urgent', label: 'Urgente' },
    ];
    
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };
    
    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', width: '100%' }}>
        <Select
          options={countryOptions}
          label="País"
          placeholder="Selecciona tu país"
          value={formData.country}
          onChange={handleChange('country')}
          required
        />
        
        <Select
          options={statusOptions}
          label="Estado"
          variant="pill"
          placeholder="Selecciona un estado"
          value={formData.status}
          onChange={handleChange('status')}
          helperText="Selecciona el estado actual"
        />
        
        <Select
          options={priorityOptions}
          label="Prioridad"
          variant="compact"
          placeholder="Selecciona la prioridad"
          value={formData.priority}
          onChange={handleChange('priority')}
          helperText="Define el nivel de prioridad"
        />
        
        <div style={{ 
          padding: 'var(--spacing-4)', 
          backgroundColor: 'var(--color-blue-50)', 
          borderRadius: 'var(--radius-md)', 
          border: '1px solid var(--color-blue-200)' 
        }}>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
            Datos del formulario:
          </h4>
          <pre style={{ 
            margin: 0, 
            fontSize: 'var(--text-sm)', 
            color: 'var(--color-gray-700)',
            backgroundColor: 'var(--color-white)',
            padding: 'var(--spacing-2)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-gray-200)'
          }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </form>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ejemplo de formulario completo con múltiples selects usando diferentes variantes.',
      },
    },
  },
};

// Casos de uso realistas del negocio
export const RealisticUseCases: Story = {
  render: () => {
    const [userData, setUserData] = useState({
      department: '',
      role: '',
      experience: '',
      location: '',
    });
    
    const departmentOptions = [
      { value: 'engineering', label: 'Ingeniería' },
      { value: 'design', label: 'Diseño' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Ventas' },
      { value: 'hr', label: 'Recursos Humanos' },
    ];
    
    const roleOptions = [
      { value: 'junior', label: 'Junior' },
      { value: 'mid', label: 'Mid-level' },
      { value: 'senior', label: 'Senior' },
      { value: 'lead', label: 'Lead' },
      { value: 'manager', label: 'Manager' },
    ];
    
    const experienceOptions = [
      { value: '0-1', label: '0-1 años' },
      { value: '2-3', label: '2-3 años' },
      { value: '4-5', label: '4-5 años' },
      { value: '6-10', label: '6-10 años' },
      { value: '10+', label: 'Más de 10 años' },
    ];
    
    const locationOptions = [
      { value: 'remote', label: 'Remoto' },
      { value: 'hybrid', label: 'Híbrido' },
      { value: 'office', label: 'Oficina' },
    ];
    
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setUserData(prev => ({ ...prev, [field]: e.target.value }));
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', width: '100%' }}>
        <div style={{ 
          padding: 'var(--spacing-4)', 
          backgroundColor: 'var(--color-gray-50)', 
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-gray-200)'
        }}>
          <h3 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
            Formulario de Perfil de Usuario
          </h3>
          <p style={{ margin: 0, color: 'var(--color-gray-600)' }}>
            Ejemplo de formulario realista para crear un perfil de usuario
          </p>
        </div>
        
        <Select
          options={departmentOptions}
          label="Departamento"
          placeholder="Selecciona tu departamento"
          value={userData.department}
          onChange={handleChange('department')}
          helperText="Selecciona el departamento al que perteneces"
        />
        
        <Select
          options={roleOptions}
          label="Nivel de Rol"
          variant="pill"
          placeholder="Selecciona tu nivel"
          value={userData.role}
          onChange={handleChange('role')}
          helperText="Define tu nivel de experiencia en el rol"
        />
        
        <Select
          options={experienceOptions}
          label="Años de Experiencia"
          variant="compact"
          placeholder="Selecciona tu experiencia"
          value={userData.experience}
          onChange={handleChange('experience')}
          helperText="Indica tus años de experiencia profesional"
        />
        
        <Select
          options={locationOptions}
          label="Modalidad de Trabajo"
          variant="subtle"
          placeholder="Selecciona tu modalidad"
          value={userData.location}
          onChange={handleChange('location')}
          helperText="Define tu preferencia de modalidad de trabajo"
        />
        
        <div style={{ 
          padding: 'var(--spacing-4)', 
          backgroundColor: 'var(--color-green-50)', 
          borderRadius: 'var(--radius-md)', 
          border: '1px solid var(--color-green-200)' 
        }}>
          <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
            Perfil Completo:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
            <p style={{ margin: 0, color: 'var(--color-gray-700)' }}>
              <strong>Departamento:</strong> {userData.department || 'No seleccionado'}
            </p>
            <p style={{ margin: 0, color: 'var(--color-gray-700)' }}>
              <strong>Rol:</strong> {userData.role || 'No seleccionado'}
            </p>
            <p style={{ margin: 0, color: 'var(--color-gray-700)' }}>
              <strong>Experiencia:</strong> {userData.experience || 'No seleccionado'}
            </p>
            <p style={{ margin: 0, color: 'var(--color-gray-700)' }}>
              <strong>Modalidad:</strong> {userData.location || 'No seleccionado'}
            </p>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Casos de uso realistas del negocio con diferentes variantes de Select.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', width: '100%' }}>
      <Select
        {...args}
        options={defaultOptions}
        label="Ejemplo de Accesibilidad"
        placeholder="Selecciona una opción"
        helperText="Este select demuestra las características de accesibilidad"
      />
      
      <div style={{ 
        padding: 'var(--spacing-4)', 
        backgroundColor: 'var(--color-gray-50)', 
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-sm)'
      }}>
        <h4 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-gray-900)' }}>
          Características de Accesibilidad
        </h4>
        <ul style={{ margin: 0, paddingLeft: 'var(--spacing-4)', color: 'var(--color-gray-700)' }}>
          <li><strong>Teclado:</strong> Tab para navegar, flechas para seleccionar opciones</li>
          <li><strong>Lectores de pantalla:</strong> Etiquetas y opciones anunciadas correctamente</li>
          <li><strong>Focus:</strong> Indicadores visuales claros de foco</li>
          <li><strong>Estados:</strong> Opciones deshabilitadas marcadas apropiadamente</li>
          <li><strong>Etiquetas:</strong> Asociación correcta entre label y select</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que demuestra las características de accesibilidad del Select.',
      },
    },
  },
};
