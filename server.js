const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PAGES_DIR = path.join(__dirname, 'pages');

// Maps routes to HTML files
const routes = {
  '/home':     'home.html',
  '/about':    'about.html',
  '/contact':  'contact.html',
  '/services': 'service.html',
};

async function serveFile(res, filePath, statusCode, contentType) {
  try {
    const content = await fs.promises.readFile(filePath);
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(content);
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
  }
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split('?')[0]; // strip query strings

  if (url === '/') {
    res.writeHead(301, { Location: '/home' });
    return res.end();
  }

  if (url === '/style.css') {
    return serveFile(res, path.join(PAGES_DIR, 'style.css'), 200, 'text/css');
  }

  const fileName = routes[url];
  if (fileName) {
    return serveFile(res, path.join(PAGES_DIR, fileName), 200, 'text/html');
  }

  serveFile(res, path.join(PAGES_DIR, '404.html'), 404, 'text/html');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Routes: /home  /about  /contact  /services');
});
