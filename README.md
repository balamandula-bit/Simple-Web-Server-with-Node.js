# NodeServe - Simple Node.js Web Server

A basic multi-route web server built with Node.js core modules only. It uses no Express and has no external dependencies.

Live site: https://simple-web-server-nodejs.netlify.app/

## How to run

Clone the repository and open the project folder:

```bash
git clone https://github.com/balamandula-bit/Simple-Web-Server-with-Node.js.git
cd Simple-Web-Server-with-Node.js
```

Start the server:

```bash
npm start
```

You can also run it directly with `node server.js`.

Then open your browser at `http://localhost:3000`. This local address will be the same for anyone running the project on their own computer, unless port `3000` is already being used by another app.

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

## Netlify deployment

This project can also be published on Netlify as a static site. The `netlify.toml` file tells Netlify to publish the `pages` folder and keeps the routes working without adding `.html` in the browser.

Live Netlify URL: https://simple-web-server-nodejs.netlify.app/

In Netlify, use these settings:

```text
Build command: leave empty
Publish directory: pages
```

The Node.js server is still included for the assignment and for local testing with `npm start`.

## Project structure

```text
assignment6/
|-- pages/
    |-- style.css
    |-- home.html
    |-- about.html
    |-- contact.html
    |-- service.html
    |-- 404.html
|-- .gitignore
|-- netlify.toml
|-- package.json
|-- README.md
|-- server.js
```

## How it works

The server uses Node's built-in `http` module to listen for requests on port `3000`. Each request URL is checked against a `routes` object. If the route exists, the matching HTML file is read asynchronously with `fs.promises.readFile` and returned with a `200` status code.

The `/style.css` route serves the shared stylesheet with the correct `text/css` content type. The root path `/` redirects to `/home` with a `301` status code. If a user visits an invalid route, the server returns `404.html` with a `404` status code. If a file cannot be read, the server returns a `500 Internal Server Error` response.

## Requirements

- Node.js v14 or newer
- No npm install needed
