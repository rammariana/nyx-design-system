import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../../src/components/sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Componente Sidebar para navegación lateral con funcionalidades avanzadas.

## Características

- **Estados**: Abierto/cerrado con transiciones suaves
- **Responsive**: Comportamiento diferente en móviles y desktop
- **Control de Acceso**: Restricciones basadas en organización
- **Logos**: Soporte para logos expandido y colapsado
- **Badges**: Indicadores en elementos del menú
- **Footer**: Contenido personalizable y "Powered by"
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## Estados

- **Abierto**: Muestra texto completo y logos expandidos
- **Cerrado**: Solo iconos y logos colapsados
- **Móvil**: Overlay y botón hamburguesa

## Control de Acceso

- **Restricciones**: Elementos con acceso limitado por organización
- **Tooltips**: Información sobre restricciones
- **Badges**: Indicadores visuales de estado

## Responsive

- **Desktop**: Sidebar fijo con toggle
- **Móvil**: Overlay con botón hamburguesa flotante
- **Transiciones**: Animaciones suaves entre estados

## Accesibilidad

- **Teclado**: Tab para navegar, Enter para activar
- **Lectores de pantalla**: Etiquetas y estados anunciados
- **Focus**: Indicadores visuales claros de foco
- **ARIA**: Roles y propiedades apropiadas
        `,
      },
    },
  },
  argTypes: {
    // Props de control
    isOpen: {
      control: 'boolean',
      description: 'Estado de apertura del sidebar (controlado)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onToggle: {
      action: 'toggle',
      description: 'Callback que se ejecuta al cambiar el estado del sidebar',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props de logo
    logoExpanded: {
      control: 'text',
      description: 'URL del logo cuando está expandido',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    logoCollapsed: {
      control: 'text',
      description: 'URL del logo cuando está colapsado',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    logoAlt: {
      control: 'text',
      description: 'Texto alternativo para el logo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Logo"' },
      },
    },
    onLogoClick: {
      action: 'logoClick',
      description: 'Callback que se ejecuta al hacer clic en el logo',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props de menú
    menuItems: {
      control: 'object',
      description: 'Array de elementos del menú',
      table: {
        type: { summary: 'SidebarMenuItem[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onItemClick: {
      action: 'itemClick',
      description: 'Callback que se ejecuta al hacer clic en un elemento del menú',
      table: {
        type: { summary: '(itemId: string) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props de configuración
    countryCode: {
      control: 'select',
      options: ['MEX', 'USA', 'CAN'],
      description: 'Código del país para mostrar elementos específicos',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    organizationId: {
      control: 'text',
      description: 'ID de la organización del usuario',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    allowedOrganizationIds: {
      control: 'object',
      description: 'Array de IDs de organizaciones permitidas',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props de footer
    footerContent: {
      control: false,
      description: 'Contenido personalizado para el footer del sidebar',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showPoweredBy: {
      control: 'boolean',
      description: 'Mostrar "Powered by" en el footer',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    poweredByLogo: {
      control: 'text',
      description: 'URL del logo para mostrar en "Powered by"',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // Props de estilo
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el sidebar',
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

// Items de menú de ejemplo
const exampleMenuItems = [
  {
    id: 'home',
    label: 'Lorem ipsum',
    icon: 'bi bi-columns-gap',
    href: '/lorem',
    isActive: true,
  },
  {
    id: 'about',
    label: 'Lorem ipsum',
    icon: 'bi bi-info-circle',
    href: '/lorem',
    isActive: false,
  },
  {
    id: 'contact',
    label: 'Lorem ipsum',
    icon: 'bi bi-envelope',
    href: '/lorem',
    isActive: false,
  },
  {
    id: 'shop',
    label: 'Lorem ipsum',
    icon: 'bi bi-shop',
    href: '/lorem',
    isActive: false,
  },
];

// Items con badges y restricciones
const advancedMenuItems = [
  {
    id: 'home',
    label: 'Lorem ipsum',
    icon: 'bi bi-house',
    href: '/lorem',
    isActive: true,
    badge: {
      text: 'NEW',
      color: '#ffffff',
      backgroundColor: '#28a745',
    },
  },
  {
    id: 'features',
    label: 'Lorem ipsum',
    icon: 'bi bi-star',
    href: '/lorem',
    isActive: false,
    badge: {
      text: 'PRO',
      color: '#ffffff',
      backgroundColor: '#007bff',
    },
  },
  {
    id: 'restricted',
    label: 'Lorem ipsum',
    icon: 'bi bi-lock',
    href: '/lorem',
    isActive: false,
    isRestricted: true,
    restrictionTooltip: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'settings',
    label: 'Lorem ipsum',
    icon: 'bi bi-gear',
    href: '/lorem',
    isActive: false,
  },
];

// Por defecto - ABIERTO
export const Default: Story = {
  args: {
    menuItems: exampleMenuItems,
    logoExpanded: 'https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/Group%205.png?alt=media&token=66714127-4cca-417b-b934-9c1364edb0c6',
    logoCollapsed: 'https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/camtom-single-dark.svg?alt=media&token=a267fa38-fb06-4684-a429-97c8ccc91066',
    logoAlt: 'Company Logo',
    countryCode: 'MEX',
    organizationId: 'org-123',
    allowedOrganizationIds: ['org-123', 'org-456'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar en estado ABIERTO mostrando texto completo y logo expandido.',
      },
    },
  },
};

// CERRADO - Solo iconos
export const Closed: Story = {
  args: {
    menuItems: exampleMenuItems,
    logoExpanded: 'https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/Group%205.png?alt=media&token=66714127-4cca-417b-b934-9c1364edb0c6',
    logoCollapsed: 'https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/camtom-single-dark.svg?alt=media&token=a267fa38-fb06-4684-a429-97c8ccc91066',
    logoAlt: 'Company Logo',
    countryCode: 'MEX',
    organizationId: 'org-123',
    allowedOrganizationIds: ['org-123', 'org-456'],
    isOpen: false, // Estado explícitamente cerrado
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar en estado CERRADO mostrando solo iconos y logo colapsado. El texto de los elementos del menú se oculta automáticamente cuando isOpen es false.',
      },
    },
  },
};

// Sin restricciones
export const WithoutRestrictions: Story = {
  args: {
    ...Default.args,
    menuItems: exampleMenuItems.map(item => ({
      ...item,
      isRestricted: false,
    })),
    allowedOrganizationIds: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar sin restricciones de acceso.',
      },
    },
  },
};

// Con badges y restricciones
export const WithBadgesAndRestrictions: Story = {
  args: {
    ...Default.args,
    menuItems: advancedMenuItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar con badges y elementos restringidos.',
      },
    },
  },
};

// País diferente
export const DifferentCountry: Story = {
  args: {
    ...Default.args,
    countryCode: 'USA',
    menuItems: exampleMenuItems.filter(item => 
      !['pedimento', 'digiter', 'extractor', 'simulations'].includes(item.id)
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar con elementos específicos para otro país.',
      },
    },
  },
};

// Con handlers personalizados
export const WithCustomHandlers: Story = {
  args: {
    ...Default.args,
    menuItems: exampleMenuItems.map(item => ({
      ...item,
      href: undefined,
      onClick: () => console.log(`Lorem ipsum: ${item.label}`),
    })),
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar con handlers personalizados en lugar de enlaces.',
      },
    },
  },
};

// Menú mínimo
export const MinimalMenu: Story = {
  args: {
    menuItems: [
      {
        id: 'home',
        label: 'Lorem ipsum',
        icon: 'bi bi-house',
        href: '/lorem',
        isActive: true,
      },
      {
        id: 'about',
        label: 'Lorem ipsum',
        icon: 'bi bi-info-circle',
        href: '/lorem',
      },
      {
        id: 'contact',
        label: 'Lorem ipsum',
        icon: 'bi bi-envelope',
        href: '/lorem',
      },
    ],
    logoExpanded: 'https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/Group%205.png?alt=media&token=66714127-4cca-417b-b934-9c1364edb0c6',
    logoCollapsed: 'https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/camtom-single-dark.svg?alt=media&token=a267fa38-fb06-4684-a429-97c8ccc91066',
    logoAlt: 'Lorem Logo',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar con menú mínimo y logos simples.',
      },
    },
  },
};

// Con footer personalizado
export const WithCustomFooter: Story = {
  args: {
    ...Default.args,
    footerContent: (
      <div style={{ 
        padding: 'var(--spacing-4)', 
        backgroundColor: 'var(--color-gray-50)', 
        borderRadius: 'var(--radius-md)',
        marginBottom: 'var(--spacing-2)'
      }}>
        <h4 style={{ 
          marginBottom: 'var(--spacing-2)', 
          fontSize: 'var(--text-sm)', 
          color: 'var(--color-gray-700)' 
        }}>
          Lorem ipsum
        </h4>
        <p style={{ 
          margin: 0, 
          fontSize: 'var(--text-xs)', 
          color: 'var(--color-gray-600)' 
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    ),
    showPoweredBy: true,
    poweredByLogo: 'https://via.placeholder.com/80x20/004a7c/ffffff?text=LOREM',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar con footer personalizado y "Powered by".',
      },
    },
  },
};

// Solo powered by
export const WithPoweredBy: Story = {
  args: {
    ...Default.args,
    showPoweredBy: true,
    poweredByLogo: 'https://via.placeholder.com/80x20/004a7c/ffffff?text=LOREM',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar mostrando solo "Powered by" en el footer.',
      },
    },
  },
};

// Casos de uso realistas
export const RealisticUseCases: Story = {
  args: {
    menuItems: [
      {
        id: 'dashboard',
        label: 'Lorem ipsum',
        icon: 'bi bi-speedometer2',
        href: '/lorem',
        isActive: true,
        badge: {
          text: 'NEW',
          color: '#ffffff',
          backgroundColor: '#28a745',
        },
      },
      {
        id: 'analytics',
        label: 'Lorem ipsum',
        icon: 'bi bi-graph-up',
        href: '/lorem',
        isActive: false,
      },
      {
        id: 'reports',
        label: 'Lorem ipsum',
        icon: 'bi bi-file-earmark-text',
        href: '/lorem',
        isActive: false,
        isRestricted: true,
        restrictionTooltip: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 'settings',
        label: 'Lorem ipsum',
        icon: 'bi bi-gear',
        href: '/lorem',
        isActive: false,
      },
      {
        id: 'help',
        label: 'Lorem ipsum',
        icon: 'bi bi-question-circle',
        href: '/lorem',
        isActive: false,
      },
    ],
    logoExpanded: 'https://via.placeholder.com/200x40/004a7c/ffffff?text=LOREM+IPSUM',
    logoCollapsed: 'https://via.placeholder.com/40x40/004a7c/ffffff?text=L',
    logoAlt: 'Lorem Logo',
    countryCode: 'MEX',
    organizationId: 'org-123',
    allowedOrganizationIds: ['org-123'],
    showPoweredBy: true,
    poweredByLogo: 'https://via.placeholder.com/80x20/004a7c/ffffff?text=LOREM',
  },
  parameters: {
    docs: {
      description: {
        story: 'Casos de uso realistas con diferentes tipos de elementos del menú.',
      },
    },
  },
};

// Accesibilidad
export const AccessibilityExample: Story = {
  args: {
    ...Default.args,
    menuItems: exampleMenuItems.map((item, index) => ({
      ...item,
      isActive: index === 0,
    })),
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar que demuestra características de accesibilidad.',
      },
    },
  },
};
