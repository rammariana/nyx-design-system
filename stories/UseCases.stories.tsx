import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';
import { Input } from '../src/components/Input';
import { Modal } from '../src/components/Modal';
import { TagComponent } from '../src/components/TagComponent';
import { Sidebar } from '../src/components/sidebar/Sidebar';
import React, { useState } from 'react';

const UseCasesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div style={{ padding: '2rem', color: '#f9fafb' }}>
      <h1 style={{ color: '#f9fafb' }}>Casos de Uso Reales</h1>
      <p style={{ color: '#d1d5db' }}>
        Ejemplos prácticos de cómo implementar Nyx Design System en aplicaciones reales, 
        mostrando la versatilidad y potencia del sistema.
      </p>

      <h2 style={{ color: '#f9fafb' }}>Dashboard Empresarial</h2>
      <div style={{ 
        border: '1px solid #374151', 
        borderRadius: '12px',
        padding: '2rem',
        margin: '2rem 0',
        background: '#1f2937'
      }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 250px' }}>
            <h4 style={{ color: '#f9fafb' }}>Navegación Principal</h4>
            <div style={{ 
              border: '1px solid #4b5563', 
              borderRadius: '8px',
              padding: '1rem',
              background: '#111827'
            }}>
              <Sidebar
                isOpen={true}
                logoExpanded="https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/Group%205.png?alt=media&token=66714127-4cca-417b-b934-9c1364edb0c6"
                logoCollapsed="https://firebasestorage.googleapis.com/v0/b/auth-camtom.appspot.com/o/Group%205.png?alt=media&token=66714127-4cca-417b-b934-9c1364edb0c6"
                menuItems={[
                  { id: 'dashboard', label: 'Dashboard', icon: 'bi-house', href: '/dashboard' },
                  { id: 'users', label: 'Usuarios', icon: 'bi-people', href: '/users' },
                  { id: 'reports', label: 'Reportes', icon: 'bi-graph-up', href: '/reports' },
                  { id: 'settings', label: 'Configuración', icon: 'bi-gear', href: '/settings' }
                ]}
                footerContent="Empresa v1.0"
              />
            </div>
          </div>
          
          <div style={{ flex: '1' }}>
            <h4 style={{ color: '#f9fafb' }}>Contenido Principal</h4>
            <div style={{ 
              border: '1px solid #4b5563', 
              borderRadius: '8px',
              padding: '1.5rem',
              background: '#111827'
            }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <TagComponent variant="success">Activo</TagComponent>
                <TagComponent variant="info">Nuevo</TagComponent>
                <TagComponent variant="warning">Pendiente</TagComponent>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <Input placeholder="Buscar usuarios..." style={{ flex: '1' }} />
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Agregar Usuario
                </Button>
              </div>
              
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                Dashboard empresarial con navegación lateral, búsqueda y acciones rápidas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ color: '#f9fafb' }}>Aplicación Móvil</h2>
      <div style={{ 
        border: '1px solid #374151', 
        borderRadius: '12px',
        padding: '2rem',
        margin: '2rem 0',
        background: '#1f2937'
      }}>
        <div style={{ 
          maxWidth: '375px', 
          margin: '0 auto',
          border: '1px solid #4b5563',
          borderRadius: '20px',
          padding: '1rem',
          background: '#111827'
        }}>
          <h4 style={{ textAlign: 'center', marginBottom: '1rem', color: '#f9fafb' }}>App Móvil</h4>
          
          <div style={{ marginBottom: '1rem' }}>
            <Input placeholder="¿Qué necesitas?" />
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <TagComponent variant="primary" size="small">Servicio</TagComponent>
            <TagComponent variant="secondary" size="small">Producto</TagComponent>
            <TagComponent variant="outline" size="small">Soporte</TagComponent>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="primary" style={{ flex: '1' }}>Buscar</Button>
            <Button variant="outline" style={{ flex: '1' }}>Filtros</Button>
          </div>
          
          <p style={{ color: '#9ca3af', fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem' }}>
            Interfaz optimizada para dispositivos móviles
          </p>
        </div>
      </div>

      <h2 style={{ color: '#f9fafb' }}>E-commerce</h2>
      <div style={{ 
        border: '1px solid #374151', 
        borderRadius: '12px',
        padding: '2rem',
        margin: '2rem 0',
        background: '#1f2937'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#f9fafb' }}>Producto</h4>
            <div style={{ 
              border: '1px solid #4b5563', 
              borderRadius: '8px',
              padding: '1rem',
              background: '#111827'
            }}>
              <div style={{ 
                height: '120px', 
                background: '#374151', 
                borderRadius: '6px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af'
              }}>
                Imagen del Producto
              </div>
              
              <h5 style={{ margin: '0.5rem 0', color: '#f9fafb' }}>Producto Ejemplo</h5>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>
                Descripción del producto con detalles importantes.
              </p>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <TagComponent variant="success">En Stock</TagComponent>
                <TagComponent variant="info">Nuevo</TagComponent>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button variant="primary" style={{ flex: '1' }}>Comprar</Button>
                <Button variant="outline">Favorito</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: '#f9fafb' }}>Carrito</h4>
            <div style={{ 
              border: '1px solid #4b5563', 
              borderRadius: '8px',
              padding: '1rem',
              background: '#111827'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#d1d5db' }}>
                <span>Subtotal</span>
                <span>$99.99</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#d1d5db' }}>
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid #374151',
                color: '#f9fafb'
              }}>
                <strong>Total</strong>
                <strong>$99.99</strong>
              </div>
              
              <Button variant="primary" style={{ width: '100%', marginBottom: '0.5rem' }}>
                Proceder al Pago
              </Button>
              <Button variant="outline" style={{ width: '100%' }}>
                Continuar Comprando
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Agregar Nuevo Usuario"
      >
        <div style={{ padding: '1rem 0' }}>
          <Input placeholder="Nombre completo" style={{ marginBottom: '1rem' }} />
          <Input placeholder="Email" type="email" style={{ marginBottom: '1rem' }} />
          <Input placeholder="Teléfono" type="tel" style={{ marginBottom: '1rem' }} />
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Button variant="primary" style={{ flex: '1' }}>Crear Usuario</Button>
            <Button variant="outline" style={{ flex: '1' }}>Cancelar</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const meta: Meta<typeof UseCasesPage> = {
  title: 'Nyx Design System/Casos de Uso',
  component: UseCasesPage,
  parameters: {
    docs: {
      page: UseCasesPage,
    },
  },
};

export default meta;
type Story = StoryObj<typeof UseCasesPage>;

export const CasosDeUso: Story = {};
