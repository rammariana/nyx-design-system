import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const DesignTokensPage = () => (
  <div style={{ padding: '2rem', color: '#1f2937', backgroundColor: '#ffffff', minHeight: '100vh' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#1f2937', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Tokens de Diseño NYX
      </h1>
      <p style={{ color: '#6b7280', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '3rem' }}>
        Los tokens de diseño son los elementos fundamentales que definen la identidad visual 
        de Nyx. Cada color, espaciado y tipografía está cuidadosamente seleccionado para 
        crear una experiencia coherente y elegante en todos los productos de Camtom.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
        {/* Texto descriptivo */}
        <div>
          <h2 style={{ color: '#1f2937', fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            ¿Qué contiene NYX?
          </h2>
          <div style={{ color: '#6b7280', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              NYX está construido sobre principios de diseño sólidos: <strong>claridad, coherencia, escalabilidad y accesibilidad</strong>. 
              Cada elemento está diseñado para funcionar en armonía con el resto del sistema.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Su base consiste en <strong>tokens de diseño</strong> que incluyen colores, tipografías, espaciados, 
              bordes y sombras, unificando la experiencia a través de todos los productos de Camtom.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              El sistema está estructurado usando <strong>variables CSS inteligentes</strong>, donde cada propiedad 
              visual está definida como una variable, permitiendo que los cambios se propaguen automáticamente.
            </p>
            <p>
              Los componentes siguen una <strong>arquitectura de diseño atómico</strong> (átomos, moléculas, organismos) 
              para facilitar la escalabilidad y evolución continua. NYX es un <strong>sistema vivo</strong> con 
              procesos claros de contribución y actualización.
            </p>
          </div>
        </div>

        {/* Paletas de colores */}
        <div>
          <h2 style={{ color: '#1f2937', fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Paleta de Colores
          </h2>
          
          {/* Brand Colors */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Brand</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#004a7c',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#4897cc',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem' }}>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#004a7c</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#4897cc</code>
            </div>
          </div>

          {/* Primary Colors */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Primary</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#1e3a8a',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#2563eb',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#3b82f6',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#60a5fa',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#1e3a8a</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#2563eb</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#3b82f6</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#60a5fa</code>
            </div>
          </div>

          {/* Secondary Colors */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Secondary</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#581c87',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#9333ea',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#a855f7',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#f3e8ff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#581c87</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#9333ea</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#a855f7</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#f3e8ff</code>
            </div>
          </div>

          {/* Neutral Colors */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Neutral</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#000000',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#333333',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#666666',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#8E8E8E',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#BDBDBD',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#F8F8F8',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb'
              }}></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#000000</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#333333</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#666666</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#8E8E8E</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#BDBDBD</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#F8F8F8</code>
            </div>
          </div>

          {/* Success Colors */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Success</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#14532d',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#16a34a',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#22c55e',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#dcfce7',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#14532d</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#16a34a</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#22c55e</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#dcfce7</code>
            </div>
          </div>

          {/* Error Colors */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Error</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#7f1d1d',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#dc2626',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#ef4444',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#fee2e2',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#7f1d1d</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#dc2626</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#ef4444</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#fee2e2</code>
            </div>
          </div>

          {/* Warning Colors */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Warning</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#78350f',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#d97706',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#f59e0b',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#fef3c7',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}></div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', flexWrap: 'wrap' }}>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#78350f</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#d97706</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#f59e0b</code>
              <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>#fef3c7</code>
            </div>
          </div>

          {/* Additional Colors */}
          <div>
            <h3 style={{ color: '#1f2937', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Additional Colors</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {/* Orange */}
              <div>
                <h4 style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '0.5rem' }}>Orange</h4>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#7c2d12',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#f97316',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#ffedd5',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                </div>
                <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937', fontSize: '0.75rem' }}>Orange</code>
              </div>

              {/* Purple */}
              <div>
                <h4 style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '0.5rem' }}>Purple</h4>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#581c87',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#a855f7',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#f3e8ff',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                </div>
                <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937', fontSize: '0.75rem' }}>Purple</code>
              </div>

              {/* Cyan */}
              <div>
                <h4 style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '0.5rem' }}>Cyan</h4>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#164e63',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#06b6d4',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#cffafe',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                </div>
                <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937', fontSize: '0.75rem' }}>Cyan</code>
              </div>

              {/* Magenta */}
              <div>
                <h4 style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '0.5rem' }}>Magenta</h4>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#701a75',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#d946ef',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#fae8ff',
                    borderRadius: '6px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}></div>
                </div>
                <code style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937', fontSize: '0.75rem' }}>Magenta</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sistema de Espaciado */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#1f2937', fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Sistema de Espaciado
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Sistema de espaciado basado en múltiplos de 4px para mantener consistencia visual 
          en todos los componentes del sistema NYX.
        </p>
        <div style={{ 
          background: '#f9fafb', 
          padding: '2rem', 
          borderRadius: '12px',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(size => (
              <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: `${size * 4}px`, 
                  height: '24px', 
                  background: 'linear-gradient(90deg, #2563eb, #3b82f6)',
                  borderRadius: '4px',
                  minWidth: '20px'
                }}></div>
                <div>
                  <div style={{ color: '#1f2937', fontWeight: '600', fontSize: '0.875rem' }}>
                    --spacing-{size}
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>
                    {size * 4}px
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tipografía */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#1f2937', fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Tipografía
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Sistema tipográfico diseñado para máxima legibilidad y jerarquía visual clara.
        </p>
        <div style={{ 
          background: '#f9fafb', 
          padding: '2rem', 
          borderRadius: '12px',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#1f2937' }}>
                Heading 1
              </h1>
              <code style={{ background: '#f9fafb', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>
                --text-4xl: 2.5rem
              </code>
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#1f2937' }}>
                Heading 2
              </h2>
              <code style={{ background: '#f9fafb', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>
                --text-3xl: 2rem
              </code>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#1f2937' }}>
                Heading 3
              </h3>
              <code style={{ background: '#f9fafb', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>
                --text-2xl: 1.5rem
              </code>
            </div>
            <div>
              <p style={{ fontSize: '1rem', margin: '0 0 0.5rem 0', color: '#6b7280' }}>
                Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <code style={{ background: '#fffff', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>
                --text-base: 1rem
              </code>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', margin: '0 0 0.5rem 0', color: '#6b7280' }}>
                Small text - Para información secundaria y etiquetas
              </p>
              <code style={{ background: '#f9fafb', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#1f2937' }}>
                --text-sm: 0.875rem
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Bordes y Sombras */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#1f2937', fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Bordes y Sombras
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Sistema de radios de borde y sombras para crear profundidad y jerarquía visual.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '6px',
            textAlign: 'center',
            background: '#ffffff'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              borderRadius: '6px',
              margin: '0 auto 1rem'
            }}></div>
            <h4 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>Small</h4>
            <code style={{ color: '#1f2937', fontSize: '0.875rem' }}>--radius-small: 6px</code>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '10px',
            textAlign: 'center',
            background: '#ffffff'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              borderRadius: '10px',
              margin: '0 auto 1rem'
            }}></div>
            <h4 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>Medium</h4>
            <code style={{ color: '#1f2937', fontSize: '0.875rem' }}>--radius-medium: 10px</code>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '20px',
            textAlign: 'center',
            background: '#ffffff'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              borderRadius: '20px',
              margin: '0 auto 1rem'
            }}></div>
            <h4 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>Large</h4>
            <code style={{ color: '#1f2937', fontSize: '0.875rem' }}>--radius-large: 20px</code>
          </div>
        </div>
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