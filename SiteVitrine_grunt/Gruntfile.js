/**
 * Created by Administrateur on 25/05/2016.
 */

module.exports = function(grunt){
    grunt.initConfig({
        copy: {
            build: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};