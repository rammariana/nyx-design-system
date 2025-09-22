// Script para forzar el cambio de favicon
function forceFavicon() {
  console.log('🔄 Forzando cambio de favicon...');
  
  // Remover TODOS los favicons existentes
  const allFavicons = document.querySelectorAll('link[rel*="icon"]');
  console.log('🗑️ Removiendo', allFavicons.length, 'favicons existentes');
  allFavicons.forEach(link => {
    console.log('Removiendo:', link.href);
    link.remove();
  });
  
  // Crear nuevo favicon con timestamp
  const timestamp = new Date().getTime();
  const faviconUrl = `/favicon.ico?t=${timestamp}`;
  
  const favicon = document.createElement('link');
  favicon.type = 'image/x-icon';
  favicon.rel = 'icon';
  favicon.href = faviconUrl;
  document.head.appendChild(favicon);
  
  const shortcutIcon = document.createElement('link');
  shortcutIcon.type = 'image/x-icon';
  shortcutIcon.rel = 'shortcut icon';
  shortcutIcon.href = faviconUrl;
  document.head.appendChild(shortcutIcon);
  
  console.log('✅ Favicon aplicado:', faviconUrl);
  console.log('📋 Favicons actuales:', document.querySelectorAll('link[rel*="icon"]').length);
}

// Ejecutar inmediatamente
forceFavicon();

// También hacerlo disponible globalmente
window.forceFavicon = forceFavicon;
