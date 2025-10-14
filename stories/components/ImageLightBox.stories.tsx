import type { Meta, StoryObj } from '@storybook/react';
import { ImageLightbox } from '../../src/components/ImageLightbox';
import { useState } from 'react';

const meta: Meta<typeof ImageLightbox> = {
  title: 'Components/ImageLightbox',
  component: ImageLightbox,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    isUploading: {
      control: 'boolean',
    },
    showUploadButton: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
];

const InteractiveTemplate = (args: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ImageLightbox
      {...args}
      isOpen={isOpen}
      currentIndex={currentIndex}
      onClose={() => setIsOpen(false)}
      onPrevious={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : sampleImages.length - 1)}
      onNext={() => setCurrentIndex(prev => prev < sampleImages.length - 1 ? prev + 1 : 0)}
      onImageSelect={(index) => setCurrentIndex(index)}
    />
  );
};

export const Default: Story = {
  render: InteractiveTemplate,
  args: {
    images: sampleImages,
    isUploading: false,
    showUploadButton: false,
  },
};

export const WithUpload: Story = {
  args: {
    isOpen: true,
    images: sampleImages,
    currentIndex: 0,
    isUploading: false,
    showUploadButton: true,
  },
};

export const Uploading: Story = {
  args: {
    isOpen: true,
    images: sampleImages,
    currentIndex: 0,
    isUploading: true,
    showUploadButton: true,
  },
};

export const Empty: Story = {
  args: {
    isOpen: true,
    images: [],
    currentIndex: 0,
    isUploading: false,
    showUploadButton: true,
  },
};

export const SingleImage: Story = {
  args: {
    isOpen: true,
    images: [sampleImages[0]],
    currentIndex: 0,
    isUploading: false,
    showUploadButton: false,
  },
};