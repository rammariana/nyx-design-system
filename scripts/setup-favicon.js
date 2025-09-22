#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Ruta del favicon de Camtom
const sourceFavicon = path.join(__dirname, '..', '.storybook', 'favicon.ico');

// Ruta del favicon de Storybook que queremos reemplazar
const targetFavicon = path.join(__dirname, '..', 'node_modules', '@storybook', 'core-server', 'public', 'favicon.svg');

try {
  // Verificar que el archivo fuente existe
  if (!fs.existsSync(sourceFavicon)) {
    console.log('❌ No se encontró el favicon de Camtom en:', sourceFavicon);
    process.exit(1);
  }

  // Verificar que el directorio de destino existe
  const targetDir = path.dirname(targetFavicon);
  if (!fs.existsSync(targetDir)) {
    console.log('❌ No se encontró el directorio de Storybook:', targetDir);
    process.exit(1);
  }

  // Copiar el favicon de Camtom sobre el de Storybook
  fs.copyFileSync(sourceFavicon, targetFavicon);
  console.log('✅ Favicon de Camtom aplicado correctamente');
  
} catch (error) {
  console.error('❌ Error al aplicar el favicon:', error.message);
  process.exit(1);
}
