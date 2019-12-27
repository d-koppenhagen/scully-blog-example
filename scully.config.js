exports.config = {
  projectRoot: "./src/app",
  routes: {
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
    }
  }
};
