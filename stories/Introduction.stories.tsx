import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const IntroductionPage = () => (
  <div style={{ padding: '2rem', margin: '0 auto', color: '#1f2937', backgroundColor: '#ffffff', minHeight: '100vh' }}>
    <h1 style={{ 
      fontSize: '3rem', 
      fontWeight: 'bold', 
      color: '#6366f1',
      marginBottom: '1rem',
      textAlign: 'center'
    }}>
      Nyx Design System
    </h1>
    
    <div style={{ 
      fontSize: '1.2rem', 
      color: '#6b7280', 
      textAlign: 'center',
      marginBottom: '3rem'
    }}>
      Elegancia. Estructura. Armonía.
    </div>

    <h2 style={{ color: '#1f2937' }}>¿Por qué Nyx?</h2>
    <p style={{ color: '#6b7280' }}>
      Nyx representa la diosa griega de la noche, símbolo de elegancia, misterio y poder. 
      Como nuestro sistema de diseño, Nyx proporciona la base sólida y elegante que 
      permite a las aplicaciones brillar con su propia luz.
    </p>

    <h2 style={{ color: '#1f2937' }}>Nuestro Objetivo</h2>
    <p style={{ color: '#6b7280' }}>
      Crear un ecosistema de componentes que unifique diseño y desarrollo, 
      acelerando la entrega de productos mientras mantenemos la consistencia 
      y calidad en cada interacción.
    </p>

    <h2 style={{ color: '#1f2937' }}>Arquitectura Atómica</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#ffffff' }}>
        <h3 style={{ color: '#6366f1' }}>Atoms</h3>
        <p style={{ color: '#6b7280' }}>Componentes básicos: Button, Input, Avatar, Tag</p>
      </div>
      <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#ffffff' }}>
        <h3 style={{ color: '#8b5cf6' }}>Molecules</h3>
        <p style={{ color: '#6b7280' }}>Combinaciones: SearchBox, Card, Modal, Banner</p>
      </div>
      <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: '#ffffff' }}>
        <h3 style={{ color: '#10b981' }}>Organisms</h3>
        <p style={{ color: '#6b7280' }}>Estructuras complejas: Sidebar, SidePanel, QueryBox</p>
      </div>
    </div>

    <h2 style={{ color: '#1f2937' }}>Beneficios Cuantificables</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ color: '#10b981' }}>Desarrollo Más Rápido</h3>
        <p style={{ color: '#6b7280' }}>Componentes reutilizables aceleran el tiempo de desarrollo</p>
      </div>
      <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ color: '#f59e0b' }}>Menos Errores</h3>
        <p style={{ color: '#6b7280' }}>Componentes probados reducen bugs visuales</p>
      </div>
      <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ color: '#8b5cf6' }}>Accesibilidad Completa</h3>
        <p style={{ color: '#6b7280' }}>Componentes WCAG 2.1 AA desde el diseño</p>
      </div>
      <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h3 style={{ color: '#6366f1' }}>16 Componentes</h3>
        <p style={{ color: '#6b7280' }}>Biblioteca completa para cualquier aplicación</p>
      </div>
    </div>

    <h2 style={{ color: '#1f2937' }}>Desarrollado con Pasión</h2>
    <p style={{ color: '#6b7280' }}>
      Por <strong style={{ color: '#1f2937' }}>Mariana</strong> de <strong style={{ color: '#1f2937' }}>Camtom</strong> y el Equipo Camtom, construyendo el futuro 
      del diseño de interfaces con pasión y precisión.
    </p>
  </div>
);

const meta: Meta<typeof IntroductionPage> = {
  title: 'Nyx Design System/Introducción',
  component: IntroductionPage,
  parameters: {
    docs: {
      page: IntroductionPage,
    },
  },
};

export default meta;
type Story = StoryObj<typeof IntroductionPage>;

export const Introduccion: Story = {};