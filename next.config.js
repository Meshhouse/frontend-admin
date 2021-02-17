module.exports = {
  compress: false,
  webpackDevMiddleware(config) {
    config.watchOptions = {
      ignored: [
        /\.next\//,
        /node_modules/
      ]
    };
    return config;
  }
};
