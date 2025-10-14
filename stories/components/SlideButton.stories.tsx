import type { Meta, StoryObj } from '@storybook/react';
import { SlideButton } from '../../src/components/Button';
import { useState } from 'react';

const meta: Meta<typeof SlideButton> = {
  title: 'Components/SlideButton',
  component: SlideButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeState: {
      control: { type: 'boolean' },
      description: 'Estado activo del toggle',
    },
    onToggle: {
      action: 'toggled',
      description: 'Función que se ejecuta al hacer toggle',
    },
    leftLabel: {
      control: { type: 'text' },
      description: 'Texto del lado izquierdo',
      defaultValue: 'Active',
    },
    rightLabel: {
      control: { type: 'text' },
      description: 'Texto del lado derecho',
      defaultValue: 'Inactive',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'dark', 'darkInverse', 'outline', 'gradient', 'compact', 'compactDark', 'compactCustom'],
      description: 'Variante del SlideButton',
    },
    showCircle: {
      control: { type: 'boolean' },
      description: 'Mostrar círculo indicador',
      defaultValue: false,
    },
    showText: {
      control: { type: 'boolean' },
      description: 'Mostrar texto',
      defaultValue: true,
    },
    customColor: {
      control: { type: 'color' },
      description: 'Color personalizado para compactCustom',
    },
    className: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SlideButton>;

const InteractiveTemplate = (args: any) => {
  const [active, setActive] = useState(args.activeState || false);
  return (
    <SlideButton
      {...args}
      activeState={active}
      onToggle={() => setActive(!active)}
    />
  );
};

export const Default: Story = {
  render: InteractiveTemplate,
  args: {
    leftLabel: 'Active',
    rightLabel: 'Inactive',
    leftIcon: <i className="bi  bi-moon-stars-fill"></i>,
    rightIcon: <i className="bi bi-sun-fill"></i>,
    variant: 'default',
  },
};

export const Dark: Story = {
  render: InteractiveTemplate,
  args: {
    leftLabel: 'Active',
    rightLabel: 'Inactive',
    leftIcon: <i className="bi bi-moon-stars-fill"></i>,
    rightIcon: <i className="bi bi-sun-fill"></i>,
    variant: 'dark',
  },
};

export const Outline: Story = {
  render: InteractiveTemplate,
  args: {
    leftLabel: 'Active',
    rightLabel: 'Inactive',
    leftIcon: <i className="bi bi-moon-stars-fill"></i>,
    rightIcon: <i className="bi bi-sun-fill"></i>,
    variant: 'outline',
  },
};

export const Gradient: Story = {
  render: InteractiveTemplate,
  args: {
    leftLabel: 'Active',
    rightLabel: 'Inactive',
    leftIcon: <i className="bi bi-moon-stars-fill"></i>,
    rightIcon: <i className="bi bi-sun-fill"></i>,
    variant: 'gradient',
  },
};

export const Compact: Story = {
  render: InteractiveTemplate,
  args: {
    leftLabel: 'Active',
    rightLabel: 'Inactive',
    variant: 'compact',
    showCircle: true,
  },
};

export const CompactCustom: Story = {
  render: InteractiveTemplate,
  args: {
    leftLabel: 'Active',
    rightLabel: 'Inactive',
    variant: 'compactCustom',
    showCircle: true,
    showText: true,
    customColor: '#ff6b6b',
  },
};

export const AllVariants: Story = {
  render: () => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>Default</h4>
          <SlideButton
            activeState={state1}
            onToggle={() => setState1(!state1)}
            leftLabel="Active"
            rightLabel="Inactive"
            leftIcon={<i className="bi bi-moon-stars-fill"></i>}
            rightIcon={<i className="bi bi-sun-fill"></i>}
            variant="default"
          />
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>Dark</h4>
          <SlideButton
            activeState={state2}
            onToggle={() => setState2(!state2)}
            leftLabel="Active"
            rightLabel="Inactive"
            leftIcon={<i className="bi bi-moon-stars-fill"></i>}
            rightIcon={<i className="bi bi-sun-fill"></i>}
            variant="dark"
          />
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>Outline</h4>
          <SlideButton
            activeState={state3}
            onToggle={() => setState3(!state3)}
            leftLabel="Active"
            rightLabel="Inactive"
            leftIcon={<i className="bi bi-moon-stars-fill"></i>}
            rightIcon={<i className="bi bi-sun-fill"></i>}
            variant="outline"
          />
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>Gradient</h4>
          <SlideButton
            activeState={state4}
            onToggle={() => setState4(!state4)}
            leftLabel="Active"
            rightLabel="Inactive"
            leftIcon={<i className="bi bi-moon-stars-fill"></i>}
            rightIcon={<i className="bi bi-sun-fill"></i>}
            variant="gradient"
          />
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>Compact</h4>
          <SlideButton
            activeState={state5}
            onToggle={() => setState5(!state5)}
            leftLabel="Active"
            rightLabel="Inactive"
            variant="compact"
            showCircle={true}
          />
        </div>
      </div>
    );
  },
};