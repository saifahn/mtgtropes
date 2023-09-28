import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Tropes',
          autogenerate: { directory: 'tropes' },
        },
        {
          label: 'Sets',
          autogenerate: { directory: 'sets' },
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: '/card-preview.js',
            defer: true,
          },
        },
      ],
    }),
  ],
});
