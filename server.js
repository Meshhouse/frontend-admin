/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cookieParser = require('cookie-parser');

const devProxy = {
  '/api': {
    target: 'http://backend:8080',
    pathRewrite: { '^/api' : '' },
    headers: { 'X-Forwarded-Prefix': '/api' },
    changeOrigin: false,
  },
};

const port = parseInt(process.env.PORT, 10) || 8080;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();
    server.use(cookieParser());

    // Set up the proxy.
    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function(context) {
        server.use(createProxyMiddleware(context, devProxy[context]));
      });
    }

    server.all(/\.(js|json|png|svg|jpg|ico|gltf)$/i, (req, res) => {
      return handle(req, res)
    })
    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
