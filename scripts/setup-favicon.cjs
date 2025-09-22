#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Ruta del favicon de Camtom
const sourceFavicon = path.join(__dirname, '..', '.storybook', 'favicon.ico');

// Rutas de destino
const targetFaviconDev = path.join(__dirname, '..', 'node_modules', '@storybook', 'core-server', 'public', 'favicon.svg');
const storybookStaticDir = path.join(__dirname, '..', 'storybook-static');
const targetFaviconSvg = path.join(storybookStaticDir, 'favicon.svg');
const targetFaviconIco = path.join(storybookStaticDir, 'favicon.ico');

try {
  // Verificar que el archivo fuente existe
  if (!fs.existsSync(sourceFavicon)) {
    console.log('❌ No se encontró el favicon de Camtom en:', sourceFavicon);
    process.exit(1);
  }

  // 1. Configurar favicon para desarrollo (node_modules)
  const targetDir = path.dirname(targetFaviconDev);
  if (fs.existsSync(targetDir)) {
    fs.copyFileSync(sourceFavicon, targetFaviconDev);
    console.log('✅ Favicon de Camtom aplicado para desarrollo');
  }

  // 2. Configurar favicon para build estático (storybook-static)
  if (fs.existsSync(storybookStaticDir)) {
    // Copiar como favicon.ico
    fs.copyFileSync(sourceFavicon, targetFaviconIco);
    console.log('✅ Favicon.ico copiado a storybook-static');
    
    // Copiar como favicon.svg (para compatibilidad con el HTML)
    fs.copyFileSync(sourceFavicon, targetFaviconSvg);
    console.log('✅ Favicon.svg copiado a storybook-static');
  }
  
  console.log('🎉 Favicon de Camtom configurado correctamente');
  
} catch (error) {
  console.error('❌ Error al aplicar el favicon:', error.message);
  process.exit(1);
}
