import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const DesignTokensPage = () => (
  <div style={{ padding: '2rem', color: '#f9fafb' }}>
    <h1 style={{ color: '#f9fafb' }}>Tokens de Diseño</h1>
    <p style={{ color: '#d1d5db' }}>
      Los tokens de diseño son los elementos fundamentales que definen la identidad visual 
      de Nyx. Cada color, espaciado y tipografía está cuidadosamente seleccionado para 
      crear una experiencia coherente y elegante.
    </p>

    <h2 style={{ color: '#f9fafb' }}>Paleta de Colores</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: '#6366f1', 
          borderRadius: '12px',
          margin: '0 auto 0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}></div>
        <h3 style={{ color: '#6366f1', margin: '0.5rem 0' }}>Primary</h3>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>#6366f1</code>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: '#8b5cf6', 
          borderRadius: '12px',
          margin: '0 auto 0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}></div>
        <h3 style={{ color: '#8b5cf6', margin: '0.5rem 0' }}>Secondary</h3>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>#8b5cf6</code>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: '#10b981', 
          borderRadius: '12px',
          margin: '0 auto 0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}></div>
        <h3 style={{ color: '#10b981', margin: '0.5rem 0' }}>Success</h3>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>#10b981</code>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: '#f59e0b', 
          borderRadius: '12px',
          margin: '0 auto 0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}></div>
        <h3 style={{ color: '#f59e0b', margin: '0.5rem 0' }}>Warning</h3>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>#f59e0b</code>
      </div>
    </div>

    <h2 style={{ color: '#f9fafb' }}>Sistema de Espaciado</h2>
    <p style={{ color: '#d1d5db' }}>
      Sistema de espaciado basado en múltiplos de 4px para mantener consistencia visual.
    </p>
    <div style={{ margin: '2rem 0' }}>
      {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24].map(size => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
          <div style={{ 
            width: `${size * 4}px`, 
            height: '24px', 
            background: '#6366f1',
            marginRight: '1rem',
            borderRadius: '4px'
          }}></div>
          <span style={{ fontFamily: 'monospace', color: '#d1d5db' }}>--spacing-{size}: {size * 4}px</span>
        </div>
      ))}
    </div>

    <h2 style={{ color: '#f9fafb' }}>Tipografía</h2>
    <div style={{ margin: '2rem 0' }}>
      <div style={{ margin: '1rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#f9fafb' }}>Heading 1</h1>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>font-size: 2.5rem</code>
      </div>
      <div style={{ margin: '1rem 0' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#f9fafb' }}>Heading 2</h2>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>font-size: 2rem</code>
      </div>
      <div style={{ margin: '1rem 0' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#f9fafb' }}>Heading 3</h3>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>font-size: 1.5rem</code>
      </div>
      <div style={{ margin: '1rem 0' }}>
        <p style={{ fontSize: '1rem', margin: '0.5rem 0', color: '#d1d5db' }}>Body text - Lorem ipsum dolor sit amet</p>
        <code style={{ background: '#1f2937', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#f9fafb' }}>font-size: 1rem</code>
      </div>
    </div>

    <h2 style={{ color: '#f9fafb' }}>Bordes y Sombras</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #374151', 
        borderRadius: '4px',
        textAlign: 'center',
        background: '#1f2937'
      }}>
        <h4 style={{ color: '#f9fafb' }}>Small</h4>
        <code style={{ color: '#d1d5db' }}>--radius-sm: 4px</code>
      </div>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #374151', 
        borderRadius: '8px',
        textAlign: 'center',
        background: '#1f2937'
      }}>
        <h4 style={{ color: '#f9fafb' }}>Medium</h4>
        <code style={{ color: '#d1d5db' }}>--radius-md: 8px</code>
      </div>
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #374151', 
        borderRadius: '12px',
        textAlign: 'center',
        background: '#1f2937'
      }}>
        <h4 style={{ color: '#f9fafb' }}>Large</h4>
        <code style={{ color: '#d1d5db' }}>--radius-lg: 12px</code>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof DesignTokensPage> = {
  title: 'Nyx Design System/Tokens de Diseño',
  component: DesignTokensPage,
  parameters: {
    docs: {
      page: DesignTokensPage,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DesignTokensPage>;

export const Tokens: Story = {};
