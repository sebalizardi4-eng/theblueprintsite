// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://thebarblueprint.net',
  compressHTML: true,
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Karla',
      cssVariable: '--font-karla',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-playfair',
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Playfair Display SC',
      cssVariable: '--font-playfair-sc',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
});
