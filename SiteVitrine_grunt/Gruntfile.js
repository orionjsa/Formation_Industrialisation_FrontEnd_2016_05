/**
 * Created by Administrateur on 25/05/2016.
 */

module.exports = function(grunt){
    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {expand: true, src: 'index.html', dest: 'dist'},
                    {expand: true, src: 'js/*', dest: 'dist'},
                    {expand: true, src: 'css/*', dest: 'dist'},
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};