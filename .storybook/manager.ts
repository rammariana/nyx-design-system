import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'Nyx Design System',
    brandUrl: 'https://camtomx.com',
    brandImage: undefined, // Sin logo de Storybook
    
    // Colores personalizados de Nyx
    colorPrimary: '#6366f1',
    colorSecondary: '#8b5cf6',
    
    // UI personalizada
    appBg: '#0f0f23',
    appContentBg: '#1a1a2e',
    appBorderColor: '#374151',
    appBorderRadius: 8,
    
    textColor: '#f9fafb',
    textInverseColor: '#111827',
    
    barTextColor: '#d1d5db',
    barSelectedColor: '#6366f1',
    barBg: '#1f2937',
    
    inputBg: '#374151',
    inputBorder: '#4b5563',
    inputTextColor: '#f9fafb',
    inputBorderRadius: 6,
  },
  
  // CONFIGURACIÓN PARA MODO PRESENTACIÓN - SIN TOOLBARS
  showPanel: false,           // ❌ Ocultar panel inferior
  panelPosition: 'bottom',
  enableShortcuts: false,     // ❌ Deshabilitar atajos de teclado
  showToolbar: false,         // ❌ OCULTAR TOOLBAR PRINCIPAL
  selectedPanel: undefined,   // Sin panel seleccionado
  
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
});