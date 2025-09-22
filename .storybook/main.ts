import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  // Solo incluir las páginas de presentación y documentación
  stories: [
    '../stories/Introduction.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/DesignTokens.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/UsageGuidelines.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/UseCases.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  
  // ADDONS MÍNIMOS PARA PRESENTACIÓN - SIN TOOLBARS
  addons: [
    '@storybook/addon-docs',  // Solo documentación
    // ❌ Removidos todos los addons que generan toolbars:
    // '@storybook/addon-controls',
    // '@storybook/addon-actions', 
    // '@storybook/addon-viewport',
    // '@storybook/addon-backgrounds',
    // '@storybook/addon-measure',
    // '@storybook/addon-outline'
  ],
  
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  
  docs: {
    autodocs: 'tag',
  },
  
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  
  // Custom favicon para presentación
  managerHead: (head) => `${head}<link rel="icon" href="/favicon.ico" />`,
  previewHead: (head) => `${head}<link rel="icon" href="/favicon.ico" />`,
  
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/Users/mariana/Documents/camtom/nyx-design-system/src',
        },
      },
    });
  },
};

export default config;