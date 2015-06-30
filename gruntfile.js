/**
 * Created by EbyC on 6/30/2015.
 */
module.export  = function(grunt) {
    grunt.initConfig({
        eslint: {
            target: ['file.js']
        }
    });

    grunt.registerTask('default', ['eslint']);
};