import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const IntroductionPage = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#f9fafb' }}>
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
      color: '#9ca3af', 
      textAlign: 'center',
      marginBottom: '3rem'
    }}>
      Elegancia. Estructura. Armonía.
    </div>

    <h2 style={{ color: '#f9fafb' }}>¿Por qué Nyx?</h2>
    <p style={{ color: '#d1d5db' }}>
      Nyx representa la diosa griega de la noche, símbolo de elegancia, misterio y poder. 
      Como nuestro sistema de diseño, Nyx proporciona la base sólida y elegante que 
      permite a las aplicaciones brillar con su propia luz.
    </p>

    <h2 style={{ color: '#f9fafb' }}>Nuestro Objetivo</h2>
    <p style={{ color: '#d1d5db' }}>
      Crear un ecosistema de componentes que unifique diseño y desarrollo, 
      acelerando la entrega de productos mientras mantenemos la consistencia 
      y calidad en cada interacción.
    </p>

    <h2 style={{ color: '#f9fafb' }}>Arquitectura Atómica</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ padding: '1rem', border: '1px solid #374151', borderRadius: '8px', background: '#1f2937' }}>
        <h3 style={{ color: '#6366f1' }}>Atoms</h3>
        <p style={{ color: '#d1d5db' }}>Componentes básicos: Button, Input, Avatar, Tag</p>
      </div>
      <div style={{ padding: '1rem', border: '1px solid #374151', borderRadius: '8px', background: '#1f2937' }}>
        <h3 style={{ color: '#8b5cf6' }}>Molecules</h3>
        <p style={{ color: '#d1d5db' }}>Combinaciones: SearchBox, Card, Modal, Banner</p>
      </div>
      <div style={{ padding: '1rem', border: '1px solid #374151', borderRadius: '8px', background: '#1f2937' }}>
        <h3 style={{ color: '#10b981' }}>Organisms</h3>
        <p style={{ color: '#d1d5db' }}>Estructuras complejas: Sidebar, SidePanel, QueryBox</p>
      </div>
    </div>

    <h2 style={{ color: '#f9fafb' }}>Beneficios Cuantificables</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '2rem 0' }}>
      <div style={{ padding: '1rem', background: '#1f2937', borderRadius: '8px', border: '1px solid #374151' }}>
        <h3 style={{ color: '#10b981' }}>Desarrollo Más Rápido</h3>
        <p style={{ color: '#d1d5db' }}>Componentes reutilizables aceleran el tiempo de desarrollo</p>
      </div>
      <div style={{ padding: '1rem', background: '#1f2937', borderRadius: '8px', border: '1px solid #374151' }}>
        <h3 style={{ color: '#f59e0b' }}>Menos Errores</h3>
        <p style={{ color: '#d1d5db' }}>Componentes probados reducen bugs visuales</p>
      </div>
      <div style={{ padding: '1rem', background: '#1f2937', borderRadius: '8px', border: '1px solid #374151' }}>
        <h3 style={{ color: '#8b5cf6' }}>Accesibilidad Completa</h3>
        <p style={{ color: '#d1d5db' }}>Componentes WCAG 2.1 AA desde el diseño</p>
      </div>
      <div style={{ padding: '1rem', background: '#1f2937', borderRadius: '8px', border: '1px solid #374151' }}>
        <h3 style={{ color: '#6366f1' }}>16 Componentes</h3>
        <p style={{ color: '#d1d5db' }}>Biblioteca completa para cualquier aplicación</p>
      </div>
    </div>

    <h2 style={{ color: '#f9fafb' }}>Desarrollado con Pasión</h2>
    <p style={{ color: '#d1d5db' }}>
      Por <strong style={{ color: '#f9fafb' }}>Mariana</strong> de <strong style={{ color: '#f9fafb' }}>Camtom</strong> y el Equipo Camtom, construyendo el futuro 
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
