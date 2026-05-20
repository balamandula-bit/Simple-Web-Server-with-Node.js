# NodeServe - Simple Node.js Web Server

A basic multi-route web server built with Node.js core modules only. It uses no Express and has no external dependencies.

## How to run

Open a terminal in the project folder:

```bash
cd "c:\Users\bala mandula\OneDrive\Web Development\assignment6"
```

Start the server:

```bash
npm start
```

You can also run it directly with `node server.js`.

Then open your browser at `http://localhost:3000`.

## Routes

| Route | Page |
|-------|------|
| `/` | Redirects to `/home` with status 301 |
| `/home` | Home page |
| `/about` | About page |
| `/contact` | Contact page |
| `/services` | Services page |
| `/style.css` | Shared stylesheet |
| Anything else | Custom 404 page |

## Testing

After starting the server, test these URLs:

```text
http://localhost:3000/
http://localhost:3000/home
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/services
http://localhost:3000/wrong
```

Expected results:

```text
/ -> 301 redirect to /home
/home -> 200
/about -> 200
/contact -> 200
/services -> 200
/wrong -> 404
```

## Project structure

```text
assignment6/
|-- package.json
|-- server.js
|-- README.md
|-- pages/
    |-- style.css
    |-- home.html
    |-- about.html
    |-- contact.html
    |-- service.html
    |-- 404.html
```

## How it works

The server uses Node's built-in `http` module to listen for requests on port `3000`. Each request URL is checked against a `routes` object. If the route exists, the matching HTML file is read asynchronously with `fs.promises.readFile` and returned with a `200` status code.

The `/style.css` route serves the shared stylesheet with the correct `text/css` content type. The root path `/` redirects to `/home` with a `301` status code. If a user visits an invalid route, the server returns `404.html` with a `404` status code. If a file cannot be read, the server returns a `500 Internal Server Error` response.

## Requirements

- Node.js v14 or newer
- No npm install needed
