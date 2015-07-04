/**
 * Created by EbyC on 7/3/2015.
 */
/**
 * Created by EbyC on 6/30/2015.
 */
/*global require, module,  __dirname */
"use strict";
module.exports = function(grunt) {

    grunt.initConfig({
        nodemon: {
            dev: {
                script: "./bin/www"
            }
        },
        jshint: {
            src: ['gruntfile.js', './app_server/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    require: true,
                    define: true,
                    requirejs: true,
                    describe: true,
                    expect: true,
                    it: true
                }
            }
        },
        eslint: {
            target: ['./app_server/**/*.js']
        }
    });


    // Load JSHint task
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks("grunt-contrib-eslint");

    // Default task.
    grunt.registerTask('default', [ 'jshint','nodemon']);
    grunt.registerTask('lint', ['eslint']);


};