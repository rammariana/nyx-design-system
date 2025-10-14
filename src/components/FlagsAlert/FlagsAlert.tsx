import React, { useState } from 'react';
import styles from './FlagsAlert.module.css';

type FlagType = 'INCONSISTENCY' | 'ERROR' | 'WARNING';
type Severity = 'HIGH' | 'MEDIUM' | 'LOW';

interface Flag {
  nombre: string;
  descripcion: string;
  tipo_flag: FlagType;
  severidad: Severity;
}

interface FlagsAlertProps {
  flags: Flag[];
  title?: string;
  className?: string;
}

const flagTypePriority: Record<FlagType, number> = {
  ERROR: 3,
  INCONSISTENCY: 2,
  WARNING: 1
};

const flagTypeToColor = (t: FlagType): string => {
  if (t === 'ERROR') return '#dc3545'; // bootstrap danger
  if (t === 'INCONSISTENCY') return '#ffc107'; // bootstrap warning
  return '#0dcaf0'; // bootstrap info
};

const flagTypeToBadgeClass = (t: FlagType): string => {
  if (t === 'ERROR') return 'bg-danger';
  if (t === 'INCONSISTENCY') return 'bg-warning text-dark';
  return 'bg-info';
};

const getHighestType = (flags: Flag[]): FlagType | undefined => {
  if (!flags || flags.length === 0) return undefined;
  return flags.slice().sort((a, b) => flagTypePriority[b.tipo_flag] - flagTypePriority[a.tipo_flag])[0].tipo_flag;
};

export const FlagsAlert: React.FC<FlagsAlertProps> = ({ 
  flags, 
  title = "Advertencias e Inconsistencias Detectadas",
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!flags || flags.length === 0) {
    return null;
  }

  const highestType = getHighestType(flags);
  const alertClass = highestType === 'ERROR' ? 'alert-danger' : 
                    highestType === 'INCONSISTENCY' ? 'alert-warning' : 'alert-info';

  return (
    <div className={`${styles.flagsAlert} ${className}`}>
      <div className={`alert ${alertClass} ${styles.alertContainer}`} role="alert">
        <div className={styles.alertHeader}>
          <div className={styles.alertTitle}>
            <i className={`fas fa-exclamation-triangle ${styles.alertIcon}`}></i>
            <span className={styles.titleText}>{title}</span>
            <span className={`badge ${flagTypeToBadgeClass(highestType || 'WARNING')} ${styles.badge}`}>
              {flags.length}
            </span>
          </div>
          <button
            type="button"
            className={`btn btn-sm ${styles.expandButton}`}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="flags-details"
          >
            <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} ${styles.chevronIcon}`}></i>
            <span className={styles.buttonText}>
              {isExpanded ? 'Ocultar' : 'Ver detalles'}
            </span>
          </button>
        </div>
        
        {isExpanded && (
          <div 
            id="flags-details" 
            className={`${styles.flagsDetails} ${isExpanded ? styles.expanded : ''}`}
          >
            <div className={styles.flagsList}>
              {flags.map((flag, index) => (
                <div key={index} className={styles.flagItem}>
                  <div className={styles.flagHeader}>
                    <span className={`badge ${flagTypeToBadgeClass(flag.tipo_flag)} ${styles.flagBadge}`}>
                      {flag.tipo_flag}
                    </span>
                    <span className={`badge ${styles.severityBadge} ${styles[`severity-${flag.severidad.toLowerCase()}`]}`}>
                      {flag.severidad}
                    </span>
                  </div>
                  <div className={styles.flagContent}>
                    <strong className={styles.flagName}>{flag.nombre}</strong>
                    <p className={styles.flagDescription}>{flag.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlagsAlert;
