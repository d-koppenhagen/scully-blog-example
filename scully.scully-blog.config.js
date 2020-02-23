require('./extraPlugin/skip');

exports.config = {
  projectRoot: "./src/app",
  projectName: "scully-blog",
  outDir: './dist/static',
  routes: {
    '/projects/:projectId': {
      type: 'contentFolder',
      projectId: {
        folder: "./projects"
      },
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/books/:isbn': {
      'type': 'json',
      'isbn': {
        'url': 'https://api3.angular-buch.com/books',
        'property': 'isbn'
      }
    },
    '/secure': { type: 'skip' },
  }
};
