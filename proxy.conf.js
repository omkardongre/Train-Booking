const { env } = require('process');

const target = env.API_URL || 'https://freeapi.miniprojectideas.com';

const PROXY_CONFIG = {
  "/api/*": {
    "target": target,
    "secure": true,
    "logLevel": "debug",
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;