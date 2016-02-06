module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      replace: {
        shader: {
          src: 'src/fragment.glsl',
          dest: 'build/fragment.glsl',
          replacements: [{
            from:  /(\r?\n|\r)/g,
            to: ''
          }]
        }
      },
      includes: {
        options: {
          silent: true,
          includeRegexp: /(\s*)include\s+"(\S+)"\s*/,
          includePath: '.'
        },
        shader: {
          cwd: './src',
          src: ['./js1k.js'],
          dest: './build'
        },
        js: {
          cwd: './src',
          src: ['./index.html'],
          dest: './build'
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
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', ['replace', 'includes:shader', 'uglify', 'jscrush', 'includes:js']);
  grunt.registerTask('serve', ['http-server']);

};
