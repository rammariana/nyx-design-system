import type { Meta, StoryObj } from '@storybook/react';
import { ImageUpload } from '../../src/components/ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  title: 'Components/ImageUpload',
  component: ImageUpload,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    maxFiles: {
      control: { type: 'number', min: 1, max: 20 },
    },
    maxSize: {
      control: { type: 'number', min: 1, max: 50 },
    },
    disabled: {
      control: 'boolean',
    },
    onUpload: { action: 'uploaded' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxFiles: 10,
    maxSize: 10,
    disabled: false,
  },
};

export const LimitedFiles: Story = {
  args: {
    maxFiles: 3,
    maxSize: 5,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    maxFiles: 10,
    maxSize: 10,
    disabled: true,
  },
};