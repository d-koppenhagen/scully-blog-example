import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

require('./extraPlugin/skip');

export const config: ScullyConfig = {
  projectRoot: './src/app',
  projectName: 'scully-blog',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {
    '/projects/:projectId': {
      type: 'contentFolder',
      projectId: {
        folder: './projects'
      },
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      }
    },
    '/books/:isbn': {
      type: 'json',
      isbn: {
        url: 'https://api3.angular-buch.com/books',
        property: 'isbn'
      }
    },
    '/secure': { type: 'skip' },
  }
};
