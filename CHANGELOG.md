# Changelog

Todos los cambios notables a este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.13] - 2024-XX-XX (o la fecha actual)

### Corregido

- QueryBox: Corregida lógica invertida del modelo pro/fast en SlideButton. Ahora cuando el modelo es 'fast' el toggle muestra correctamente 'Fast' activo, y cuando es 'pro' muestra 'Pro' activo.

## [1.4.12] - ...

## [1.0.11] - 2024-01-XX

### Corregido

- Documentación README completamente renovada con información precisa y ejemplos reales
- CHANGELOG.md profesional con historial detallado de cambios
- package.json con metadatos actualizados y información de contacto correcta
- Información de componentes fiel al sistema real (16 componentes exactos)
- Ejemplos de código que reflejan la API real de los componentes
- URLs y información de contacto actualizada (hello@camtomx.com)

## [1.0.10] - 2024-01-XX

### Agregado

- Documentación Storybook completa para todos los componentes
- README profesional con badges e información empresarial
- Integración de Bootstrap CSS para funcionalidad del componente Sidebar
- Documentación mejorada de componentes con información de accesibilidad
- package.json profesional con metadatos y scripts apropiados
- CHANGELOG.md con historial detallado de cambios

### Cambiado

- Actualizadas todas las historias de Storybook para usar contenido Lorem ipsum en lugar de texto específico del negocio
- Mejorada la documentación de componentes con descripciones precisas de props y valores por defecto
- Mejorado el uso de variables CSS en todos los componentes
- Actualizado package.json con mejores keywords y metadatos
- README completamente renovado con información precisa y ejemplos reales

### Corregido

- El componente Sidebar ahora muestra correctamente solo iconos cuando está cerrado (`isOpen: false`)
- Corregidos colores hardcodeados en componentes Select y SidePanel para usar variables CSS
- Corregidos errores de TypeScript en historias de DropdownMenu
- Mejorado el CSS del componente Loader para coincidir con la implementación del frontend
- Corregida la integración de Bootstrap CSS para funcionalidad completa del Sidebar

### Componentes Actualizados

- **Avatar**: Storybook mejorado con documentación comprensiva
- **Banner**: Historias actualizadas con documentación apropiada de props
- **Button**: Corregidos títulos duplicados y mejorada documentación
- **Details**: Verificada alineación entre componente e historias
- **DropdownMenu**: Corregidos errores de TypeScript y mejoradas historias
- **Dropzone**: Documentación de accesibilidad mejorada y casos de uso realistas
- **Input**: Separadas historias de Input y Textarea, documentación mejorada
- **Loader**: CSS actualizado para coincidir con gradiente y animaciones del frontend
- **Modal**: Documentación comprensiva con todas las props e información de accesibilidad
- **QueryBox**: Documentación detallada de props y ejemplos realistas
- **ScrollableContainer**: Documentación mejorada y casos de uso
- **Select**: Corregidos colores hardcodeados e historias mejoradas
- **SidePanel**: Reemplazado contenido de negocio con Lorem ipsum, corregidas variables CSS
- **Sidebar**: Corregida dependencia de Bootstrap e historias mejoradas
- **TagComponent**: Renovación completa de documentación con todas las variantes
- **Tooltip**: Historias mejoradas con ejemplos de contenido complejo

## [1.0.9] - 2024-01-XX

### Agregado

- Lanzamiento inicial del Sistema de Diseño Nyx
- Biblioteca de componentes core con soporte TypeScript
- Documentación Storybook
- Implementación CSS Modules
- Configuración básica de testing

### Componentes

- Avatar
- Banner
- Button
- Details
- DropdownMenu
- Dropzone
- Input
- Loader
- Modal
- QueryBox
- ScrollableContainer
- Select
- SidePanel
- Sidebar
- TagComponent
- Tooltip

---

## Historial de Versiones

- **1.0.10** - Documentación profesional y alineación de componentes
- **1.0.9** - Lanzamiento inicial con componentes core

## Guía de Migración

### De 1.0.9 a 1.0.10

No hay cambios que rompan la compatibilidad. Esta es una versión de documentación y corrección de bugs.

#### Dependencias Actualizadas

- Agregado Bootstrap CSS para funcionalidad del componente Sidebar
- No hay cambios en peer dependencies

#### Actualizaciones de Componentes

Todos los componentes mantienen compatibilidad hacia atrás. Se realizaron las siguientes mejoras:

1. **Sidebar**: Ahora muestra correctamente solo iconos cuando `isOpen: false`
2. **Select**: Corregidos colores hardcodeados para usar variables CSS
3. **SidePanel**: CSS actualizado para usar variables del sistema de diseño
4. **Loader**: CSS mejorado con animaciones para coincidir con la implementación del frontend

#### Documentación

- Todas las historias de Storybook ahora usan contenido Lorem ipsum
- Documentación de componentes mejorada con descripciones precisas de props
- Información de accesibilidad mejorada
- README profesional con información empresarial

## Soporte

Para preguntas sobre esta versión o asistencia de migración:

- **Documentación**: [Storybook](https://camtom.github.io/nyx-design-system)
- **Issues**: [GitHub Issues](https://github.com/camtom/nyx-design-system/issues)
- **Soporte**: hello@camtomx.com
