module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      includes: {
        options: {
          silent: true,
          includeRegexp: /(\s*)include\s+"(\S+)"\s*/
        },
        shader: {
          src: ['js1k.js'],
          dest: 'build'
        },
        js: {
          src: ['index.html'],
          dest: 'build'
        }
      },
      uglify: {
          build: {
              src: 'build/<%= pkg.main %>',
              dest: 'build/<%= pkg.name %>.min.js'
          }
      },
      jscrush: {
          build: {
              src: 'build/<%= pkg.name %>.min.js',
              dest: 'build/<%= pkg.name %>.crushed.js'
          }
      },
      'http-server': {
          'serve': {
              root: './build',
              port: 8000,
              host: '127.0.0.1',
              cache: 0,
              showDir : true,
              autoIndex: true,
              defaultExt: "html",
              runInBackground: false
          }
      }
  });

  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jscrush');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['includes:shader', 'uglify', 'jscrush', 'includes:js']);
  grunt.registerTask('serve', ['http-server']);

};
