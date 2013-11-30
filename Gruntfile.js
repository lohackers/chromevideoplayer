module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'app/background.js', 'app/js/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    sass: {
      dist: {
        files: {
          'dist/css/main.css': 'app/scss/main.scss'
        }
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'app/',
        src: ['index.html', 'background.js', 'img/**', 'css/**', 'js/**', 'manifest.json'],
        dest: 'dist/'
      },
      jsvendor: {
        expand: true,
        cwd: '.',
        src: ['bower_components/**'],
        dest: 'dist/js/'
      }
    },

    watch: {
      scripts: {
        files: ['app/*.html', 'app/js/**/*.js', 'app/scss/**/*.scss'],
        tasks: ['jshint', 'copy', 'sass'],
        options: {
          spawn: true
        },
      },
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'dist',
          keepalive: true,
          spawn: true
        }
      }
    },

    concurrent: {
      main: {
        tasks: ['jshint', 'copy', 'sass', 'watch', 'connect'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    clean: {
      main: ['dist/', '.sass-cache']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['jshint', 'copy', 'sass']);
  grunt.registerTask('develop', ['concurrent:main']);
};