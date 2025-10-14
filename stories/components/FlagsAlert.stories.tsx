import type { Meta, StoryObj } from '@storybook/react';
import { FlagsAlert } from '../../src/components/FlagsAlert';

const meta: Meta<typeof FlagsAlert> = {
  title: 'Components/FlagsAlert',
  component: FlagsAlert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    flags: {
      description: 'Array of flag objects to display',
    },
    title: {
      description: 'Title for the flags alert',
      control: 'text',
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFlags = [
  {
    nombre: 'Inconsistencia en valor declarado',
    descripcion: 'El valor declarado no coincide con el valor comercial estimado según la base de datos.',
    tipo_flag: 'INCONSISTENCY' as const,
    severidad: 'HIGH' as const,
  },
  {
    nombre: 'Error en clasificación arancelaria',
    descripcion: 'La clasificación arancelaria proporcionada no es válida para el producto descrito.',
    tipo_flag: 'ERROR' as const,
    severidad: 'HIGH' as const,
  },
  {
    nombre: 'Advertencia de documentación',
    descripcion: 'Faltan algunos documentos requeridos para completar el proceso.',
    tipo_flag: 'WARNING' as const,
    severidad: 'MEDIUM' as const,
  },
  {
    nombre: 'Inconsistencia en país de origen',
    descripcion: 'El país de origen declarado no coincide con la información del proveedor.',
    tipo_flag: 'INCONSISTENCY' as const,
    severidad: 'LOW' as const,
  },
];

export const Default: Story = {
  args: {
    flags: sampleFlags,
    title: 'Advertencias e Inconsistencias Detectadas',
  },
};

export const SingleFlag: Story = {
  args: {
    flags: [sampleFlags[0]],
    title: 'Inconsistencia Detectada',
  },
};

export const ErrorFlags: Story = {
  args: {
    flags: sampleFlags.filter(flag => flag.tipo_flag === 'ERROR'),
    title: 'Errores Críticos',
  },
};

export const WarningFlags: Story = {
  args: {
    flags: sampleFlags.filter(flag => flag.tipo_flag === 'WARNING'),
    title: 'Advertencias',
  },
};

export const InconsistencyFlags: Story = {
  args: {
    flags: sampleFlags.filter(flag => flag.tipo_flag === 'INCONSISTENCY'),
    title: 'Inconsistencias Detectadas',
  },
};

export const EmptyFlags: Story = {
  args: {
    flags: [],
    title: 'Sin Problemas Detectados',
  },
};

export const CustomTitle: Story = {
  args: {
    flags: sampleFlags,
    title: 'Revisión de Datos Requerida',
  },
};
