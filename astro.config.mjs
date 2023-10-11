import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'MtG Tropes',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Cards',
          autogenerate: { directory: 'cards' },
        },
        {
          label: 'Archetypes',
          autogenerate: { directory: 'archetypes' },
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: '/card-preview.js',
            defer: true,
            type: 'module',
          },
        },
      ],
    }),
  ],
});
