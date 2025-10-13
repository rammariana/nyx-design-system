# 🌌 Nyx Design System

[![npm version](https://badge.fury.io/js/%40camtom%2Fnyx-design-system.svg)](https://badge.fury.io/js/%40camtom%2Fnyx-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://reactjs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-7+-ff4785.svg)](https://storybook.js.org/)

> Un sistema de diseño profesional para React con TypeScript, componentes accesibles y documentación completa. Nyx proporciona una biblioteca de componentes UI moderna, consistente y altamente personalizable.

## ✨ Características

- 🎯 **16 Componentes de Producción** - Componentes UI cuidadosamente diseñados para aplicaciones modernas
- 🔧 **TypeScript First** - Seguridad de tipos completa y excelente experiencia de desarrollo
- ♿ **Accesibilidad Integrada** - Componentes compatibles con WCAG 2.1 y soporte ARIA
- 🎨 **CSS Modules** - Estilos encapsulados con tokens de diseño y soporte de temas
- 📦 **Tree-shaking Optimizado** - Importa solo lo que necesitas para bundles más pequeños
- 📚 **Documentación Storybook** - Playground interactivo y documentación completa
- 🧪 **Testing Completo** - Tests unitarios con Vitest y React Testing Library
- 🚀 **Performance Optimizado** - Construido para velocidad y eficiencia
- 🎭 **Diseño Profesional** - Lenguaje visual consistente, moderno y elegante

## 📦 Instalación

```bash
npm install @camtom/nyx-design-system
# o
yarn add @camtom/nyx-design-system
# o
pnpm add @camtom/nyx-design-system
```

## 🎨 Ver Componentes en Vivo

**📚 [Storybook Demo](https://nyx-design-system.netlify.app/?path=/story/nyx-design-system-introducci%C3%B3n--introduccion)** - Explora todos los componentes de forma interactiva con ejemplos en vivo y documentación completa.

## 🚀 Inicio Rápido

```tsx
import React from 'react';
import { Button, Input, Modal, TagComponent } from '@camtom/nyx-design-system';
import '@camtom/nyx-design-system/dist/index.css';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Input placeholder="Escribe tu mensaje..." />
      <Button 
        variant="primary" 
        onClick={() => setIsOpen(true)}
      >
        Abrir Modal
      </Button>
      
      <TagComponent variant="success">
        Estado Exitoso
      </TagComponent>
      
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Bienvenido a Nyx"
      >
        <p>Tu contenido va aquí...</p>
      </Modal>
    </div>
  );
}
```

## 🎨 Biblioteca de Componentes

### 📝 Componentes de Formulario
- **Button** - Botones interactivos con múltiples variantes y estados
- **Input** - Campos de entrada de texto con validación y texto de ayuda
- **Textarea** - Entrada de texto multilínea con redimensionamiento automático
- **Select** - Selectores desplegables con búsqueda y opciones múltiples
- **Dropzone** - Subida de archivos por arrastrar y soltar con indicadores de progreso
- **QueryBox** - Entrada de consultas avanzada con archivos adjuntos

### 🧭 Componentes de Navegación
- **Sidebar** - Barra lateral de navegación colapsible con elementos de menú
- **SidePanel** - Paneles laterales deslizantes para contenido adicional
- **DropdownMenu** - Menús desplegables contextuales

### 💬 Componentes de Retroalimentación
- **Modal** - Diálogos modales accesibles con tamaños personalizables
- **Tooltip** - Información contextual al hacer hover
- **Banner** - Banners informativos con diferentes variantes
- **Loader** - Indicadores de carga con múltiples animaciones

### 📊 Componentes de Visualización de Datos
- **Avatar** - Imágenes de perfil de usuario con respaldos
- **TagComponent** - Etiquetas de estado y badges con 18 variantes
- **Details** - Secciones de contenido colapsibles
- **ScrollableContainer** - Contenedores con scroll personalizado

## 🛠️ Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm 8+ o yarn 1.22+

### Configuración
```bash
# Clonar el repositorio
git clone https://github.com/camtom/nyx-design-system.git
cd nyx-design-system

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Build en modo watch
npm run storybook        # Iniciar documentación Storybook

# Construcción
npm run build            # Build de producción
npm run build-storybook  # Build Storybook para despliegue

# Testing
npm run test             # Ejecutar tests en modo watch
npm run test:run         # Ejecutar tests una vez
npm run test:coverage    # Ejecutar tests con reporte de cobertura

# Calidad de Código
npm run lint             # ESLint con auto-fix
npm run type-check       # Verificación de tipos TypeScript

# Publicación
npm run release          # Bump de versión patch y publicar
npm run release:minor    # Bump de versión minor y publicar
npm run release:major    # Bump de versión major y publicar
```

## 📚 Documentación

### Documentación Interactiva
Visita nuestra [documentación Storybook](https://camtom.github.io/nyx-design-system) para:
- Playground interactivo de componentes
- Ejemplos de código en vivo
- Guías de diseño
- Documentación de accesibilidad
- Referencias de API

### Documentación Local
```bash
npm run storybook
# Se abre en http://localhost:6006
```

## 🎯 Filosofía de Diseño

Nyx está construido sobre principios fundamentales que aseguran consistencia, accesibilidad y experiencia de desarrollo:

### 🌟 **Claridad en la Complejidad**
- Interfaces limpias e intuitivas que reducen la carga cognitiva
- Lenguaje visual consistente en todos los componentes
- Jerarquía de información clara y flujo visual

### ♿ **Accesibilidad Primero**
- Cumplimiento WCAG 2.1 AA por defecto
- Soporte de navegación por teclado
- Compatibilidad con lectores de pantalla
- Soporte de modo de alto contraste

### ⚡ **Performance Optimizado**
- Soporte de tree-shaking para tamaños de bundle mínimos
- CSS Modules para estilos encapsulados
- Renderizado optimizado con mejores prácticas de React
- Capacidades de carga diferida

### 🔧 **Experiencia de Desarrollo**
- Soporte completo de TypeScript con tipos comprensivos
- Diseño de API intuitivo con valores por defecto sensatos
- Documentación extensa y ejemplos
- Recarga en caliente en desarrollo

## 🎨 Temas y Personalización

### Variables CSS
Personaliza el sistema de diseño usando variables CSS:

```css
:root {
  --color-primary-500: #tu-color-primario;
  --color-secondary-500: #tu-color-secundario;
  --spacing-4: 1rem;
  --radius-md: 8px;
  --font-family-base: 'Tu Fuente', sans-serif;
}
```

### Personalización de Componentes
```tsx
import { Button } from '@camtom/nyx-design-system';

// Estilos personalizados con CSS modules
<Button 
  variant="primary" 
  className="mi-boton-personalizado"
  style={{ 
    '--button-padding': '1rem 2rem',
    '--button-radius': '12px'
  }}
>
  Botón Personalizado
</Button>
```

## 🧪 Testing

Los componentes de Nyx están completamente probados con:
- **Tests Unitarios** - Comportamiento de componentes y props
- **Tests de Integración** - Interacciones de usuario y flujos de trabajo  
- **Tests de Accesibilidad** - Lectores de pantalla y navegación por teclado
- **Tests de Regresión Visual** - Consistencia de UI entre actualizaciones

```bash
# Ejecutar todos los tests
npm run test:run

# Ejecutar con cobertura
npm run test:coverage

# Ejecutar archivo de test específico
npm test Button.test.tsx
```

## 📈 Performance

- **Tamaño del Bundle**: ~45KB comprimido (todos los componentes)
- **Tree-shaking**: Importa solo los componentes necesarios
- **CSS**: Estilos encapsulados previenen conflictos
- **Runtime**: Patrones de React optimizados y re-renders mínimos

```tsx
// Importaciones amigables con tree-shaking
import { Button } from '@camtom/nyx-design-system/Button';
import { Input } from '@camtom/nyx-design-system/Input';
```

## 🤝 Contribuir

¡Aceptamos contribuciones! Por favor consulta nuestra [Guía de Contribución](CONTRIBUTING.md) para detalles.

### Flujo de Desarrollo
1. Fork el repositorio
2. Crear una rama de feature (`git checkout -b feature/increible-feature`)
3. Hacer tus cambios
4. Agregar tests para nueva funcionalidad
5. Ejecutar la suite de tests (`npm run test:run`)
6. Commit tus cambios (`git commit -m 'Agregar increible feature'`)
7. Push a la rama (`git push origin feature/increible-feature`)
8. Abrir un Pull Request

### Estándares de Código
- TypeScript para seguridad de tipos
- ESLint para calidad de código
- Prettier para formato de código
- Commits convencionales para generación de changelog

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🏢 Soporte Empresarial

Para soporte empresarial, componentes personalizados o servicios de consultoría, contáctanos en:
- **Email**: hello@camtomx.com
- **Sitio Web**: https://camtomx.com
- **Documentación**: https://docs.camtomx.com/nyx

## 🗺️ Roadmap

### v1.1.0 (Q2 2024)
- [ ] Componente Data Table
- [ ] Componentes de gráficos
- [ ] Validación avanzada de formularios
- [ ] Soporte de modo oscuro

### v1.2.0 (Q3 2024)
- [ ] Componentes optimizados para móvil
- [ ] Biblioteca de animaciones
- [ ] Sistema de temas avanzado
- [ ] Utilidades de composición de componentes

## 🙏 Agradecimientos

- Equipo de React por el framework increíble
- Equipo de Storybook por las excelentes herramientas de documentación
- Testing Library por las utilidades de testing
- Bootstrap Icons por el conjunto de iconos
- Todos los contribuidores y miembros de la comunidad

---

<div align="center">

**Nyx Design System** - *Elegancia. Estructura. Armonía.*

Desarrollado con 🖤 por **Mariana** del [Equipo Camtom](https://camtomx.com)

[Documentación](https://camtom.github.io/nyx-design-system) • [GitHub](https://github.com/camtom/nyx-design-system) • [NPM](https://www.npmjs.com/package/@camtom/nyx-design-system)

</div>
