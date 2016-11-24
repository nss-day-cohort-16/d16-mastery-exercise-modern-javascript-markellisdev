module.exports = function(grunt) {
  grunt.initConfig({

    browserify: {
      js: {
        src: ['../js/Battledome.js'],
        dest: '../dist/bundle.js'
      },
      options: {
        transform: ['hbsfy'],
        browserifyOptions: {
            paths: [
                "./node_modules"
            ]
        }
      }
    },

    jshint: {
      "files": ['../javascripts/**/*.js'], //location of javascript files
      "options": {
        "browser":true,
        "jquery": true,
        "predef": ["document", "console", "$"], //allows for predefined things not found in js
        "esnext": true, //allows for ES6
        "globalstrict": true,
        "globals": {Battledome: true} //name value pairs, allows to define global vars used in many files.
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
    },

    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/quiz.css': '../sass/quiz.scss'
        }
      }
    },

    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates**/*.hbs'],
        tasks: ['browserify']
      }
    }
});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.registerTask('default', ['jshint', 'copy','sass', 'browserify', 'watch']);
};