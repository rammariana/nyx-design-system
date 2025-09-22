import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const UsageGuidelinesPage = () => (
  <div style={{ padding: '2rem', color: '#1f2937', backgroundColor: '#ffffff' }}>
    <h1 style={{ color: '#1f2937' }}>Guías de Uso</h1>
    <p style={{ color: '#6b7280' }}>
      Estas guías te ayudarán a implementar Nyx Design System de manera efectiva 
      en tus proyectos, siguiendo las mejores prácticas de diseño y desarrollo.
    </p>

    <h2 style={{ color: '#1f2937' }}>Principios de Diseño</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ 
        padding: '1.5rem', 
        border: '1px solid #374151', 
        borderRadius: '12px',
        background: '#ffffff'
      }}>
        <h3 style={{ color: '#6366f1' }}>Claridad</h3>
        <p style={{ color: '#6b7280' }}>Cada componente comunica su propósito de manera clara y directa. La interfaz debe ser intuitiva sin necesidad de explicaciones adicionales.</p>
      </div>
      <div style={{ 
        padding: '1.5rem', 
        border: '1px solid #374151', 
        borderRadius: '12px',
        background: '#ffffff'
      }}>
        <h3 style={{ color: '#8b5cf6' }}>Consistencia</h3>
        <p style={{ color: '#6b7280' }}>Mantén patrones visuales y de interacción consistentes en toda la aplicación para crear una experiencia unificada.</p>
      </div>
      <div style={{ 
        padding: '1.5rem', 
        border: '1px solid #374151', 
        borderRadius: '12px',
        background: '#ffffff'
      }}>
        <h3 style={{ color: '#10b981' }}>Accesibilidad</h3>
        <p style={{ color: '#6b7280' }}>Componentes con navegación por teclado, etiquetas ARIA básicas y soporte para lectores de pantalla. <strong>Nota:</strong> Algunos componentes necesitan mejoras adicionales para cumplir completamente con WCAG 2.1 AA.</p>
      </div>
      <div style={{ 
        padding: '1.5rem', 
        border: '1px solid #374151', 
        borderRadius: '12px',
        background: '#ffffff'
      }}>
        <h3 style={{ color: '#f59e0b' }}>Escalabilidad</h3>
        <p style={{ color: '#6b7280' }}>El sistema está diseñado para crecer con tu aplicación, manteniendo la calidad y consistencia a medida que evoluciona.</p>
      </div>
    </div>

    <h2 style={{ color: '#1f2937' }}>Arquitectura de Componentes</h2>
    <div style={{ margin: '2rem 0' }}>
      <h3 style={{ color: '#f9fafb' }}>Atoms (Átomos)</h3>
      <p style={{ color: '#6b7280' }}>Los elementos más básicos del sistema. No pueden dividirse más sin perder su funcionalidad.</p>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        margin: '1rem 0',
        padding: '1rem',
        background: '#ffffff',
        borderRadius: '8px',
        flexWrap: 'wrap',
        border: '1px solid #374151'
      }}>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#6366f1', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Button</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#6366f1', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Input</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#6366f1', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Avatar</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#6366f1', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Tag</span>
      </div>

      <h3 style={{ color: '#f9fafb' }}>Molecules (Moléculas)</h3>
      <p style={{ color: '#6b7280' }}>Combinaciones de átomos que forman unidades funcionales simples.</p>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        margin: '1rem 0',
        padding: '1rem',
        background: '#ffffff',
        borderRadius: '8px',
        flexWrap: 'wrap',
        border: '1px solid #374151'
      }}>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#8b5cf6', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Modal</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#8b5cf6', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Banner</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#8b5cf6', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Select</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#8b5cf6', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Tooltip</span>
      </div>

      <h3 style={{ color: '#f9fafb' }}>Organisms (Organismos)</h3>
      <p style={{ color: '#6b7280' }}>Combinaciones complejas de moléculas y átomos que forman secciones distintivas de la interfaz.</p>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        margin: '1rem 0',
        padding: '1rem',
        background: '#ffffff',
        borderRadius: '8px',
        flexWrap: 'wrap',
        border: '1px solid #374151'
      }}>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#10b981', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Sidebar</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#10b981', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>SidePanel</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#10b981', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>QueryBox</span>
        <span style={{ 
          padding: '0.5rem 1rem', 
          background: '#10b981', 
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: '#f9fafb'
        }}>Dropzone</span>
      </div>
    </div>

    <h2 style={{ color: '#1f2937' }}>Documentación Disponible</h2>
    <div style={{ 
      padding: '1.5rem', 
      border: '1px solid #374151', 
      borderRadius: '12px',
      background: '#ffffff',
      margin: '2rem 0'
    }}>
      <ul style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
        <li><strong style={{ color: '#1f2937' }}>Documentación completa:</strong> Cada componente tiene stories detallados con ejemplos prácticos</li>
        <li><strong style={{ color: '#1f2937' }}>Guías de implementación:</strong> Descripciones paso a paso de cómo usar cada componente</li>
        <li><strong style={{ color: '#1f2937' }}>Ejemplos interactivos:</strong> Stories que puedes probar directamente en Storybook</li>
        <li><strong style={{ color: '#1f2937' }}>Casos de uso reales:</strong> Ejemplos de integración entre componentes</li>
        <li><strong style={{ color: '#1f2937' }}>Documentación técnica:</strong> Tipos TypeScript, props, valores por defecto</li>
        <li><strong style={{ color: '#1f2937' }}>Navegación por teclado:</strong> Escape para cerrar modales, Tab para navegar</li>
        <li><strong style={{ color: '#1f2937' }}>Etiquetas ARIA básicas:</strong> aria-label en botones importantes</li>
      </ul>
    </div>

    <h2 style={{ color: '#1f2937' }}>Accesibilidad - Estado Actual</h2>
    <div style={{ 
      padding: '1.5rem', 
      border: '1px solid #374151', 
      borderRadius: '12px',
      background: '#ffffff',
      margin: '2rem 0'
    }}>
      <h3 style={{ color: '#1f2937' }}>Implementado</h3>
      <ul style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
        <li><strong style={{ color: '#gray' }}>Navegación por teclado:</strong> Tab, Enter, Space, Escape funcionan correctamente</li>
        <li><strong style={{ color: '#gray' }}>Etiquetas básicas:</strong> aria-label en botones de cierre y acciones importantes</li>
        <li><strong style={{ color: '#gray' }}>Roles semánticos:</strong> role="dialog" en SidePanel</li>
        <li><strong style={{ color: '#gray' }}>Estados visuales:</strong> Indicadores claros de disabled, loading, focus</li>
      </ul>
      
      <h3 style={{ color: '#1f2937', marginTop: '1.5rem' }}>Pendiente de implementar</h3>
      <ul style={{ paddingLeft: '1.5rem', color: '#6b7280' }}>
        <li><strong style={{ color: '#gray' }}>Focus trap:</strong> Modal necesita mantener el foco dentro del componente</li>
        <li><strong style={{ color: '#gray' }}>ARIA completo:</strong> aria-labelledby, aria-describedby en Modal</li>
        <li><strong style={{ color: '#gray' }}>Estados de expansión:</strong> aria-expanded en dropdowns y menús</li>
        <li><strong style={{ color: '#gray' }}>Anuncios de estado:</strong> aria-live para cambios dinámicos</li>
        <li><strong style={{ color: '#gray' }}>Contraste mejorado:</strong> Verificar ratios de contraste en todos los componentes</li>
      </ul>
    </div>

    <h2 style={{ color: '#1f2937' }}>Mejores Prácticas</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #374151', 
        borderRadius: '8px',
        background: '#ffffff'
      }}>
        <h4 style={{ color: '#10b981' }}>Haz esto</h4>
        <ul style={{ paddingLeft: '1rem', color: '#6b7280' }}>
          <li>Usa componentes existentes antes de crear nuevos</li>
          <li>Mantén consistencia en espaciado y colores</li>
          <li>Revisa la documentación en Storybook antes de implementar</li>
          <li>Prueba la navegación por teclado de tus implementaciones</li>
          <li>Usa las variables CSS del sistema de diseño</li>
        </ul>
      </div>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #374151', 
        borderRadius: '8px',
        background: '#ffffff'
      }}>
        <h4 style={{ color: '#ef4444' }}>Evita esto</h4>
        <ul style={{ paddingLeft: '1rem', color: '#6b7280' }}>
          <li>Modificar estilos directamente en componentes</li>
          <li>Crear variaciones sin documentar</li>
          <li>Ignorar estados de carga y error</li>
          <li>Usar colores hardcodeados</li>
          <li>Implementar sin revisar la documentación disponible</li>
        </ul>
      </div>
    </div>

    <h2 style={{ color: '#1f2937' }}>Responsive Design</h2>
    <p style={{ color: '#6b7280' }}>
      Todos los componentes están diseñados para funcionar en diferentes tamaños de pantalla. 
      Utiliza las clases de utilidad de Bootstrap y las variables CSS para adaptar el diseño a tus necesidades.
    </p>
  </div>
);

const meta: Meta<typeof UsageGuidelinesPage> = {
  title: 'Nyx Design System/Guías de Uso',
  component: UsageGuidelinesPage,
  parameters: {
    docs: {
      page: UsageGuidelinesPage,
    },
  },
};

export default meta;
type Story = StoryObj<typeof UsageGuidelinesPage>;

export const Guias: Story = {};