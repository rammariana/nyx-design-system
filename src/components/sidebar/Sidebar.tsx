import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { SidebarProps, SidebarMenuItem } from './types';

// Access Control Utilities
function getAllowedOrganizationIds(allowedIds?: string[]): string[] {
  if (!allowedIds || allowedIds.length === 0) {
    return [];
  }
  return allowedIds;
}

function hasOperationsAccess(organizationId?: string, allowedIds?: string[]): boolean {
  if (!organizationId) return false;
  const allowed = getAllowedOrganizationIds(allowedIds);
  if (allowed.length === 0) return true;
  return allowed.includes(organizationId);
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen: controlledIsOpen,
  onToggle,
  logoExpanded,
  logoCollapsed,
  logoAlt = "Logo",
  menuItems,
  countryCode,
  organizationId,
  allowedOrganizationIds,
  onItemClick,
  onLogoClick,
  footerContent,
  showPoweredBy = false,
  poweredByLogo,
  className = '',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  
  // Use controlled or internal state
  const openClose = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const hasAccessToPedimento = hasOperationsAccess(organizationId, allowedOrganizationIds);

  // Agregar función para cerrar el menú en móviles
  const handleClose = () => {
    if (window.innerWidth < 768) {
      if (onToggle) {
        onToggle();
      } else {
        setInternalIsOpen(false);
      }
    }
  };

  const handleItemClick = (item: SidebarMenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item.id);
    }
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
  };

  const sidebarListClasses = (item: SidebarMenuItem) => {
    const activeClass = item.isActive ? styles.active : '';
    const layoutClasses = openClose
      ? "justify-content-start align-items-center gap-3"
      : "justify-content-center m-0";
    return `${styles.sidebarList} d-flex flex-row ${activeClass} ${layoutClasses}`;
  };

  const renderMenuItem = (item: SidebarMenuItem) => {
    const isRestricted = item.isRestricted && !hasAccessToPedimento;
    
    const menuContent = (
      <div className={sidebarListClasses(item)}>
        <i className={`${item.icon} fs-4`}></i>
        <p className={`m-0 ${openClose ? "d-block" : "d-none"} d-flex justify-content-between align-items-center flex-grow-1`}>
          <span>
            {item.label}
            {item.badge && (
              <span
                className="badge ms-2"
                style={{
                  fontSize: "0.7rem",
                  color: item.badge.color,
                  backgroundColor: item.badge.backgroundColor,
                }}
              >
                {item.badge.text}
              </span>
            )}
          </span>
          {isRestricted && (
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#e9ecef',
              }}
              title={item.restrictionTooltip || "Acceso restringido"}
            >
              <i className="bi bi-lock-fill" style={{ fontSize: '9px', color: '#6c757d' }}></i>
            </span>
          )}
        </p>
      </div>
    );

    if (item.href) {
      return (
        <a
          key={item.id}
          href={item.href}
          className={styles.menuItem}
          onClick={(e) => {
            if (item.onClick) {
              e.preventDefault();
              handleItemClick(item);
            }
          }}
        >
          {menuContent}
        </a>
      );
    }

    return (
      <button
        key={item.id}
        className={styles.menuItem}
        onClick={() => handleItemClick(item)}
        style={{
          background: 'none',
          border: 'none',
          width: '100%',
          textAlign: 'left',
          padding: 0,
        }}
      >
        {menuContent}
      </button>
    );
  };

  return (
    <>
      {/* Botón hamburguesa solo visible en móviles */}
      <button
        className={`${styles.hamburgerBtn} d-md-none`}
        onClick={handleToggle}
        aria-label="Toggle menu"
      >
        {openClose ? (
          <i className="bi bi-x"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </button>

      {/* Overlay para cerrar el menú al hacer click fuera */}
      {openClose && (
        <div className={`${styles.sidebarOverlay} d-md-none`} onClick={handleClose}></div>
      )}

      <div
        className={`${styles.side} d-flex flex-column align-items-center ${
          openClose ? styles.sidebarOpen : styles.sidebarClose
        } ${className}`}
      >
        {/* Contenedor del logo - fijo en la parte superior */}
        <div className={`${styles.sidebarLogoContainer} w-100 d-flex justify-content-center`}>
          {openClose ? (
            <button
              onClick={handleLogoClick}
              style={{ background: 'none', border: 'none', width: '100%' }}
            >
              <img 
                className={styles.logoSidebarUser} 
                src={logoExpanded} 
                alt={logoAlt} 
              />
            </button>
          ) : (
            <div className={styles.logo}>
              <button
                onClick={handleLogoClick}
                style={{ background: 'none', border: 'none', width: '100%' }}
              >
                <img
                  className="w-100 text-center"
                  src={logoCollapsed}
                  alt={logoAlt}
                />
              </button>
            </div>
          )}
        </div>

        {/* Contenedor del menú - con scroll */}
        <div className={`${styles.sidebarMenuContainer} w-100`}>
          {menuItems.map(renderMenuItem)}
        </div>

        {/* Footer personalizable */}
        {(footerContent || showPoweredBy) && (
          <div className={styles.sidebarFooter}>
            {/* Contenido personalizado del footer */}
            {footerContent}
            
            {/* Powered by Camtom */}
            {showPoweredBy && (
              <div className={styles.poweredBy}>
                {openClose ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6c757d' }}>
                    <span>Powered by</span>
                    <img src={poweredByLogo} alt="Camtom" style={{ height: '20px' }} />
                  </div>
                ) : (
                  <img src={poweredByLogo} alt="Camtom" style={{ height: '20px' }} />
                )}
              </div>
            )}
          </div>
        )}

        {/* Contenedor del botón de toggle - fijo en la parte inferior */}
        <div className={styles.sidebarToggleContainer}>
          {/* Botón toggle */}
          <button
            className={`${styles.toggleSidebarBtn} d-none d-md-flex`}
            onClick={handleToggle}
            aria-label={openClose ? "Cerrar sidebar" : "Abrir sidebar"}
          >
            <i className="bi bi-layout-sidebar-inset"></i>
          </button>
        </div>
      </div>
    </>
  );
};
