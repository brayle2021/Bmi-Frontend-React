//
// Setup http-proxy-middleware
//
// Setup CORS
//
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

module.exports = function(app) {

  app.use(cors());

  app.use(
    '/test',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
    })
  );

  app.use(
    '/bmi-calculator',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
    })
  );

};

// package.json
// "proxy": "http://127.0.0.1:8000",
//
//
// .env file
//REACT_APP_BASE=http://127.0.0.1:3000
//
//
