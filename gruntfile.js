/**
 * Created by EbyC on 6/30/2015.
 */
module.export  = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['./app_server/**/*.js'],
            options:{
                unused: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', 'jshint');

};