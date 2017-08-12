const conf = require('./gulp.conf');

module.exports = function () {
  return {
    ui: {
      port: 9001
    },
    port: 9000,
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ]
    },
    open: true
  };
};
