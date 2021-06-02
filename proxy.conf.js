const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://ob24wec6.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;