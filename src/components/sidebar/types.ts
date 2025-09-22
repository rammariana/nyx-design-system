export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: string; // Bootstrap icon class
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  badge?: {
    text: string;
    color: string;
    backgroundColor: string;
  };
  isRestricted?: boolean;
  restrictionTooltip?: string;
}

export interface SidebarProps {
  // Configuración básica
  isOpen?: boolean;
  onToggle?: () => void;
  
  // Logo
  logoExpanded?: string; // URL del logo cuando está expandido
  logoCollapsed?: string; // URL del logo cuando está colapsado
  logoAlt?: string;
  
  // Items del menú
  menuItems: SidebarMenuItem[];
  
  // Configuración de usuario/país
  countryCode?: string;
  organizationId?: string;
  allowedOrganizationIds?: string[];
  
  // Callbacks
  onItemClick?: (itemId: string) => void;
  onLogoClick?: () => void;
  
  // Footer personalizable
  footerContent?: React.ReactNode; // Contenido personalizado para el footer
  showPoweredBy?: boolean; // Mostrar "Powered by Camtom"
  poweredByLogo?: string; // Logo de Camtom para el footer
  
  // Estilos adicionales
  className?: string;
}
