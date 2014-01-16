/*
 * Generated on 2014-01-14
 * generator-assemble v0.4.6
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src:    'src',
      dist:   'dist',
      dest:   'build'
    },

    watch: {
      assemble: {
        files: [
          '<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml,html}'
        ],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dest %>/{,*/}*.html',
          '<%= config.dest %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dest %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dest %>/assets',
          layout: 'default.html',
          layoutdir: '<%= config.src %>/templates/layouts/',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.html'
        },
        files: {
          '<%= config.dest %>/': ['<%= config.src %>/templates/pages/*.html'],
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true, 
            cwd: '<%= config.dist %>/',
            src: '**',
            dest: '<%= config.dest %>/', 
            
          },
        ]
      }
    },
    

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dest %>/**/']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('server', [
    'clean',
    'assemble',
    
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'copy'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
